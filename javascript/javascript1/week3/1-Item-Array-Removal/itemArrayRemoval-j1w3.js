/* suman ghimire javascript1-week3- item array removal */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  let nameToRemove = "Ahmad";

  /*
  // removes one item starting from index 1 whichi is second item in the array 
  nameToRemove = names.splice(1,1);
  console.log(nameToRemove);
// 'Ahmad' is removed form the array
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
   */

let id = names.indexOf(nameToRemove);
for ( let nameIndex in names){
  if (names[nameIndex] === nameToRemove){
    console.log( nameToRemove + " found in index of: " + nameIndex);
    nameToRemove = names.splice(id,1);
    
  } else{ console.log( nameToRemove + " not found in index of : "+ nameIndex  );
}
}
console.log(names);




names.push("Ahmad"); 
// pushing Ahmad again in last index of names[]
console.log(names);

id = names.indexOf(nameToRemove);
// the same command as above again to delete the added ahamad in last of index
nameToRemove = "Ahmad" ;
for ( let nameIndex in names){
  if (names[nameIndex] === nameToRemove){
    console.log( nameToRemove + " found in index of: " + nameIndex);
    nameToRemove = names.splice(id,1);
    
  } else{ console.log( nameToRemove + " not found in index of : "+ nameIndex);
}
}
console.log(names);


// how to remove two items (eg Ahmad && Yana) at one time from the array ?
