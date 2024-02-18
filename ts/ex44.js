function sandwitch(...item) {
    console.log('make a sand which with these things');
    for (let i = 0; i < item.length; i++) {
        console.log(`${i +1}: ${item[i]}`);
    }
   
  }
  sandwitch("chicken","chesse","mashroom","butter");
  sandwitch("mayo","chesse","beef","bbqsoces");
  sandwitch("avacado","mayo","egg");