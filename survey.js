const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What should we call you? ', (name) => {
  rl.question('What do you like doing for fun? ', (hobby) => {
    rl.question(`What do you listen to while you are ${hobby}? `, (music) => {
      rl.question('What is your favourite meal of the day (ie lunch, dinner)? ', (meal) => {
        rl.question(`What is your favourite dish to eat for ${meal}? `, (dish) => {
          rl.question('What sport is your favourite? ', (sport) => {
            rl.question('What are you amazing at? ', (skill) => {
              console.log(`${name} loves listening to ${music} while ${hobby}, devouring ${dish} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${skill}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});