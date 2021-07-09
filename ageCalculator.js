function ageCalculator(name,birthYear,currentYear){
  let age = name + " is "+ (currentYear-birthYear)+ " years old.";
  return age;
}
console.log(ageCalculator("Zabir",1988,2021));