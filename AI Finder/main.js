video = "";

function preload(){
video = createVideo('video.mp4');
video.hide();


}

function setup(){
    canvas = createCanvas(460,360);
    canvas.center();
    

}

function draw(){
    image(video,0,0,460,360);


}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";

}