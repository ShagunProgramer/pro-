var girlanimation,girl;

var bg;
var jack ,jack_img;
var shira,shira_img;
var mother,mother_img;
var father,father_img;
var startGame;
var h1,h1_img;
var play1;
var access1;
var button1;
const accessCode1="1875"
function preload(){

jack_img=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png")
shira_img=loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png")
bg=loadImage("bg1.png")
h1_img=loadImage("h1.jpg")
play1=loadImage("play1.png")
}
function setup (){
createCanvas(windowWidth,windowHeight)

// password 

access1 = createInput("Entor you password")
access1.position(100,90);
access1.style('background', 'white');  


button1 = createButton('Check');
 button1.position(100,120);
button1.style('background', 'lightgrey');




startGame=new Start()
startGame.display()

h1=createSprite(windowWidth/2,windowHeight/2)
h1.addImage(h1_img)
h1.scale=1.49
h1.visible=false

jack=createSprite(900,500)
jack.addAnimation("running",jack_img)
jack.visible=true

shira=createSprite(700,500)
shira.addAnimation("running",shira_img)
shira.visible=true

}
function draw(){

    background(bg)
    button1.mousePressed(() => {
        if(accessCode1==access1.value()){
            button1.hide();
            access1.hide();
            clear()
            background(play1)
        }  
        
    });

drawSprites()
}