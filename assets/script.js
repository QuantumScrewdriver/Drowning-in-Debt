var sitePosition = 1;

function change1to2(){
    close1();
    open2();
    sitePosition = 2;
    document.getElementById("backGround").className="from-1-to-2";
}

function change2to3(){
    close2();
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

function answerQ1() {
    document.getElementById("askQuestion1").classList.add("animator6");
    document.getElementById("askQuestion1").style.animationDirection = "reverse";
    document.getElementById("askQuestion1").style.animationDelay = "0s";
    document.getElementById("button2").classList.add("animator6");
    document.getElementById("button2").style.animationDirection = "reverse";
    document.getElementById("button2").style.animationDelay = "0s";
    document.getElementById("button2").style.zIndex = "-1";
    document.getElementById("button3").classList.add("animator6");
    document.getElementById("button3").style.animationDirection = "reverse";
    document.getElementById("button3").style.animationDelay = "0s";
    document.getElementById("button3").style.zIndex = "-1";
    document.getElementById("vmap").style.visibility = "visible";
    document.getElementById("vmap").classList.add("animator7");
    document.getElementById("vmap").style.animationDirection = "normal";
    document.getElementById("text1").style.visibility = "visible";
    document.getElementById("text1").classList.add("animator7");
    document.getElementById("text1").style.animationDirection = "normal";
}

function answerQ2() {
    document.getElementById("button2").classList.add("animator6");
    document.getElementById("button2").style.animationDirection = "reverse";
    document.getElementById("button2").style.animationDelay = "0s";
    document.getElementById("button2").style.zIndex = "-1";
    document.getElementById("button3").classList.add("animator6");
    document.getElementById("button3").style.animationDirection = "reverse";
    document.getElementById("button3").style.animationDelay = "0s";
    document.getElementById("button3").style.zIndex = "-1";
    document.getElementById("apology").style.visibility = "visible";
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
            document.getElementById("text2").className = "button toMajor";
            document.getElementById("text2").style.visibility = "visible";
            document.getElementById("text2").addEventListener("click", setRent)
        }
    });
})

function testButton() {
    document.getElementById("tester").innerHTML = "Completed!";
}

function how1() {
    document.getElementById("speechbubble1").style.animationDirection = "reverse";
    document.getElementById("speechbubble1").style.webkitAnimationDirection = "reverse";
    function produceGraph(){
        document.getElementById("wapo_graph").style.animationPlayState = "running";
        document.getElementById("wapo_graph").style.webkitAnimationPlayState = "running";
    }
    setTimeout(produceGraph, 1000);
}

function close1() {
    document.getElementById("firstText").style.animationDelay = "0s";
    document.getElementById("secondText").style.animationDelay = "0s";
    document.getElementById("thirdText").style.animationDelay = "0s";
    document.getElementById("fourthText").style.animationDelay = "0s";
    document.getElementById("firstText").style.animationDirection = "reverse";
    document.getElementById("secondText").style.animationDirection = "reverse";
    document.getElementById("thirdText").style.animationDirection = "reverse";
    document.getElementById("fourthText").style.animationDirection = "reverse";
    document.getElementById("button1").style.animationDirection = "reverse";
    document.getElementById("button1").style.cursor = "default";
}

function close2() {
    document.getElementById("circleContainer").style.animationDirection = "reverse";
    document.getElementById("wtf").style.animationDirection = "reverse";
    function eraser1() {document.getElementById("wtf").style.zIndex = "-1";}
    setTimeout(eraser1, 1000);
    document.getElementById("rent").style.visibility = "hidden";
    document.getElementById("debt").style.visibility = "hidden";
    document.getElementById("salary").style.visibility = "hidden";
}

function open2() {
    document.getElementById("askQuestion1").style.visibility = "visible";
    document.getElementById("askQuestion1").classList.add("animator7");
    document.getElementById("askQuestion1").style.animationDirection = "normal";
    document.getElementById("askQuestion1").style.animationDelay = "2s";
    document.getElementById("button2").style.visibility = "visible";
    document.getElementById("button2").classList.add("animator6");
    document.getElementById("button2").style.animationDirection = "normal";
    document.getElementById("button2").style.animationDelay = "2s";
    document.getElementById("button3").style.visibility = "visible";
    document.getElementById("button3").classList.add("animator6");
    document.getElementById("button3").style.animationDirection = "normal";
    document.getElementById("button3").style.animationDelay = "2s";
}

function open3(){
    document.getElementById("fishy").style.animationPlayState = "running";
    document.getElementById("fishy").style.webkitAnimationPlayState = "running";
    document.getElementById("info-btn1").style.display = "initial";
    document.getElementById("speechbubble1").style.animationPlayState = "running";
    document.getElementById("speechbubble1").style.webkitAnimationPlayState = "running";
    function openButton1() {
        document.getElementById("info-btn1").style.display = "initial";
        document.getElementById("info-btn1").style.animationPlayState = "running";
        document.getElementById("info-btn1").style.webkitAnimationPlayState = "running";
    }
    setTimeout(openButton1, 1000);
}