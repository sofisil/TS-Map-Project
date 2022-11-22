import { Mappable } from './Mappable';
import { Person } from './Person';


export class MyHome implements Mappable {
  private location: {
    lat: string;
    lng: string;
  };

  get getLocation() {
    return this.location;
  };

  constructor (
    passenger: Person
    ){
    this.location = {
      lat: (parseInt(passenger.getLocation.lat) +0.002 ).toString(),
      lng: (parseInt(passenger.getLocation.lng) +0.001 ).toString(),
    };
  }
}
