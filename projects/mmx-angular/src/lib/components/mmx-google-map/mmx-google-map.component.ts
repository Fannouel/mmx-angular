/// <reference types="@types/googlemaps" />
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'mmx-google-map',
  standalone: true,
  imports: [],
  templateUrl: './mmx-google-map.component.html',
  styleUrl: './mmx-google-map.component.scss'
})
export class MmxGoogleMapComponent implements AfterViewInit {
  @Input() public stores!: any[];
  @Input() public closestStores!: any[];
  @Input() public nbStoreDisplay = 10;
  _focusedStore!: {coordinates: google.maps.LatLng | any, zoom: number};
  @Input() set focusedStore(value: any) {
    this._focusedStore = value;
    if(value) {
      this.seeOnMap(value.store, value.zoom); 
    }
  }
  get focusedStore() {
    return this._focusedStore;
  }

  @Output() public changeClosestStores = new EventEmitter<any>();

  @ViewChild('gmapContainer', {static: false}) gmap!: ElementRef;
  public map!: google.maps.Map ;
  public openedInfoWindow!: google.maps.InfoWindow;
  // default is Paris
  @Input() userCoordinates: google.maps.LatLng = new google.maps.LatLng(48.864716, 2.349014);

  addMarkers() {
    for (const store of this.stores) {
      var marker = new google.maps.Marker({
        position: store.coordinates,
        map: this.map,
        title: store.name
      });

      var content=  `<p>
        ${store.name}<br />
        ${store.address.street}<br />
        ${store.address.city}<br />
        ${store.address.country}
      </p>`

      if(store.phone) {
        content += `<p><a href="tel:${store.phone}">${store.phone}</a></p>`
      }

      if(store.website) {
        content += `<p><a href="${store.website}">${store.website}</a></p>`
      }
      this.attachInfo(marker, content);
    }
  }

  private attachInfo(marker: google.maps.Marker, content: string) {
    var infoWindow = new google.maps.InfoWindow({
      content: content});

    marker.addListener('click', () => {
      if(this.openedInfoWindow) {
        this.openedInfoWindow.close();
      }

      this.openedInfoWindow = infoWindow;

      infoWindow.setContent(content);
      // close all other info windows

      infoWindow.open(this.map, marker);

    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  ngAfterViewInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // set to user coordinates
      this.userCoordinates = new google.maps.LatLng(lat, lng);
      this.mapInitializer(this.userCoordinates);
    }, (error) => {
      this.mapInitializer(this.userCoordinates);
    }
    );
  }


  mapInitializer(coordinates: google.maps.LatLng) {
    var mapOptions = { center: coordinates, zoom: 2};
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
    this.addMarkers();
    this.setClosestStores(coordinates);
   }

  public seeOnMap(store:any, zoom:number = 10) {
    var coordinates = store != null ? store.coordinates : this.userCoordinates;
    this.map.setCenter(coordinates);
    this.map.setZoom(zoom)
    this.setClosestStores(store.coordinates);
  }

  public setClosestStores(coordinates: google.maps.LatLng) {
    var closestStores = this.stores.sort((a, b) => {
      var distanceA = google.maps.geometry.spherical.computeDistanceBetween(coordinates, a.coordinates);
      var distanceB = google.maps.geometry.spherical.computeDistanceBetween(coordinates, b.coordinates);
      return distanceA - distanceB;
    });
    this.closestStores = closestStores.slice(0, this.nbStoreDisplay);
    this.changeClosestStores.emit(this.closestStores);
  }
}
