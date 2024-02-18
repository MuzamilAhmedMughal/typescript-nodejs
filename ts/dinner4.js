let friends =["ali","hassan","huzaifa"];
friends.unshift("nawab");
friends.push("rafeer");
let hi= "dear";
let message ="i would like to invite you for dinner";
console.log(`${hi} ${friends[0]} i would be happy if you join us at dinner `);
console.log(`${hi} ${friends[1]} ${message} `);
console.log(`${hi} ${friends[2]} ${message} `);
console.log(`${hi} ${friends[3]} ${message} `);
console.log(`${hi} ${friends[4]} i would be gald if you come at dinner `);

console.log('sorry guys but the table might not be diliver on time so i can only invit two people at dinner');
while (friends.length > 2) {
    let a = friends.length;
    console.log(`i am really sorry for  not inviting you ${friends[a-1]} `);
     friends.pop();  
}
console.log(`${hi} ${friends[0]} you are still inviterd at the dinner`);
console.log(`${hi} ${friends[1]} you are still inviterd at the dinner`);

friends.pop();
friends.pop();

console.log(friends);
