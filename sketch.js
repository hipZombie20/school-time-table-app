var mon,tue,wed,thurs,fri,sat,sun;
var monImg,tueImg,wedImg,thursImg,friImg,satImg,sunImg;
var logo,start;
var logoImg,startImg;
var seva,sevb,sevc,sevd,seve,sevf,sevg;
var sevaImg,sevbImg,sevcImg,sevdImg,seveImg,sevfImg,sevgImg;
var gameState = "start";

function preload(){
monImg = loadImage("images/monday.png");
tueImg = loadImage("images/tuesday.png");
wedImg = loadImage("images/wednesday.jpg");
thursImg = loadImage("images/thursday.jpg");
friImg = loadImage("images/friday.jpg");
satImg = loadImage("images/saturday.png");
sunImg = loadImage("images/Holiday.jpg");
logoImg = loadImage("images/JHPS.jpg");
startImg = loadImage("images/start.png");
sevaImg = loadImage("images/7 A.png");
sevbImg = loadImage("images/7 B.png");
sevcImg = loadImage("images/7 C.png");
sevdImg = loadImage("images/7 D.png");
seveImg = loadImage("images/7 E.png");
sevfImg = loadImage("images/7 F.png");
sevgImg = loadImage("images/7 G.png");

}

function setup(){
createCanvas(1200,800)
logo = createSprite(600,400,10,20);
logo.addImage(logoImg);
start = createSprite(600,700,10,10);
start.addImage(startImg);
start.scale = 0.2;
seva = createSprite(300,200,10,10);
seva.addImage(sevaImg);
seva.scale = 0.6;
seva.visible = false;
sevb = createSprite(800,200,10,10);
sevb.addImage(sevbImg);
sevb.scale = 0.6;
sevb.visible = false;
sevc = createSprite(300,350,10,10);
sevc.addImage(sevcImg);
sevc.scale = 0.6;
sevc.visible = false;
sevd = createSprite(800,350,10,10);
sevd.addImage(sevdImg);
sevd.scale = 0.6;
sevd.visible = false;
seve = createSprite(300,500,10,10);
seve.addImage(seveImg);
seve.scale = 0.6;
seve.visible = false;
sevf = createSprite(800,500,10,10);
sevf.addImage(sevfImg);
sevf.scale = 0.6;
sevf.visible = false;
sevg = createSprite(550,650,10,10);
sevg.addImage(sevgImg);
sevg.scale = 0.6;
sevg.visible = false;

}

function draw(){
if(gameState === "start"){
    background("black");
    fill("white");
    textSize(40);
    text("School TimeTable For class 7th",330,75);
}

if (mousePressedOver(start)){
background("silver");
gameState = "section";
logo.visible = false;
start.visible = false;
seva.visible = true;
sevb.visible = true;
sevc.visible = true;
sevd.visible = true;
seve.visible = true;
sevf.visible = true;
sevg.visible = true;
fill("black");
textSize(40);
textStyle(BOLD);
text("Choose The Section",330,75);

}
if (mousePressedOver(seva)){
    sevaTimeTable();
    console.log("clicked on seva");
    }
drawSprites()
}
function sevaTimeTable(){
seva.visible = false;
sevb.visible = false;
sevc.visible = false;
sevd.visible = false;
seve.visible = false;
sevf.visible = false;
sevg.visible = false;
var d = new Date();
var n = d.getDay();
console.log(n);



















                 }








