
let magicians = ["atif aslam","abdaperveen","arjeet","snow"];
function makeGreat(magicians) {
  let greatMagicians = [];

  for (let i = 0; i < magicians.length; i++) {
    greatMagicians.push(`The Great ${magicians[i]}`);
  }

  
  return greatMagicians;
}

let greatMagicians = makeGreat([...magicians]);


console.log("Original magicians:");
for (let i = 0; i < magicians.length; i++) {
  console.log(magicians[i]);
}


console.log("Great magicians:");
for (let i = 0; i < greatMagicians.length; i++) {
  console.log(greatMagicians[i]);
}