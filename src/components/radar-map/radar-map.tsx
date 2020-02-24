import { Component, State, Host, Prop, h, Element, Watch } from "@stencil/core";
import { loadCss, loadModules } from "esri-loader";

// TODO: why won't render() with shadow:true
@Component({
  tag: "hub-radar-map",
  styleUrl: "radar-map.css",
  shadow: false 
})
export class radarMap {

  @Element() hostElement: HTMLElement;
  
  @Prop() webmap: string;
  @Prop({ mutable: true, reflect: true }) center: string;
  @Prop({ mutable: true, reflect: true }) zoom: string;
  
  @State() mapCenter: [number, number] = [-107, 38.9];
  @State() mapZoom: number = 4;
  
  @Watch('center')
  centerDidChangeHandler(newCenter: string) {
    console.debug("map: centerDidChangeHandler 1", [newCenter, this.esriMapView])
    if(newCenter && this.esriMapView) {
      this.mapCenter = JSON.parse(newCenter);
      console.debug("map: centerDidChangeHandler 2", [this.mapCenter, this.mapZoom])
      this.esriMapView.goTo({ zoom: this.mapZoom, center: this.mapCenter });
    }
  }
  
  @Watch('zoom')
  zoomDidChangeHandler(newZoom: string) {
    console.debug("map: zoomDidChangeHandler 1", [newZoom, this.esriMapView])
    if(newZoom && this.esriMapView) {
     this.mapZoom = JSON.parse(newZoom);  
     console.debug("map: zoomDidChangeHandler 2", [this.mapCenter, this.mapZoom])
     this.esriMapView.goTo({ zoom: this.mapZoom, center: this.mapCenter });
    }
  }  

  /**
   * esri-loader options
   */
  protected esriMapOptions = {
    url: `https://js.arcgis.com/4.14/`
  };

  /**
   * Properties to hold the map, mapview and featurelayer
   */
  protected esriMap: __esri.Map;
  protected esriMapView: __esri.MapView;
  // municipalitiesFeatureLayer: __esri.FeatureLayer;

  constructor() {
    this.webmap = this.webmap ? this.webmap : "41281c51f9de45edaf1c8ed44bb10e30"

    loadCss(`${this.esriMapOptions.url}/esri/css/main.css`);

    loadModules(
      ["esri/Map"],
      this.esriMapOptions
    ).then(
      ([EsriMap]: [
        __esri.MapConstructor
      ]) => {
        this.esriMap = new EsriMap({
          basemap: "streets"
        });

        this.centerDidChangeHandler(this.center)
        this.zoomDidChangeHandler(this.zoom)
        // this.municipalitiesFeatureLayer = new FeatureLayer({
        //   url:
        //     "https://services.arcgis.com/Li1xnxaTwJ2lGrgz/arcgis/rest/services/Kommuner/FeatureServer/0"
        // });

        // this.esriMap.add(this.municipalitiesFeatureLayer);
      }
    );
  }

  componentDidUpdate() {
    console.log("component update");
    // this.zoomToUrlObjectId(600);
  }

  /**
   * The component is loaded and has rendered.
   * Only called once per component lifecycle
   */
  componentDidLoad() {
    this.createEsriMapView()
      // .then(() => this.zoomToUrlObjectId())
      // .then(() => this.addZoomOnClickAndUrlUpdate());
  }

  /**
   * Creates the mapview used in the application
   */
  createEsriMapView() {
    return loadModules(["esri/WebMap", "esri/views/MapView"], this.esriMapOptions).then(
      ([WebMap, MapView]: [__esri.WebMapConstructor, __esri.MapViewConstructor]) => {
        
        const mapDiv = this.hostElement.querySelector("div");

        let mapOptions: __esri.MapViewProperties = { container: mapDiv }

        // Check how the map is initally set
        if(this.webmap) {
          mapOptions.map = new WebMap({
            portalItem: {
              id: this.webmap
            }
          });
        }
        
        if (this.center && this.zoom) {
          mapOptions.center = this.mapCenter;
          mapOptions.zoom = this.mapZoom;
        }
  
        this.esriMapView = new MapView( mapOptions );
      }
    );
  }

  /**
   * Zooms to objectid passed in url map/{objectid}
   */
  // zoomToUrlObjectId(duration = 1600) {
    // if (this.match && this.match.params && this.match.params.objectid) {
    //   this.municipalitiesFeatureLayer
    //     .queryFeatures({
    //       where: "objectid = " + this.match.params.objectid,
    //       num: 1,
    //       returnGeometry: true
    //     })
    //     .then(results => {
    //       if (results.features.length) {
    //         const firstResult = results.features[0];
            // this.zoomToAndHighlighFeature(firstResult, duration);
    //       }
    //     });
    // }
  // }

  zoomToAndHighlighFeature(feature: __esri.Graphic, duration = 1600) {
    this.esriMapView.when(() => {
      const symbol = {
        type: "simple-fill",
        color: [51, 51, 204, 0.9],
        style: "solid",
        outline: {
          color: "white",
          width: 1
        }
      };

      const highlightPolygon = feature.clone();
      highlightPolygon.set("symbol", symbol);

      this.esriMapView.graphics.removeAll();
      this.esriMapView.graphics.add(highlightPolygon);

      this.esriMapView.goTo(feature.geometry, {
        duration: duration,
        easing: "ease-in"
      });
    });
  }

