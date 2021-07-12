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
      if (vegetables[i][metric] > top){
        top = vegetables[i][metric];
        winner = vegetables[i].submitter;
        console.log(i + winner );
      }
    }
  return winner
}
console.log(judgeVegetable (vegetables,metric));