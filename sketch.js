var ball;
var database;
var position;
function setup(){
    database = firebase .database();
    var locationofchild = database.ref("Car/Position");
    locationofchild.on("value",readposition,showerror);

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Car/Position").set({
       x :ball.x + x,
       y:ball.y + y
    })
}
function readposition(data)
{
    position  = data.val();
    ball.x  = position .x;
 ball.y  = position .y;
}
function showerror()
{
    console.log("error")
}
