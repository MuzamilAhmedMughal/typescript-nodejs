let olduser = ["muzamil", "alishas", "hamza", "Huzaifa"];
let newuser = ["malik", "shams", "huzaifa", "alishas"];

let i = 0;
while (i < olduser.length) {
   let check = 0;
   while (check < newuser.length) {
     if (olduser[i].toLowerCase() === newuser[check].toLowerCase()) {
       console.log(`${newuser[check]} name already exists`);
       newuser.splice(check, 1);
       break;
     }
     check++;
   }
   i++;
 }