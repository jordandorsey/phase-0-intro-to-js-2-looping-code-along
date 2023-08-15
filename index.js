for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);

const name = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name) {
    const newNames = []
    for (let countDown = 0; countDown < 3; countDown++) {
        newNames.push(`Thank you, ${name[countDown]}, for the wonderful surprise gift!`);
        console.log(`Thank you, ${name[countDown]}, for the wonderful surprise gift!`);
    }
    return newNames;
}

function countDown() {
     let countDown = 0; 
     while (countDown < 11) {
        console.log(countDown++);
    }
    return countDown;
}