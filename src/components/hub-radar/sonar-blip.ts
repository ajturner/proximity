import { queryFeatures, IQueryFeaturesOptions} from '@esri/arcgis-rest-feature-layer';
import { getItemData } from "@esri/arcgis-rest-portal";
import { geocode } from '@esri/arcgis-rest-geocoding';

export class SonarBlip {
    getLocation(address: any) {
        return new Promise((resolve, reject) => {
            geocode(address)
            .then((response) => {
                console.log("getLocation then", response)
                resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
            })
            .catch(reject)
        })

    }

    getMap(id: string, address?: string) {
        return new Promise((resolve, reject) => {
            this.getLocation({
                address: address,
              }).then(location => {
                getItemData(id)
                .then(response => {
                    let promises = response['operationalLayers'].map(layer => {
                        return this.getFeatures(layer, location)
                    });
    
                    Promise.all(promises).then(results => {
                        console.log("getMap Promise all", results)
                        let features = []
                        results.map(r => {
                            
                            // There may not have been any features from this layer
                            if(r['features'].length > 0) {
                                r['description'] = r['features'][0].title
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
    getFeatures(layer: any, location) {
        console.log("getFeatures", layer, location)
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
                    "features": this.interpretResults(layer, results)
                }
                resolve(collection);
            }).catch(reject)
            
        });          
        
    }

    // Methods to convert features to interpolated display
    getValue(data, key, fields) {
        if(data.hasOwnProperty(key)) {
            return this.coerceAttributeValue(data,key,fields);
        } else {
           return "";
        }
    }
    coerceAttributeValue(data, key, fields) {
        switch (fields[key].type) {
            case "esriFieldTypeDate":
                return new Date(data[key]);
            default:
                return data[key];
        }
    }    
    interpretResults(layer, results) {
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
            return this.getValue(data, key, fields);
          });
          var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g,(m,key) =>{
            return this.getValue(data, key, fields);
          });
          let featureInfo = {"title": featureTitleInterpolated, "description": featureDescriptionInterpolated};
          featureInfos.push(featureInfo);
        });
        console.log("featureInfos", featureInfos)

        return featureInfos;
    }
}