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
//  lat = 19.4337377;
//  lng = -99.1541865;
  lat = 37.7996462;
  lng = -122.2526912;
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
}
