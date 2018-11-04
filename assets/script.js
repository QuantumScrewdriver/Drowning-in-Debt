var sitePosition = 1;
var completed = 0;

function change1to2(){
    close1();
    if(completed ==  1){
        reset2();
        removeSidebar();
    }
    setTimeout(open2, 2000);
    sitePosition = 2;
    document.getElementById("backGround").className="from-1-to-2";
    document.getElementById("backGround").style.animationDelay = "1s";
    document.getElementById("backGround").style.webkitAnimationDelay = "1s";
    affectSidebar(sitePosition);
}

function change1to3(){
    close1();
    if(completed == 1){
        removeSidebar();
        reset3();
    }
    setTimeout(open3, 2000);
    document.getElementById("backGround").className="from-1-to-3";
    document.getElementById("backGround").style.animationDelay = "1s";
    document.getElementById("backGround").style.webkitAnimationDelay = "1s";
    sitePosition = 3;
    affectSidebar(sitePosition);
}

function change1to4(){
    close1();
    setTimeout(open4, 2000);
    var back = document.getElementById("backGround");
    back.className="from-1-to-4";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 4;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change2to1(){
    close2();
    reset1();
    setTimeout(open1, 2000);
    var back = document.getElementById("backGround");
    back.className="from-2-to-1";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 1;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change2to3(){
    close2();
    if(completed == 1){
        removeSidebar();
        reset3();
    }
    setTimeout(open3, 2000);
    document.getElementById("backGround").className="from-2-to-3";
    document.getElementById("backGround").style.animationDelay = "1s";
    document.getElementById("backGround").style.webkitAnimationDelay = "1s";
    sitePosition = 3;
    affectSidebar(sitePosition);
}

function change2to4(){
    close2();
    setTimeout(open4, 2000);
    var back = document.getElementById("backGround");
    back.className="from-2-to-4";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 4;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change3to1(){
    close3();
    reset1();
    setTimeout(open1, 2000);
    var back = document.getElementById("backGround");
    back.className="from-3-to-1";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 1;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change3to2(){
    close3();
    if(completed ==  1){reset2()}
    setTimeout(open2, 2000);
    var back = document.getElementById("backGround");
    back.className="from-3-to-2";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 2;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change3to4(){
    close3();
    setTimeout(open4, 2000);
    var back = document.getElementById("backGround");
    back.className="from-3-to-4";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 4;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change4to1(){
    close4();
    reset1();
    setTimeout(open1, 2000);
    var back = document.getElementById("backGround");
    back.className="from-4-to-1";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 1;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change4to2(){
    close4();
    if(completed ==  1){reset2()}
    setTimeout(open2, 2000);
    var back = document.getElementById("backGround");
    back.className="from-4-to-2";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 2;
    affectSidebar(sitePosition);
    if(completed == 1){removeSidebar();};
}

function change4to3(){
    close4();
    if(completed == 1){
        removeSidebar();
        reset3();
    }
    setTimeout(open3, 2000);
    var back = document.getElementById("backGround");
    back.className="from-4-to-3";
    back.style.animationDelay="1s";
    back.style.webkitAnimationDelay="1s";
    sitePosition = 3;
    affectSidebar(sitePosition);
}

function affectSidebar(position){
    var el1 = document.getElementById("sidebar1");
    var el2 = document.getElementById("sidebar2");
    var el3 = document.getElementById("sidebar3");
    var el4 = document.getElementById("sidebar4");
    if(position == 1){
        el1.style.display = "flex";
        el2.style.display = "none";
        el3.style.display = "none";
        el4.style.display = "none";
    }
    else if(position == 2){
        el1.style.display = "none";
        el2.style.display = "flex";
        el3.style.display = "none";
        el4.style.display = "none";
    }
    else if(position == 3){
        el1.style.display = "none";
        el2.style.display = "none";
        el3.style.display = "flex";
        el4.style.display = "none";
    }
    else if(position == 4){
        el1.style.display = "none";
        el2.style.display = "none";
        el3.style.display = "none";
        el4.style.display = "flex";
    }
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
    var info1 = document.getElementById("info-btn1");
    info1.classList.remove("animatorpopout");
    void info1.offsetWidth;
    info1.classList.add("animatorpopout-reverse");
    function info1out(){
        info1.style.display = "none";
    }
    setTimeout(info1out, 1000);
    var info2 = document.getElementById("info-btn2");
    function openButton1() {
        info2.style.display = "initial";
        info2.style.animationPlayState = "running";
        info2.style.webkitAnimationPlayState = "running";
    }
    setTimeout(openButton1, 2000);
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
    var info2 = document.getElementById("info-btn2");
    info2.classList.remove("animatorpopout");
    void info2.offsetWidth;
    info2.classList.add("animatorpopout-reverse");
    function info2out(){
        info2.style.display = "none";
    }
    setTimeout(info2out, 1000);
    var btn3 = document.getElementById("info-btn3");
    btn3.style.display = "initial";
    btn3.classList.add("animatorpopout");
    btn3.style.animationDelay = "2s";
    btn3.style.webkitAnimationDelay = "2s";
    btn3.style.animationPlayState = "running";
    btn3.style.webkitAnimationPlayState = "running";
    if(completed == 1){setTimeout(addSidebar, 2500);}
}

function aboutus() {
    var info = document.getElementById("aboutus");
    if(info.classList.contains("moveinfromright-reverse") == true){
        info.classList.remove("moveinfromright-reverse");
        void info.offsetWidth;
        info.classList.add("moveinfromright");
        info.style.animationPlayState = "running";
        info.style.webkitAnimationPlayState = "running";
        removeSidebar();
    }
    else if(info.classList.contains("moveinfromright") == true) {
        info.classList.remove("moveinfromright");
        void info.offsetWidth;
        info.classList.add("moveinfromright-reverse");
        info.style.animationPlayState = "running";
        info.style.webkitAnimationPlayState = "running";
        addSidebar();
    }
    else {
        info.classList.add("moveinfromright");
        info.style.animationPlayState = "running";
        info.style.webkitAnimationPlayState = "running";
        removeSidebar();
    }
}

function close1() {
    var first = document.getElementById("firstText");
    var second = document.getElementById("secondText");
    var third = document.getElementById("thirdText");
    var fourth = document.getElementById("fourthText");
    var btn1 = document.getElementById("button1");
    btn1.style.cursor = "default";
    btn1.onclick = "";
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
    btn1.classList.remove("animator6");
    void btn1.offsetWidth;
    btn1.classList.add("animator6-reverse");
    btn1.style.animationDelay="0s";
    btn1.style.webkitAnimationDelay="0s";
}

function close2() {
    var circle = document.getElementById("circleContainer");
    if(circle.style.animationPlayState == "running" || circle.style.webkitAnimationPlayState == "running"){
        circle.classList.remove("animatorpopout");
        void circle.offsetWidth;
        circle.classList.add("animatorpopout-reverse");
        circle.style.animationDelay = "0s";
        circle.style.webkitAnimationDelay = "0s";
    }
    var wtf = document.getElementById("wtf");
    if(wtf.style.animationPlayState == "running" || wtf.style.webkitAnimationPlayState == "running"){
        wtf.classList.remove("animatorpopout");
        void wtf.offsetWidth;
        wtf.classList.add("animatorpopout-reverse");
        function eraser1() {wtf.style.zIndex = "-1";}
        setTimeout(eraser1, 1000);
    }
    document.getElementById("rent").style.visibility = "hidden";
    document.getElementById("debt").style.visibility = "hidden";
    document.getElementById("salary").style.visibility = "hidden";
    var choose = document.getElementById("chooseMajor");
    setTimeout(choose.style.display = "none", 2000);
    choose.classList.remove("animator2");
    void choose.offsetWidth;
    choose.classList.add("animator2-reverse")
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

function close4(){
    closeCircle();
    var about = document.getElementById("aboutbutton");
    about.classList.remove("aboutbtnmove");
    void about.offsetWidth;
    about.classList.add("aboutbtnmove-reverse");
    about.style.animationPlayState = "running";
    about.style.webkitAnimationPlayState = "running";
    var c1 = document.getElementById("circleofhelp1");
    var c2 = document.getElementById("circleofhelp2");
    var c3 = document.getElementById("circleofhelp3");
    var c4 = document.getElementById("circleofhelp4");
    if(c1.style.display == "initial"){goBack("backhelp1")}
    else if(c2.style.display == "initial"){goBack("backhelp2")}
    else if(c3.style.display == "initial"){goBack("backhelp3")}
    else if(c4.style.display == "initial"){goBack("backhelp4")}
}

function open1() {
    var text1 = document.getElementById("firstText");
    var text2 = document.getElementById("secondText");
    var text3 = document.getElementById("thirdText");
    var text4 = document.getElementById("fourthText");
    var btn1 = document.getElementById("button1");
    if(completed == 1){
        reset1();
    }
    text1.style.animationPlayState = "running";
    text1.style.webkitAnimationPlayState = "running";
    text2.style.animationPlayState = "running";
    text2.style.webkitAnimationPlayState = "running";
    text2.style.animationDelay = "1s";
    text2.style.webkitAnimationDelay = "1s";
    text3.style.animationPlayState = "running";
    text3.style.webkitAnimationPlayState = "running";
    text3.style.animationDelay = "2s";
    text3.style.webkitAnimationDelay = "2s";
    text4.style.animationPlayState = "running";
    text4.style.webkitAnimationPlayState = "running";
    text4.style.animationDelay = "3s";
    text4.style.webkitAnimationDelay = "3s";
    btn1.style.animationPlayState = "running";
    btn1.style.webkitAnimationPlayState = "running";
    text4.style.animationDelay = "4s";
    text4.style.webkitAnimationDelay = "4s";
    if(completed == 1){setTimeout(addSidebar, 4500);}
}

function open2() {
    var qu1 = document.getElementById("askQuestion1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");
    qu1.style.display = "initial";
    qu1.classList.add("animator7");
    qu1.style.animationDelay = "1s";
    qu1.style.webkitAnimationDelay = "1s";
    qu1.style.animationPlayState = "running";
    qu1.style.webkitAnimationPlayState = "running";
    btn2.style.display = "initial";
    btn2.classList.add("animator6");
    btn2.style.animationDelay = "1s";
    btn2.style.webkitAnimationDelay = "1s";
    btn2.style.animationPlayState = "running";
    btn2.style.webkitAnimationPlayState = "running";
    btn3.style.display = "initial";
    btn3.classList.add("animator6");
    btn3.style.animationDelay = "1s";
    btn3.style.webkitAnimationDelay = "1s";
    btn3.style.animationPlayState = "running";
    btn3.style.webkitAnimationPlayState = "running";
}

function open3(){
    var fish = document.getElementById("fishy");
    fish.style.animationPlayState = "running";
    fish.style.webkitAnimationPlayState = "running";
    fish.style.animationDelay = "1.2s";
    fish.style.webkitAnimationDelay = "1.2s";
    var btn1 = document.getElementById("info-btn1");
    btn1.style.display = "initial";
    var bubble1 = document.getElementById("speechbubble1");
    bubble1.style.animationPlayState = "running";
    bubble1.style.webkitAnimationPlayState = "running";
    bubble1.style.animationDelay = "1.2s";
    bubble1.style.webkitAnimationDelay = "1.2s";
    function openButton1() {
        btn1.style.display = "initial";
        btn1.style.animationPlayState = "running";
        btn1.style.webkitAnimationPlayState = "running";
    }
    setTimeout(openButton1, 2000);
}

function open4(){
    setTimeout(createCircle, 1200);
    var sidebar = document.getElementById("sidebar");
    function barOut(){
        sidebar.style.animationPlayState = "running";
        sidebar.style.webkitAnimationPlayState = "running";
    }
    if(completed == 0){
        var about = document.getElementById("aboutbutton");
        function aboutOut(){
            about.style.animationPlayState = "running";
            about.style.webkitAnimationPlayState = "running";
        }
        setTimeout(barOut, 3000);
        setTimeout(aboutOut, 3000);
        completed = 1;
    } else {
        about.classList.remove("aboutbtnmove-reverse");
        void about.offsetWidth;
        about.classList.add("aboutbtnmove");
        about.style.animationPlayState = "running";
        about.style.webkitAnimationPlayState = "running";
        if(completed == 1){setTimeout(addSidebar, 2000);}
    }
}

function createCircle(){
    var doc = document.getElementById("circleContainer1");
    if(completed == 1){
        doc.classList.remove("swirl-out-reverse");
        void doc.offsetWidth;
        doc.classList.add("swirl-out");
    }
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
    text1.classList.remove("animator2-reverse");
    void text1.offsetWidth;
    text1.classList.add("animator2");
    text1.style.animationPlayState = "paused";
    text1.style.webkitAnimationPlayState = "paused";
    text2.classList.remove("animator3-reverse");
    void text2.offsetWidth;
    text2.classList.add("animator3");
    text2.style.animationPlayState = "paused";
    text2.style.webkitAnimationPlayState = "paused";
    text3.classList.remove("animator4-reverse");
    void text3.offsetWidth;
    text3.classList.add("animator4");
    text3.style.animationPlayState = "paused";
    text3.style.webkitAnimationPlayState = "paused";
    text4.classList.remove("animator5-reverse");
    void text4.offsetWidth;
    text4.classList.add("animator5");
    text4.style.animationPlayState = "paused";
    text4.style.webkitAnimationPlayState = "paused";
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

function reset2(){
    reset2from2();
    var vmap = document.getElementById("vmap");
    vmap.classList.remove("animator7-reverse");
    void vmap.offsetWidth;
    vmap.classList.add("animator7");
    vmap.style.animationPlayState = "paused";
    vmap.style.webkitAnimationPlayState = "paused";
    vmap.style.visibility = "hidden";
    var txt1 = document.getElementById("text1");
    txt1.classList.remove("animator7-reverse");
    void txt1.offsetWidth;
    txt1.classList.add("animator7");
    txt1.style.animationPlayState = "paused";
    txt1.style.webkitAnimationPlayState = "paused";
    txt1.style.visibility = "hidden";
    txt1.innerHTML = "Your state is:";
    var txt2 = document.getElementById("text1");
    txt2.classList.remove("animator7-reverse");
    void txt2.offsetWidth;
    txt2.classList.add("animator7");
    txt2.style.animationPlayState = "paused";
    txt2.style.webkitAnimationPlayState = "paused";
    txt2.style.visibility = "hidden";
    document.getElementById("stateName").innerHTML = "";
    var rent = document.getElementById("rent");
    rent.innerHTML = "";
    rent.style.visibility = "hidden";
    var debt = document.getElementById("debt");
    debt.innerHTML = "";
    debt.style.visibility = "hidden";
    var salary = document.getElementById("salary");
    salary.innerHTML = "";
    salary.style.visibility = "hidden";
    var circle = document.getElementById("circleContainer");
    circle.classList.remove("animatorpopout-reverse");
    void circle.offsetWidth;
    circle.classList.add("animatorpopout");
    circle.style.animationPlayState = "paused";
    circle.style.webkitAnimationPlayState = "paused";
}

function reset3(){
    var bubble1 = document.getElementById("speechbubble1");
    bubble1.classList.remove("animatorpopout-reverse");
    void bubble1.offsetWidth;
    bubble1.classList.add("animatorpopout");
    bubble1.style.animationPlayState = "paused";
    bubble1.style.webkitAnimationPlayState = "paused";
    var fish = document.getElementById("fishy");
    fish.classList.remove("animatorpopout-reverse");
    void fish.offsetWidth;
    fish.classList.add("animatorpopout");
    fish.style.animationPlayState = "paused";
    fish.style.webkitAnimationPlayState = "paused";
    var info1 = document.getElementById("info-btn1");
    info1.classList.remove("animatorpopout-reverse");
    void info1.offsetWidth;
    info1.classList.add("animatorpopout");
    info1.style.display = "none";
    info1.style.animationPlayState = "paused";
    info1.style.webkitAnimationPlayState = "paused";
    var info2 = document.getElementById("info-btn2");
    info2.classList.remove("animatorpopout-reverse");
    void info2.offsetWidth;
    info2.classList.add("animatorpopout");
    info2.style.display = "none";
    info2.style.animationPlayState = "paused";
    info2.style.webkitAnimationPlayState = "paused";
    var btn3 = document.getElementById("info-btn3");
    btn3.classList.remove("animatorpopout-reverse");
    void btn3.offsetWidth;
    btn3.classList.add("animatorpopout");
    btn3.style.animationPlayState = "paused";
    btn3.style.webkitAnimationPlayState = "paused";
    var graph = document.getElementById("wapo_graph");
    graph.classList.remove("animatorpopout-reverse");
    void graph.offsetWidth;
    graph.classList.add("animatorpopout");
    graph.style.animationPlayState = "paused";
    graph.style.webkitAnimationPlayState = "paused";
    var bubble2 = document.getElementById("speechbubble2");
    bubble2.classList.remove("animatorpopout-reverse");
    void bubble2.offsetWidth;
    bubble2.classList.add("animatorpopout");
    bubble2.style.animationPlayState = "paused";
    bubble2.style.webkitAnimationPlayState = "paused";
    var bubble3 = document.getElementById("speechbubble3");
    bubble3.classList.remove("animatorpopout-reverse");
    void bubble3.offsetWidth;
    bubble3.classList.add("animatorpopout");
    bubble3.style.animationPlayState = "paused";
    bubble3.style.webkitAnimationPlayState = "paused";
}

function addSidebar(){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebarmove-reverse");
    void sidebar.offsetWidth;
    sidebar.classList.add("sidebarmove");
}

function removeSidebar(){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebarmove");
    void sidebar.offsetWidth;
    sidebar.classList.add("sidebarmove-reverse");
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