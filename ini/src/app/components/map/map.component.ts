import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod'
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 19.4337377;
  lng = -99.1541865;
  map: mapboxgl.Map | undefined;

  constructor() { }
  

  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [this.lng, this.lat],
      zoom: 8.6
    });

  }

  

}
