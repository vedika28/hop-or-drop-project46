class Booster {

    constructor(x, y) {
        this.body = createSprite(x, y, 10, 10);
        //this.body.addImage("boost",booster);
        //this.body.scale = 0.5;
    }

    double() {
        if (frameCount%2===0) {
            score+=1;
        }
    }
}