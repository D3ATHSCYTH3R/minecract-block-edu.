var canvas = new fabric.Canvas('c');

biw = 30;
bih = 30;

px= 10;
py= 10;

var player_object="";

var bi="";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
player_object= Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    left:px,
    top:py
});
canvas.add(player_object);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function (Img){
    bi=Img;

    bi.scaleToHeight(bih);
    bi.scaleToWidth(biw);
    bi.set({
        left:px,
        top:py
    });
    canvas.add(bi);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    pressed= e.keyCode;
    console.log(pressed);

if(e.shiftKey== true && pressed=='80'){
    console.log("shift and p are pressed together");
    biw= biw +10;
    bih= bih +10;
    document.getElementById("wnow").innerHTML=biw;
    document.getElementById("hnow").innerHTML=bih;
}
if(e.shiftKey && pressed =='77'){
    console.log("shift and m are pressed together");
    biw= biw -10;
    bih= bih -10;
    document.getElementById("wnow").innerHTML=biw;
    document.getElementById("hnow").innerHTML=bih;
}

if(pressed=='38'){
up();
console.log("up pressed");
}
if(pressed=='40'){
down();
console.log("down pressed");
}
if(pressed=='39'){
right();
console.log("right pressed");
}
            
if(pressed=='37'){
left();
console.log("left pressed");
}   

if(pressed=='84'){
    new_image('trunk.jpg');
    console.log("t has been pressed");
    
}
if(pressed=='76'){
    new_image('light_green.png');
    console.log("l has been pressed");
}
if(pressed=='71'){
    new_image('ground.png');
    console.log("g has been pressed");
}
if(pressed=='87'){
    new_image('wall.jpg');
    console.log("w has been pressed");
}
if(pressed=='89'){
    new_image('yellow_wall.png');
    console.log("y has been pressed");
}
if(pressed=='82'){
    new_image('roof.jpg');
    console.log("r has been pressed");
}
if(pressed=='67'){
    new_image('cloud.jpg');
    console.log("c has been pressed");
}
if(pressed=='85'){
    new_image('unique.png');
    console.log("u has been pressed");
}
}
function up(){
    if (py>=0){
        py=py-bih;
        console.log("block image height= "+ bih);
        console.log("player y = "+py+"player x = "+px);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (py<=500){
        py=py+bih;
        console.log("block image height= "+ bih);
        console.log("player y = "+py+"player x = "+px);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (px>=0){
        px=px-biw;
        console.log("block image height= "+ bih);
        console.log("player y = "+py+"player x = "+px);
        canvas.remove(player_object);
        player_update();
    }
}
    function right(){
        if (px<=900){
            px=px+biw;
            console.log("block image height= "+ bih);
            console.log("player y = "+py+"player x = "+px);
            canvas.remove(player_object);
            player_update();
        }
    }