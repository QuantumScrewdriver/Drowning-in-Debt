var sitePosition = 1;

function change1to2(){
    close1();
    open2();
    sitePosition = 2;
    document.getElementById("backGround").className="from-1-to-2";
}

function change2to3(){
    close2();
    open3();
    document.getElementById("backGround").className="from-2-to-3";
    document.getElementById("backGround").style.animationDelay = "1s";
    document.getElementById("backGround").style.webkitAnimationDelay = "1s";
    sitePosition = 3;
}

function change1to3(){
    close1();
    open3();
    document.getElementById("backGround").className="from-1-to-3";
    document.getElementById("backGround").style.animationDelay = "1s";
    document.getElementById("backGround").style.webkitAnimationDelay = "1s";
    sitePosition = 3;
}

function change3to4(){
    close3();
    setTimeout(createCircle, 1500)
    var back = document.getElementById("backGround");
    back.className="from-3-to-4";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
}

function answerQ1() {
    var q1 = document.getElementById("askQuestion1");
    q1.classList.remove("animator7");
    void q1.offsetWidth;
    q1.classList.add("animator7-reverse");
    q1.style.animationDelay = "0s";
    var btn2 = document.getElementById("button2");
    btn2.classList.add("animator6-reverse");
    btn2.style.animationDelay = "0s";
    function btn2out(){btn2.style.display = "none";}
    setTimeout(btn2out, 1000);
    var btn3 = document.getElementById("button3");
    btn3.classList.add("animator6-reverse");
    btn3.style.animationDelay = "0s";
    function btn3out(){btn3.style.display = "none";}
    setTimeout(btn3out, 1000);
    document.getElementById("vmap").style.visibility = "visible";
    document.getElementById("vmap").classList.add("animator7");
    document.getElementById("vmap").style.animationPlayState = "running";
    document.getElementById("text1").style.visibility = "visible";
    document.getElementById("text1").classList.add("animator7");
    document.getElementById("text1").style.animationPlayState = "running";
}

function answerQ2() {
    var q1 = document.getElementById("askQuestion1");
    q1.classList.remove("animator7");
    void q1.offsetWidth;
    q1.classList.add("animator7-reverse");
    q1.style.animationDelay = "0s";
    var btn2 = document.getElementById("button2");
    btn2.classList.remove("animator6");
    void btn2.offsetWidth;
    btn2.classList.add("animator6-reverse");
    btn2.style.animationDelay = "0s";
    var btn3 = document.getElementById("button3");
    btn3.classList.remove("animator6");
    void btn3.offsetWidth;
    btn3.classList.add("animator6-reverse");
    document.getElementById("button3").style.animationDelay = "0s";
    var sorry = document.getElementById("apology");
    var back = document.getElementById("goback2");
    function reveal() {sorry.style.display = "initial"; back.style.display = "initial";}
    setTimeout(reveal, 2000);
}

function goback2() {
    var sorry = document.getElementById("apology");
    sorry.style.display = "none";
    var back = document.getElementById("goback2");
    back.style.display = "none";
    reset2from2();
    open2();
    var qu1 = document.getElementById("askQuestion1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");
    qu1.style.animationDelay = "0s";
    btn2.style.animationDelay = "0s";
    btn3.style.animationDelay = "0s";
}

jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        enableZoom: false,
        showTooltip: true,
        selectedColor: '#666666',
        hoverColor: '#FFFFFF',
        onRegionClick: function(event, code, region){
            document.getElementById("text1").innerHTML = "Your state is: " + region;
            document.getElementById("stateName").innerHTML = region;
            document.getElementById("text2").className = "toMajor btn";
            document.getElementById("text2").style.visibility = "visible";
            document.getElementById("text2").addEventListener("click", setRent)
        }
    });
})

function testButton() {
    document.getElementById("tester").innerHTML = "Completed!";
}

function how1() {
    var bubble1 = document.getElementById("speechbubble1");
    bubble1.classList.remove("animatorpopout");
    void bubble1.offsetWidth;
    bubble1.classList.add("animatorpopout-reverse");
    bubble1.style.animationPlayState = "running";
    bubble1.style.webkitAnimationPlayState = "running";
    bubble1.style.animationDelay = "0s";
    bubble1.style.webkitAnimationDelay = "0s";
    function produceGraph(){
        document.getElementById("wapo_graph").style.animationPlayState = "running";
        document.getElementById("wapo_graph").style.webkitAnimationPlayState = "running";
    }
    setTimeout(produceGraph, 1000);
    var fish = document.getElementById("fishy");
    fish.classList.remove("animatorpopout");
    fish.classList.add("fishSlide1");
    fish.style.animationDelay = "0s";
    fish.style.webkitAnimationDelay = "0s";
    var bubble2 = document.getElementById("speechbubble2");
    bubble2.style.left = "40%";
    bubble2.style.animationDelay = "1s";
    bubble2.style.webkitAnimationDelay = "1s";
    bubble2.style.animationPlayState = "running";
    bubble2.style.webkitAnimationPlayState = "running";
    document.getElementById("info-btn1").style.display = "none";
    document.getElementById("info-btn2").style.display = "initial";
}

