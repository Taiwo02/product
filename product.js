var item1=0;
var data1=0;
var valu1=0;
var on;
var last;

function fist(){
    item1=moon.value;
    hill.value= item1*300000; 
    hool.value=parseInt(hool.value) - parseInt( moon.value);
    
    if(item1 >=5000){
        hill.value="out of stock";
        hool.value="out of stock";
    }
    if (item1=="") {
        hool.value=gist.value;
    }
    
    
 total();
}
function total(){
    totaldisplay.value=parseInt(hill.value,)+parseInt(two.value)+parseInt(four.value)+parseInt(six.value);
}
function shirt(){
    data1=play.value;
    two.value=data1*1500;
        one.value=one.value-play.value;

        if (data1>=3000) {
            two.value="0";
            one.value="out of stock";
            
        }
        if (data1==0) {
            one.value=3000;
            
        }
    total();
}
function jeans(){
    on=jean.value;
    four.value=on*3000;
    three.value=three.value-jean.value;


    if (on>1000) {
       four.value="0";
       three.value="out of stock";
    }
    if (on==0) {
        three.value=1000;  
    }
    
    total()

}
function ring(){
    last=rg.value;
    six.value=rg.value*20000;
    five.value=five.value-rg.value;

    if (last>=500) {
        six.value="0";
        five.value="Out of stock"
    }


total()
}
function view1(){
    ola.innerHTML = "<img src='images2/flowerr.jpg'>"
}
function view2(){
    ola.innerHTML="<img src='images2/flower rosee (2).jpg'>"
}
function view3(){
    ola.innerHTML="<img src='images2/flower.jpg'>"
}
function view4(){
    ola.innerHTML="<img src='images2/flowerr (1).jpg'>"
}

function onmouseout1(){
    ola.innerHTML="";
}
function po(){
    window.print;
}