  // addZoomOnClickAndUrlUpdate() {
  //   this.esriMapView.on("click", evt => {
  //     this.esriMapView
  //       .whenLayerView(this.municipalitiesFeatureLayer)
  //       .then((lyrView: __esri.FeatureLayerView) => {
  //         lyrView.queryFeatures().then(results => {
  //           results.features.some(f => {
  //             const polygon = f.geometry as __esri.Polygon;
  //             if (polygon.contains(evt.mapPoint)) {
  //               // this.history.push(`/map/${f.attributes.ObjectId}`, {});
  //               this.zoomToAndHighlighFeature(f, 500);
  //               return true;
  //             }
  //             return false;
  //           });
  //         });
  //       });
  //   });
  // }

  render() {
    return (
      <Host>
        <div class="radar-map"></div>
      </Host>
    )
  }
}

// import { Component, Prop, Method, h } from '@stencil/core';
// import { loadCss, loadModules } from "esri-loader";

// // Based on tutorial https://www.joshmorony.com/creating-a-google-maps-web-component-with-stencil/
// @Component({
//   tag: 'hub-radar-map',
//   styleUrl: 'radar-map.css',
//   shadow: false
// })
// export class radarMap {

//   @Prop() apiKey: string;

//   public map: any;
//   public markers: any[] = [];
//   private mapsLoaded: boolean = false;
//   // private networkHandler = null;

//   render() {
//     return [
//       <h3>Map!</h3>,
//       <div class='radar-map' id='radar-map-container'></div>
//     ]
//   }

//   componentDidLoad() {

//     this.init().then(() => {
//       console.log("Map ready.")
//     }, (err) => { 
//       console.log(err);
//     });

//   }

//   init(): Promise<any> {

//     return new Promise((resolve, reject) => {

//       this.loadAPI().then(() => {

//         this.initMap().then(() => {
//           resolve(true);
//         }, (err) => {
//           reject(err);
//         });

//       }, (err) => {

//         reject(err);

//       });

//     });

//   }

//   loadAPI(): Promise<any> {

//     console.log("Loading Maps API");

//     return new Promise((resolve, reject) => {

//       if(!this.mapsLoaded){

//         // TODO: investigate Ionic Capacitor for native apps
//         // Network.getStatus().then((status) => {
//         //   if(status.connected){

//             this.injectAPI().then(() => {
//               resolve(true);
//             }, (err) => {
//               reject(err);
//             });

//           // } else {
//           // TODO: investigate Ionic Capacitor for native apps
//           //   if(this.networkHandler == null){
//           //     this.networkHandler = Network.addListener('networkStatusChange', (status) => {
//           //       if(status.connected){
//           //         this.networkHandler.remove();
//                   this.init().then(() => {
//                     console.log("Maps ready.")
//                   }, (err) => { 
//                     console.log(err);
//                   });
//           //       }
//           //     });
//           //   }
//           //   reject('Not online');
//           // }

//         // }, (err) => {
//         //   console.log(err);
//         // });

//       } else {
//         reject('API already loaded');
//       }

//     });


//   }

//   injectAPI(): Promise<any> {

//     return new Promise((resolve) => {

//       window['mapInit'] = () => {
//         this.mapsLoaded = true;
//         resolve(true);
//       }

//       let script = document.createElement('script');
//       script.id = 'arcgis-js';
//       script.src = 'https://js.arcgis.com/4.14/';
//       document.body.appendChild(script);

//       let style = document.createElement('link');
//       style.id = 'arcgis-js';
//       style.rel = "stylesheet"
//       style.href = 'https://js.arcgis.com/4.14/esri/css/main.css';
//       document.body.appendChild(style);
//     });

//   }

//   initMap(): Promise<any> {

//     return new Promise((resolve, reject) => {

//       // Geolocation.getCurrentPosition().then((position) => {
//       // console.log(position);

//         // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//         // let mapOptions = {
//         //   center: latLng,
//         //   zoom: 15
//         // };

//         loadModules([
//           "esri/Map",
//           "esri/views/MapView"
//         ]).then(([Map, MapView]) => {
    
//         var map = new Map({
//           basemap: "topo-vector"
//         });
    
//         var view = new MapView({
//           container: "radar-map-container",
//           map: map,
//           center: [-118.80500, 34.02700], // longitude, latitude
//           zoom: 13
//         });
//       });
//         // this.map = new google.maps.Map(document.getElementById('radar-map-container'), mapOptions);
//         resolve(true);

//       // }, () => {
//       //   reject('Could not initialise map');
//       // });

//     });

//   }

//   // @Method()
//   // addMarker(lat: number, lng: number): void {

//     // let latLng = new google.maps.LatLng(lat, lng);

//     // let marker = new google.maps.Marker({
//     //   map: this.map,
//     //   animation: google.maps.Animation.DROP,
//     //   position: latLng
//     // });

//     // this.markers.push(marker);

//   // }

//   // @Method()
//   // getCenter(){
//   //   return this.map.getCenter();
//   // }

// }
