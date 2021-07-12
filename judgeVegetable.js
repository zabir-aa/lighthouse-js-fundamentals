const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 10
  }
]

metric = "redness"
/*
const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let top = 0;
  let winner;
  for(let i = 0; i < vegetables.length; i++){
    if (metric === "plumpness"){
      if (vegetables[i].plumpness > top){
        top = vegetables[i].plumpness;
        winner = vegetables[i].submitter;
        console.log(i + " Plumpness winner: " + winner )

      }
    } else if (metric === "redness"){
      if (vegetables[i].redness > top){
        top = vegetables[i].redness;
        winner = vegetables[i].submitter;
        console.log(i + " Redness winner: " + winner )
      }
    }
  }
  return winner;
};
*/

const judgeVegetable = function (vegetables, metric) {
  let top = 0;
  let winner;
  for(let i = 0; i < vegetables.length; i++){
      if (vegetables[i][metric] > top){
        top = vegetables[i][metric];
        winner = vegetables[i].submitter;
      }
    }
  return winner
}
console.log(judgeVegetable (vegetables,metric));