// List of magicians
let magicians = ["atif aslam","abdaperveen","arjeet","snow"];
function showorginal(magicians) {
    for (let i=0 ; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
function thegreat(magicians) {
    for (let i=0 ; i < magicians.length; i++) {
        console.log(magicians[i] = "the great" + magicians[i]);
    }
};
  console.log("before");
  showorginal(magicians);
  console.log("after");
  thegreat(magicians);
  
