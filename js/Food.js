class food{
    constructor(){
        this.foodStock = 0;
        this.lastFed ;
        this.image = loadImage("images/Milk.png");
    
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
getlastfed(lastFed){
    this.lastFed = lastFed;

}
deductFood(){
    if(this.foodStock>0){
        this.foodStock = this.foodStock-1;
    }
}
getfoodstock(){
    return this.foodStock;
}
display(){
    x = 80;
    y = 100;
    imageMode(CENTRE);
    image(this.image,720,220,70,70);
if(this.foodStock!=0){
    for(i=0; i<this.foodStock; i++){
        if(i%10===0){
            x = 80;
            y = y+50; 
        }
        image(this.image,x,y,50,50);
        x = x+30;
    }
}
}
}
    

        
    