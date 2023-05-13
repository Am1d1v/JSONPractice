

let person = {
  name: "Dima",
  tel: "+11111111111",
  parents: {
    mom: "momName",
    dad: "dadName"
  }
}


//console.log(JSON.stringify(person));
//console.log(JSON.parse(JSON.stringify(person)));
let clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "N"

console.log(person);
console.log(clone);