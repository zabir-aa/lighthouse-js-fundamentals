const checkAir = function (samples, threshold) {
  // Code here!
  let cleanSample = 0;
  let dirtySample = 0;
  for (i = 0; i < samples.length; i++){
    if (samples[i] === "clean"){
      cleanSample++;
    } else if (samples[i] === "dirty"){
      dirtySample++;
    }
  }
  return dirtySample / (cleanSample + dirtySample) < threshold ? "Clean" : "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))