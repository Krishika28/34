//Create variables here
var dog, happyDog, database, feed,foodStock, dog_img, happy_img,fedTime, lastFed,foodObj;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg");
  happy_img= loadImage("images/dogImg1");

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
  createCanvas(1000, 400);

  database = firebase.database;
  dog = createSprite(250,250,20,20);

  feed = createButton("Feed the Dog");
  feed.position(700,90);
  feed.mousePressed(feedDog);

  addFood  = createButton("addFood");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}


function draw() {  
background(46, 139, 87);

if(keyDown === UP_ARROW){
  writeStock(food);
  dog.addImage(happy_img);
}

  imageMode(CENTER)
  image(dog_img ,dog.position.x,dog.position.y,60,60);

  drawSprites();
  //add styles here
  textSize(20);
  fill(118, 252, 250);
  text("Note: Press UP_ARROW key to feed the dog",400,370);

}

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed: "+ lastFed%12 + "PM",350,30);
}
else if(lastFed = 0){
  text("Last Feed :12 PM",350,30);
}
else{
  text("Last Feed: "+ lastFed + "AM",350,30);
}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
Food:foodObj.getFoodStock(),
FeedTime:hour()
  })
}
function foodStock(){
  foodS++;
  database.ref('/').update({
Food:foodS
  })
}

