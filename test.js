vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'

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
console.log(judgeVegetable (vegetables,metric));