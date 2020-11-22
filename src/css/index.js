import document from "document";
import { getStateItem, setStateCallback, removeStateCallback, setStateItem } from '../state';
import { switchPage } from '../navigation';

let $buttonDetail = null;

let $myList = null;

export function destroy() {
  console.log('destroy index page');
  $myList = null;
  removeStateCallback();
}


function draw() {
  let NUM_ELEMS = 10;
  let restaurants = getStateItem("restaurants");

  $myList.delegate = {
    getTileInfo: (index) => {
      return {
        type: "my-pool",
        name: restaurants[index].name,
        distance: restaurants[index].distance,
        rating: restaurants[index].rating,
        index: index
      };
    },
    configureTile: (tile, info) => {
      console.log(`Item: ${info.index}`)
      if (info.type == "my-pool") {
        tile.getElementById("text").text = `${info.name}`;
        tile.getElementById("text2").text = `${info.distance}`*1000 + "m";
        tile.getElementById("text3").text = `${info.rating}`+ "/10";
        let touch = tile.getElementById("touch");
        touch.onclick = () => {
          console.log(info.index);
          setStateItem('restaurantDetail', info.index);
          switchPage('detail', true);
        }
      }
    }
  };

  // length must be set AFTER delegate
  $myList.length = restaurants.length;

}


export function init() {
  console.log('init index page');
  $myList = document.getElementById("myList");
  console.log('list');
  draw();
  setStateCallback(draw);
}
