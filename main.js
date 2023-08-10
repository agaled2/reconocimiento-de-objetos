function setup(){
canvas = createCanvas(400,400)
video = createCapture(VIDEO)
video.hide();
ia = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5sbWWyTE9/model.json",listo)
}
function draw(){
    image(video, 0, 0, 400, 400)
    ia.classify(video, respuesta)
}
function listo(){
    console.log("estoy listo");
}
function respuesta(error, resultados) {
    if (!error) {
        objeto = resultados[0].label;
        confianza = resultados [0].confidence
        confianza = Math.round(confianza * 100)

        document.getElementById("objeto").innerHTML = objeto
        document.getElementById("porcentaje").innerHTML = confianza
    }
}