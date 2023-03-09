var Prediction_1 = "";
var Prediction_2 = "";

Webcam.set({
    width : 350,    
    height: 300,
    image_format:"png",
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach("#camera");
function capture_image(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='image' src='"+data_uri+"'>";
    
    });
}
console.log("ml5.version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dDTx89eh8/model.json",modelLoaded);
function modelLoaded(){
    console.log("model has been loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_1="The first prediction is "+Prediction_1;
    var speak_2="And the second prediction is "+Prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterthis);
}