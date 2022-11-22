import { Person } from "./Person";
export class Map {
  private googleMap: google.maps.Map;
  constructor (divId: string){
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        }
      });
  }

  AddMarker(person: Person){
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: parseInt (person.getLocation.lat),
        lng: parseInt (person.getLocation.lng)

      }
    })
  }
};

