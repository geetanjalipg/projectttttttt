var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        player_obj=img;
        player_obj.scaleToWidth(700);
        player_obj.scaleToHeight(510);
        player_obj.set({
            top:0,
            left :0
        });
        canvas.add(player_obj);


    });
	
}

function playSound(){
	x.play();

}
