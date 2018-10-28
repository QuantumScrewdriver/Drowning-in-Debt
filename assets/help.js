function createCircle(){
    var doc = document.getElementById("circleContainer1");
    doc.style.animationPlayState = "running";
    doc.style.webkitAnimationPlayState = "running";
}

function closeCircle(){
    var doc = document.getElementById("circleContainer1");
    doc.classList.remove("swirl-out");
    void doc.offsetWidth;
    doc.classList.add("swirl-out-reverse");
    doc.style.animationPlayState = "running";
    doc.style.webkitAnimationPlayState = "running";
}

function getInfo(objectID){
    var doc = document.getElementById("circleContainer1");
    if (doc.classList.contains("swirl-out")){
        doc.classList.remove("swirl-out");
    }
    else {
        doc.classList.remove("circle-open-reverse");
    }
    void doc.offsetWidth;
    doc.classList.add("circle-open");
    var circleName = "circleof" + objectID;
    var circle = document.getElementById(circleName);
    circle.classList.remove("swirl-out-circle-reverse");
    void doc.offsetWidth;
    circle.classList.add("swirl-out-circle");
    circle.style.display = "initial";
    circle.style.animationPlayState = "running";
    circle.style.webkitAnimationPlayState = "running";
    var squareName = "square" + objectID;
    var square = document.getElementById(squareName);
    if (square.classList.contains("swirl-out-square-reverse")){
        square.classList.remove("swirl-out-square-reverse");
        void square.offsetWidth;
        square.classList.add("swirl-out-square");
    }
    else {
        void square.offsetWidth;
        square.classList.add("swirl-out-square");
    }
    square.style.display = "initial";
    square.style.animationPlayState = "running";
    square.style.webkitAnimationPlayState = "running";
    var i;
    for (i = 1; i <= 4; i++){
        var circlenamer = "help" + i;
        var circlething = document.getElementById(circlenamer);
        var circleFunction = "circle-open" + i;
        if (circlething.classList.contains("circle-open" + i + "-reverse")){
            circlething.classList.remove("circle-open" + i + "-reverse")
        }
        void circlething.offsetWidth;
        circlething.classList.add(circleFunction);
    }
}

function goBack(ID){
    objectID = ID.substring(4, 9)
    var doc = document.getElementById("circleContainer1");
    doc.classList.remove("circle-open");
    void doc.offsetWidth;
    doc.classList.add("circle-open-reverse");
    var circleName = "circleof" + objectID;
    var circle1 = document.getElementById(circleName);
    function setNone1(){
        circle1.style.display = "none";
    }
    circle1.classList.remove("swirl-out-circle");
    void doc.offsetWidth;
    circle1.classList.add("swirl-out-circle-reverse");
    circle1.style.animationPlayState = "running";
    circle1.style.webkitAnimationPlayState = "running";
    setTimeout(setNone1, 1000);
    var squareName = "square" + objectID;
    var square = document.getElementById(squareName);
    square.classList.remove("swirl-out-square");
    void doc.offsetWidth;
    square.classList.add("swirl-out-square-reverse");
    function setNone2(){square.style.display = "none"}
    setTimeout(setNone2, 1000);
    square.style.animationPlayState = "running";
    square.style.webkitAnimationPlayState = "running";
    var i;
    for (i = 1; i <= 4; i++){
        var circlenamer = "help" + i;
        var circlething = document.getElementById(circlenamer);
        var circleFunction1 = "circle-open" + i;
        circlething.classList.remove(circleFunction1);
        var circleFunction2 = "circle-open" + i + "-reverse";
        void circlething.offsetWidth;
        circlething.classList.add(circleFunction2);
    }
}