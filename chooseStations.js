const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

function chooseStations(station){
  let goodStations = [];
  for (let item = 0; item < station.length; item++){
    if (station[item][1] >= 20 && (station[item][2] == 'school' || station[item][2] == 'community centre')){
      goodStations.push(station[item][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));