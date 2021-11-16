var canvas=new fabric.Canvas('myCanvas');

player_x=30;
player_y=30;

block_width=30;
block_height=30;

var player_img="";
var block_img="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_img=Img;

        player_img.scaleToWidth(160);
        player_img.scaleToHeight(150);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}

function blockupdate(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img=Img;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}