import { Mappable } from "./Mappable";
export class MapGeoCoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(
    map: google.maps.Map,
  ){
    this.map = map;
    this.geocoder = new google.maps.Geocoder;
  }
  AddMarkerInfo(marker: google.maps.Marker, mappable: Mappable): void {
    marker.addListener('click', () => {
      const latlng = {
        lat: marker.getPosition()!.lat(),
        lng: marker.getPosition()!.lng()
      }
      this.geocoder.geocode({location: latlng},
      (results, status) => {
        if (status == "OK"){
          const infoWindows = new google.maps.InfoWindow({
            content: mappable.markerTitle( () => results[0].formatted_address)
          });
          infoWindows.open(
            this.map,
            marker
          );
        } else {
          window.alert("Error on the geolocalization: " + status);
        }
      }
      )
    });
  }
}
