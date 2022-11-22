/**
  import { Passenger } from './Passenger';
  import { Driver } from './Driver';

  const p = new Passenger();
  console.log(p);

  const d = new Driver();
  console.log(d);
 */

/**
  new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    }
  );
 */

import { Map } from "./Map"
import { Driver } from "./Driver";
import { Passenger } from "./Passenger";
import { MyHome } from './MyHome';

var map = new Map("map");

const driver = new Driver();
const passenger = new Passenger();
const myhome = new MyHome(passenger);

map.AddMarker(driver);
map.AddMarker(passenger);
map.AddMarker(myhome);
