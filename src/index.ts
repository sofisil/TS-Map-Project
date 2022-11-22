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
  var map = new Map("map");
