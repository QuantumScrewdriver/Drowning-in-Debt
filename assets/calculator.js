function setRent(){
    var vmap = document.getElementById("vmap")
    var txt1 = document.getElementById("text1");
    var txt2 = document.getElementById("text2")
    vmap.classList.remove("animator7");
    void vmap.offsetWidth;
    vmap.classList.add("animator7-reverse");
    txt1.classList.remove("animator7");
    void txt1.offsetWidth;
    txt1.classList.add("animator7-reverse");
    txt1.style.animationPlayState = "running";
    txt2.classList.add("animator7-reverse");
    txt2.style.animationPlayState = "running";
    var x = document.getElementById("stateName").textContent;
    if (x == "Alabama") {
        document.getElementById("rent").innerHTML = "Average rent in Alabama is $750";
    }
    else if (x == "Alaska") {
        document.getElementById("rent").innerHTML = "Average rent in Alaska is $1,201";
    }
    else if (x == "Arizona") {
        document.getElementById("rent").innerHTML = "Average rent in Arizona is $1,020";
    }
    else if (x == "Arkansas") {
        document.getElementById("rent").innerHTML = "Average rent in Arkansas is $711";
    }
    else if (x == "California") {
        document.getElementById("rent").innerHTML = "Average rent in California is $1,447";
    }
    else if (x == "Colorado") {
        document.getElementById("rent").innerHTML = "Average rent in Colorado is $1,240";
    }
    else if (x == "Connecticut") {
        document.getElementById("rent").innerHTML = "Average rent in Connecticut is $1,125";
    }
    else if (x == "Delaware") {
        document.getElementById("rent").innerHTML = "Average rent in Delaware is $1,086";
    }
    else if (x == "District of Columbia") {
        document.getElementById("rent").innerHTML = "Average rent in District of Columbia is $1,499";
    }
    else if (x == "Florida") {
        document.getElementById("rent").innerHTML = "Average rent in Florida is $1,128";
    }
    else if (x == "Georgia") {
        document.getElementById("rent").innerHTML = "Average rent in Georgia is $958";
    }
    else if (x == "Hawaii") {
        document.getElementById("rent").innerHTML = "Average rent in Hawaii is $1,573";
    }
    else if (x == "Idaho") {
        document.getElementById("rent").innerHTML = "Average rent in Idaho is $822";
    }
    else if (x == "Illinois") {
        document.getElementById("rent").innerHTML = "Average rent in Illinois is $974";
    }
    else if (x == "Indiana") {
        document.getElementById("rent").innerHTML = "Average rent in Indiana is $793";
    }
    else if (x == "Iowa") {
        document.getElementById("rent").innerHTML = "Average rent in Iowa is $760";
    }
    else if (x == "Kansas") {
        document.getElementById("rent").innerHTML = "Average rent in Kansas is $815";
    }
    else if (x == "Kentucky") {
        document.getElementById("rent").innerHTML = "Average rent in Kentucky is $724";
    }
    else if (x == "Louisiana") {
        document.getElementById("rent").innerHTML = "Average rent in Louisiana is $836";
    }
    else if (x == "Maine") {
        document.getElementById("rent").innerHTML = "Average rent in Maine is $806";
    }
    else if (x == "Maryland") {
        document.getElementById("rent").innerHTML = "Average rent in Maryland is $1,337";
    }
    else if (x == "Massachusetts") {
        document.getElementById("rent").innerHTML = "Average rent in Massachusetts is $1,208";
    }
    else if (x == "Michigan") {
        document.getElementById("rent").innerHTML = "Average rent in Michigan is $835";
    }
    else if (x == "Minnesota") {
        document.getElementById("rent").innerHTML = "Average rent in Minnesota is $939";
    }
    else if (x == "Mississippi") {
        document.getElementById("rent").innerHTML = "Average rent in Mississippi is $742";
    }
    else if (x == "Missouri") {
        document.getElementById("rent").innerHTML = "Average rent in Missouri is $800";
    }
    else if (x == "Montana") {
        document.getElementById("rent").innerHTML = "Average rent in Montana is $759";
    }
    else if (x == "Nebraska") {
        document.getElementById("rent").innerHTML = "Average rent in Nebraska is $801";
    }
    else if (x == "Nevada") {
        document.getElementById("rent").innerHTML = "Average rent in Nevada is $1,051";
    }
    else if (x == "New Hampshire") {
        document.getElementById("rent").innerHTML = "Average rent in New Hampshire is $1,072";
    }
    else if (x == "New Jersey") {
        document.getElementById("rent").innerHTML = "Average rent in New Jersey is $1,284";
    }
    else if (x == "New Mexico") {
        document.getElementById("rent").innerHTML = "Average rent in New Mexico is $813";
    }
    else if (x == "New York") {
        document.getElementById("rent").innerHTML = "Average rent in New York is $1,226";
    }
    else if (x == "North Carolina") {
        document.getElementById("rent").innerHTML = "Average rent in North Carolina is $861";
    }
    else if (x == "North Dakota") {
        document.getElementById("rent").innerHTML = "Average rent in North Dakota is $785";
    }
    else if (x == "Ohio") {
        document.getElementById("rent").innerHTML = "Average rent in Ohio is $772";
    }
    else if (x == "Oklahoma") {
        document.getElementById("rent").innerHTML = "Average rent in Oklahoma is $780";
    }
    else if (x == "Oregon") {
        document.getElementById("rent").innerHTML = "Average rent in Oregon is $1,079";
    }
    else if (x == "Pennsylvania") {
        document.getElementById("rent").innerHTML = "Average rent in Pennsylvania is $893";
    }
    else if (x == "Rhode Island") {
        document.getElementById("rent").innerHTML = "Average rent in Rhode Island is $941";
    }
    else if (x == "South Carolina") {
        document.getElementById("rent").innerHTML = "Average rent in South Carolina is $848";
    }
    else if (x == "South Dakota") {
        document.getElementById("rent").innerHTML = "Average rent in South Dakota is $722";
    }
    else if (x == "Tennessee") {
        document.getElementById("rent").innerHTML = "Average rent in Tennessee is $833";
    }
    else if (x == "Texas") {
        document.getElementById("rent").innerHTML = "Average rent in Texas is $987";
    }
    else if (x == "Utah") {
        document.getElementById("rent").innerHTML = "Average rent in Utah is $986";
    }
    else if (x == "Vermont") {
        document.getElementById("rent").innerHTML = "Average rent in Vermont is $950";
    }
    else if (x == "Virginia") {
        document.getElementById("rent").innerHTML = "Average rent in Virginia is $1,179";
    }
    else if (x == "Washington") {
        document.getElementById("rent").innerHTML = "Average rent in Washington is $1,216";
    }
    else if (x == "West Virginia") {
        document.getElementById("rent").innerHTML = "Average rent in West Virginia is $690";
    }
    else if (x == "Wisconsin") {
        document.getElementById("rent").innerHTML = "Average rent in Wisconsin is $819";
    }
    else if (x == "Wyoming") {
        document.getElementById("rent").innerHTML = "Average rent in Wyoming is $832";
    }
    else if (x == "Puerto Rico") {
        document.getElementById("rent").innerHTML = "Average rent in Puerto Rico is $453";
    }
    else {
        document.getElementById("rent").innerHTML = "Average rent in your state is unknown";
    }
    document.getElementById("circleContainer").style.webkitAnimationPlayState = "running";
    document.getElementById("circleContainer").style.animationPlayState = "running";
}

