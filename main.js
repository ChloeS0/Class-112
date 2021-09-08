Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
})

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("webcam_output").innerHTML="<img id='img' src='"+data_uri+"'>";
    });
}

console.log("ml5 version is" + ml5.version);

classifier=ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded()
{
console.log("model is loaded");
}

function check()
{
    img=document.getElementById("img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.error(error);
}else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
}
}