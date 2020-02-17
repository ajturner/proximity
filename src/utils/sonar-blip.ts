import { queryFeatures, IQueryFeaturesOptions} from '@esri/arcgis-rest-feature-layer';
import { getItemData } from "@esri/arcgis-rest-portal";
import { geocode } from '@esri/arcgis-rest-geocoding';

export function getMessages(webmap: string, address: string): Promise<any> {
    // First clear previous messages 
    let messages = [];

    return getMap(webmap, address)
}

function getLocation(address: any) {
    return new Promise((resolve, reject) => {
        geocode(address)
        .then((response) => {
            // console.log("getLocation then", response)
            resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        })
        .catch(reject)
    })

}

function getMap(id: string, address?: string) {
    return new Promise((resolve, reject) => {
        getLocation({
            address: address,
            }).then(location => {
            getItemData(id)
            .then(response => {
                // Get Features from each map layer
                let promises = response['operationalLayers'].reverse().map(layer => {
                    return getFeatures(layer, location)
                });

                Promise.all(promises).then(results => {
                    // console.log("getMap Promise all", results)
                    let features = []
                    results.map(r => {
                        
                        // There may not have been any features from this layer
                        if(r['features'].length > 0) {
                            r['description'] = r['features'][0].title
                            r['description'] += `<br/><em>${r['features'][0].description}</em>`
                        }
                        features.push(r)
                    })
                    resolve(features)
                })
                
            })
            .catch(reject)
            })
            .catch(reject)
    });
}
function getFeatures(layer: any, location) {
    // console.log("getFeatures", layer, location)
    let options:IQueryFeaturesOptions = {
        "url": layer.url,
        "outFields": "*",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326"
    }

    if(layer.title.indexOf('Nearby') !== -1) {
        let match = layer.title.match(/Nearby (\d+)/);
        let distance;
        if(match !== null ) {
            distance = parseInt(match[1]);
        }
        options["distance"] = distance;
        options["units"] = 'esriSRUnit_Meter';
    }

    // if (location.length !== undefined) {
        options["geometry"] = location;
    // }

    return new Promise((resolve, reject) => {
        queryFeatures(options)
        .then(results => {
            let collection = {
                "title": layer.title,
                "features": interpretResults(layer, results)
            }
            resolve(collection);
        }).catch(reject)
        
    });          
    
}

// Methods to convert features to interpolated display
function getValue(data, key, fields) {
    if(data.hasOwnProperty(key)) {
        return coerceAttributeValue(data,key,fields);
    } else {
        return "";
    }
}
function coerceAttributeValue(data, key, fields) {
    switch (fields[key].type) {
        case "esriFieldTypeDate":
            return new Date(data[key]);
        default:
            return data[key];
    }
}    
function interpretResults(layer, results) {
    let fields = {};
    // console.log('results from t-f', results);
    results.fields.forEach((field) => {
        fields[field.name] = field;
    });

    let featureInfos = [];
    // let layerTitle = layer.title;
    let featureTitle = layer.popupInfo.title;
    let featureDescription = layer.popupInfo.description;

    results.features.forEach((feature) => {
        let data = feature.attributes;
        // Template replace `{POP00001}` -> feature['POP00001']
        var featureTitleInterpolated = featureTitle.replace(/\{(\w*)\}/g, (m,key) => {
            return getValue(data, key, fields);
        });
        if(featureDescription !== null) {
            var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g,(m,key) =>{
                return getValue(data, key, fields);
            });
        }
        let featureInfo = {
            "title": featureTitleInterpolated, 
            "description": featureDescriptionInterpolated ? featureDescriptionInterpolated : ""
        };
        featureInfos.push(featureInfo);
    });
    // console.log("featureInfos", featureInfos)

    return featureInfos;
}
