import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod'
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //37.7996462,-122.2526912
  lat = 19.4337377;
  lng = -99.1541865;
  //lat = 37.7996462;
  //lng = -122.2526912;
  map!: mapboxgl.Map;

  constructor() { }


  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [this.lng, this.lat],
      zoom: 8.6
    });
    this.map.on('load', this.onLoad.bind(this));
    this.crearMarcador(this.lng, this.lat);
    this.crearMarcador(-99.1541865, 19.4337377);
    this.crearMarcador(-99.19631827085632, 19.170679706594115);
    this.crearMarcador(-99.03498131170676, 19.125432736541228);
    this.crearMarcador(-99.0198559717865, 19.25875656389354);
    this.crearMarcador(-99.08035733146752, 19.33965037386581);
    this.crearMarcador(-99.20388094081645, 19.284932466282896);
    this.crearMarcador(-99.16102581104256, 19.365813329506835);


  }

  onLoad(){
    /* Sample feature from the `examples.8fgz4egr` tileset:
    {
    "type": "Feature",
    "properties": {
    "ethnicity": "White"
    },
    "geometry": {
    "type": "Point",
    "coordinates": [ -122.447303, 37.753574 ]
    }
    }
    */
    this.map.addSource('ethnicity', {
    type: 'vector',
    url: 'mapbox://examples.8fgz4egr'
    });
    this.map.addLayer({
    'id': 'population',
    'type': 'circle',
    'source': 'ethnicity',
    'source-layer': 'sf2010',
    'paint': {
    // make circles larger as the user zooms from z12 to z22
    'circle-radius': {
    'base': 1.75,
    'stops': [
    [12, 2],
    [22, 180]
    ]
    },
    // color circles by ethnicity, using a match expression
    // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
    'circle-color': [
    'match',
    ['get', 'ethnicity'],
    'White',
    '#fbb03b',
    'Black',
    '#223b53',
    'Hispanic',
    '#e55e5e',
    'Asian',
    '#3bb2d0',
    /* other */ '#ccc'
    ]
    }
    });
  }

  crearMarcador(lngM: number, latM: number) {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
        .setLngLat([lngM, latM])
        .addTo(this.map);

        marker.on('drag', () => {
            console.log(marker.getLngLat()
            )
        })

  }
}