function how2() {
    var fish = document.getElementById("fishy");
    fish.classList.remove("fishSlide1");
    void fish.offsetWidth;
    fish.classList.add("fishSlide1-reverse");
    fish.style.animationPlayState = "running";
    fish.style.webkitAnimationPlayState = "running";
    var bubble2 = document.getElementById("speechbubble2");
    bubble2.classList.remove("animatorpopout");
    void bubble2.offsetWidth;
    bubble2.classList.add("animatorpopout-reverse");
    bubble2.style.animationDelay = "0s";
    bubble2.style.webkitAnimationDelay = "0s";
    var graph = document.getElementById("wapo_graph");
    graph.classList.remove("animatorpopout");
    void graph.offsetWidth;
    graph.classList.add("animatorpopout-reverse");
    graph.style.animationDelay = "0s";
    graph.style.webkitAnimationDelay = "0s";
    var bubble3 = document.getElementById("speechbubble3");
    bubble3.style.left = "30%";
    bubble3.style.animationDelay = "1s";
    bubble3.style.webkitAnimationDelay = "1s";
    bubble3.style.animationPlayState = "running";
    bubble3.style.webkitAnimationPlayState = "running";
    document.getElementById("info-btn2").style.display = "none";
    var btn3 = document.getElementById("info-btn3");
    btn3.style.display = "initial";
    btn3.classList.add("animatorpopout");
    btn3.style.animationDelay = "2s";
    btn3.style.webkitAnimationDelay = "2s";
    btn3.style.animationPlayState = "running";
    btn3.style.webkitAnimationPlayState = "running";
}

function close1() {
    var first = document.getElementById("firstText");
    var second = document.getElementById("secondText");
    var third = document.getElementById("thirdText");
    var fourth = document.getElementById("fourthText");
    first.classList.remove("animator2");
    void first.offsetWidth;
    first.classList.add("animator2-reverse");
    first.style.animationDelay="0s";
    first.style.webkitAnimationDelay="0s";
    second.classList.remove("animator3");
    void second.offsetWidth;
    second.classList.add("animator3-reverse");
    second.style.animationDelay="0s";
    second.style.webkitAnimationDelay="0s";
    third.classList.remove("animator4");
    void third.offsetWidth;
    third.classList.add("animator4-reverse");
    third.style.animationDelay="0s";
    third.style.webkitAnimationDelay="0s";
    fourth.classList.remove("animator5");
    void fourth.offsetWidth;
    fourth.classList.add("animator5-reverse");
    fourth.style.animationDelay="0s";
    fourth.style.webkitAnimationDelay="0s";
    setTimeout(document.getElementById("button1").style.display = "none", 1000);
}

function close2() {
    var circle = document.getElementById("circleContainer");
    var wtf = document.getElementById("wtf");
    circle.classList.remove("animatorpopout");
    void circle.offsetWidth;
    circle.classList.add("animatorpopout-reverse");
    wtf.classList.remove("animatorpopout");
    void wtf.offsetWidth;
    wtf.classList.add("animatorpopout-reverse");
    function eraser1() {document.getElementById("wtf").style.zIndex = "-1";}
    setTimeout(eraser1, 1000);
    document.getElementById("rent").style.visibility = "hidden";
    document.getElementById("debt").style.visibility = "hidden";
    document.getElementById("salary").style.visibility = "hidden";
}

function close3(){
    var fish = document.getElementById("fishy");
    fish.classList.remove("fishSlide1-reverse");
    void fish.offsetWidth;
    fish.classList.add("animatorpopout-reverse");
    fish.style.animationPlayState = "running";
    fish.style.webkitAnimationPlayState = "running";
    fish.style.animationDelay = "0s";
    fish.style.webkitAnimationDelay = "0s";
    var bubble3 = document.getElementById("speechbubble3");
    bubble3.classList.remove("animatorpopout");
    void bubble3.offsetWidth;
    bubble3.classList.add("animatorpopout-reverse");
    bubble3.style.animationPlayState = "running";
    bubble3.style.webkitAnimationPlayState = "running";
    bubble3.style.animationDelay = "0s";
    bubble3.style.webkitAnimationDelay = "0s";
    var btn3 = document.getElementById("info-btn3");
    btn3.classList.remove("animatorpopout");
    void btn3.offsetWidth;
    btn3.classList.add("animatorpopout-reverse");
    btn3.style.animationPlayState = "running";
    btn3.style.webkitAnimationPlayState = "running";
    btn3.style.animationDelay = "0s";
    btn3.style.webkitAnimationDelay = "0s";
}

