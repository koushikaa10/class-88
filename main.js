var canvas = new fabric.Canvas('my_canvas');
player_x = 10;
player_y = 10;
block_img_height = 30;
block_img_width = 30;
var player_object = "";
var block_img_object = "";

function newImage(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({top:player_y,left:player_x});
        canvas.add(block_img_object);

    
    }
    );
}

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);

    
    }
    );
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) 
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed  == '71'){
        newImage('ground.png');
        console.log("g");
    }
    if(keyPressed  == '67'){
        newImage('cloud.jpg');
        console.log("c");
    } 
    if(keyPressed  == '68'){
        newImage('dark_green.png');
        console.log("d");
    } 
    
    if(keyPressed  == '76'){
        newImage('light_green.png');
        console.log("l");
    } 
    
    if(keyPressed  == '82'){
        newImage('roof.jpg');
        console.log("r");
    } 
    
    if(keyPressed  == '84'){
        newImage('trunk.jpg');
        console.log("t");
    } 
    
    if(keyPressed  == '85'){
        newImage('unique.png');
        console.log("u");
    } 
    
    if(keyPressed  == '87'){
        newImage('wall.jpg');
        console.log("w");
    } 
    
    if(keyPressed  == '89'){
        newImage('yellow_wall.png');
        console.log("y");
    } 
}

function up() 
{ if(player_y >=0) 
    { player_y = player_y - block_img_height; 
     console.log("block image height = " + block_img_height); 
     console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
     canvas.remove(player_object); 
     player_update(); } }


        function down()
         { if(player_y <=650) 
        { player_y = player_y + block_img_height; 
        console.log("block image height = " + block_img_height); 
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
        canvas.remove(player_object); 
        player_update(); } }


        function left() 
        { if(player_x >0) 
        { player_x = player_x - block_img_width; 
        console.log("block image width = " + block_img_width); 
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
        canvas.remove(player_object); 
        player_update(); } }




        function right() {
         if(player_x <=650)
        { player_x = player_x + block_img_width; 
        console.log("block image width = " + block_img_width); 
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
         canvas.remove(player_object);
        player_update(); } }
