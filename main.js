function preload () {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    party_hat = loadImage('https://cdn.pixabay.com/photo/2012/04/26/12/07/party-hat-42329_1280.png');
    sunglasses = loadImage('https://cdn.pixabay.com/photo/2020/11/25/20/58/sunglasses-5777157_1280.png');
    leftEar = loadImage("https://cdn.pixabay.com/photo/2012/04/05/01/17/ear-25595_1280.png");
    rightEar = loadImage("https://i.postimg.cc/hhWP162j/image-2.png");
}

function setup () {
  canvas = createCanvas(300, 300)
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

noseX = 0;
noseY = 0;
hatX = 0;
hatY = 0;
glassX = 0;
glassY = 0;
EarLX = 0;
EarLY = 0;
EarRX = 0;
EarRY = 0;


function modelLoaded() {
    console.log("LOADED POSENET")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        hatX = results[0].pose.nose.x-50;
        hatY = results[0].pose.nose.y-200;
        glassX = results[0].pose.rightEye.x - 10;
        glassY = results[0].pose.rightEye.y - 20;
        EarLX = results[0].pose.leftEar.x;
        EarLY = results[0].pose.leftEar.y-20;
        EarRX = results[0].pose.rightEar.x-40;
        EarRY = results[0].pose.rightEar.y-20;


    }
}

function draw () {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
  image(party_hat, hatX, hatY, 100, 100);
  image(sunglasses, glassX, glassY, 50, 40)
  image(leftEar, EarLX, EarLY, 50, 50);
  image(rightEar, EarRX, EarRY, 50, 50);

}

function take_snapshot() {
    save('mypicture.png')
}