function open1() {
    var text1 = document.getElementById("firstText");
    var text2 = document.getElementById("secondText");
    var text3 = document.getElementById("thirdText");
    var text4 = document.getElementById("fourthText");
    var btn1 = document.getElementById("button1");
    text1.style.animationPlayState = "running";
    text1.style.webkitAnimationPlayState = "running";
    text2.style.animationPlayState = "running";
    text2.style.webkitAnimationPlayState = "running";
    text3.style.animationPlayState = "running";
    text3.style.webkitAnimationPlayState = "running";
    text4.style.animationPlayState = "running";
    text4.style.webkitAnimationPlayState = "running";
    btn1.style.animationPlayState = "running";
    btn1.style.webkitAnimationPlayState = "running";
}

function open2() {
    var qu1 = document.getElementById("askQuestion1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");
    qu1.style.display = "initial";
    qu1.classList.add("animator7");
    qu1.style.animationDelay = "2s";
    qu1.style.animationPlayState = "running";
    qu1.style.webkitAnimationPlayState = "running";
    btn2.style.display = "initial";
    btn2.classList.add("animator6");
    btn2.style.animationDelay = "2s";
    btn2.style.animationPlayState = "running";
    btn2.style.webkitAnimationPlayState = "running";
    btn3.style.display = "initial";
    btn3.classList.add("animator6");
    btn3.style.animationDelay = "2s";
    btn3.style.animationPlayState = "running";
    btn3.style.webkitAnimationPlayState = "running";
}

function open3(){
    var fish = document.getElementById("fishy");
    fish.style.animationPlayState = "running";
    fish.style.webkitAnimationPlayState = "running";
    fish.style.animationDelay = "2s";
    fish.style.webkitAnimationDelay = "2s";
    var btn1 = document.getElementById("info-btn1");
    btn1.style.display = "initial";
    var bubble1 = document.getElementById("speechbubble1");
    bubble1.style.animationPlayState = "running";
    bubble1.style.webkitAnimationPlayState = "running";
    bubble1.style.animationDelay = "2s";
    bubble1.style.webkitAnimationDelay = "2s";
    function openButton1() {
        btn1.style.display = "initial";
        btn1.style.animationPlayState = "running";
        btn1.style.webkitAnimationPlayState = "running";
    }
    setTimeout(openButton1, 2000);
}

function open4(){
    createCircle();
}

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

function reset1() {
    var text1 = document.getElementById("firstText");
    var text2 = document.getElementById("secondText");
    var text3 = document.getElementById("thirdText");
    var text4 = document.getElementById("fourthText");
    var btn1 = document.getElementById("button1");
    text1.style.replace("text1 animator2-reverse", "text1 animator2");
    void text1.offsetWidth;
    text2.style.replace("text2 animator3-reverse", "text2 animator3");
    void text2.offsetWidth;
    text3.style.replace("text3 animator4-reverse", "text3 animator4");
    void text3.offsetWidth;
    text4.style.replace("text4 animator5-reverse", "text4 animator5");
    void text4.offsetWidth;
    void btn1.offsetWidth;
    btn1.style.display = "initial";
}

function reset2from2() {
    var q1 = document.getElementById("askQuestion1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");
    q1.classList.remove("q1");
    q1.classList.remove("animator7-reverse")
    void q1.offsetWidth;
    q1.classList.add("q1");
    btn2.classList.remove("btn");
    btn2.classList.remove("answerText1");
    btn2.classList.remove("animator6-reverse");
    void btn2.offsetWidth;
    btn2.classList.add("btn");
    btn2.classList.add("answerText1");
    btn3.classList.remove("btn");
    btn3.classList.remove("answerText2");
    btn3.classList.remove("animator6-reverse");
    void btn3.offsetWidth;
    btn3.classList.add("btn");
    btn3.classList.add("answerText2");
}

function roundCssTransformMatrix(element){
    var el = document.getElementById(element);
    var mx = window.getComputedStyle(el, null); //gets the current computed style
    el.style.transform=""; //resets the redifined matrix to allow recalculation, the original style should be defined in the class not inline.
        mx = mx.getPropertyValue("-webkit-transform") ||
        mx.getPropertyValue("-moz-transform") ||
        mx.getPropertyValue("-ms-transform") ||
        mx.getPropertyValue("-o-transform") ||
        mx.getPropertyValue("transform") || false;
    var values = mx.replace(/ |\(|\)|matrix/g,"").split(",");
    for(var v in values) {  values[v]=Math.ceil(values[v]);  }
    $("#"+element).css({ transform:"matrix("+values.join()+")" } );
}


$( document ).ready(function() { roundCssTransformMatrix("fixed"); });