function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FxLMvHGB8/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
    console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        img=document.getElementById('alien1');
        
        if (results[0].label=="Dog"){
          img.src='dog.png';  
          
        }else if (results[0].label=="Cat"){
            img.src='cat.png';  
            
          } else if (results[0].label=="cow"){
            img.src='cow.png';  
            
        }
           
    }
}
