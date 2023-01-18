function setup(){
    canvas=createCanvas(550,450);
    canvas.position(800,100);
    video=createCapture(VIDEO);
    video.size(550,450);
    video.position(100,100);
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on("pose",gotposes);

}
function modalloaded(){
    console.log("posenet is loaded.");
}
function gotposes(results){
    console.log(results);
}