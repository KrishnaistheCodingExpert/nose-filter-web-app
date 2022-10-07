noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage("https://i.postimg.cc/bvjvxzB5/Clown-Nose-Download-Transparent-PNG-Image.png");
}

function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX-15, noseY-15, 30, 30);
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posNet = ml5.poseNet(video, moddelloaded);
    posNet.on('pose', gotPoses);
}

function take_snapshot() {
    save('myFilterimage.png');
}

function moddelloaded() {
    console.log('PosNet is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

