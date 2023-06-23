var display_1 = ["Abstract.png","Emoji.png","home_landscape.png"];
var display_2 = ["nightHouse.png","nightHouse2.png","Tux.jpg"];
var set = 0;

var button = document.getElementById("view");

function showImages(){
    document.getElementById("view").style.visibility = 'hidden';
    document.getElementById("first_img").style.visibility = 'visible';
    document.getElementById("second_img").style.visibility = 'visible';

    Slide();
}

function Slide(){
    document.getElementById("first_img").src = display_1[set];
    document.getElementById("second_img").src = display_2[set];

    if(set == 2){
        set = -1;
    }

    set = set+1;
    setTimeout(Slide_2,2000);
}

function Slide_2(){
    document.getElementById("first_img").src = display_1[set];
    document.getElementById("second_img").src = display_2[set];

    if(set == 2){
        set = -1;
    }

    set = set+1;
    setTimeout(Slide,2000);
}

