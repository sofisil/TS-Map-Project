export  abstract class Person {
  private readonly name: string;
  private readonly location: {
    lat: string;
    lng: string;
  }

  constructor (
    name: string,
    location: {
      lat: string,
      lng: string
    }){
    this.name = name;
    this.location = {
      lat: location.lat,
      lng: location.lng
    }
  }
};