function getDebt(objectID){
    var major = ['Agriculture', 'Architecture', 'Communications', 'Computer Science', 'Education', 'Engineering', 'Law', 'English', 'Biology', 'Mathematics', 'Physical Science', 'Social Science', 'Art', 'Business']
    var debt = ['$10,395', '$11,052', '$24,828', '$23,887', '$20,658', '$16,792', '$45,073', '$28,098', '$28,952', '$15,389', '$13,731', '$21,109', '$18,908', '$22,664']
    var salary = ['$48,729', '$62,300', '$47,047', '$61,321', '$34,891', '$64,891', '$47,500', '$43,200', '$43,200', '$58,200', '$50,900', '$46,585', '$39,400', '$52,236']
    var checker = false;
    var x = 0;
    var majorIn = document.getElementById(objectID).innerHTML;
    while (checker == false) {
        if (majorIn.valueOf() == major[x].valueOf()) {
            document.getElementById("debt").innerHTML = "Your debt could run up to " + debt[x];
            document.getElementById("salary").innerHTML = "Your starting salary will likely be " + salary[x];
            checker = true;
        } else {
            x++;
        }
    }
    document.getElementById("rent").style.visibility = "visible";
    document.getElementById("debt").style.visibility = "visible";
    document.getElementById("salary").style.visibility = "visible";
    document.getElementById("wtf").style.webkitAnimationPlayState = "running";
    document.getElementById("wtf").style.animationPlayState = "running";
    document.getElementById("wtf").style.zIndex = "100";
}