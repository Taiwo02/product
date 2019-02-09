
var fan, vans, suro;
function me(){
	fan=m.value;
	vans=gnr.value;
	suro=Number(d.value);

	console.log(fan,vans,suro);
	if (suro == "" && vans == ""  && fan == "") {
		alert("please input your details")
	}
	else if(vans.toLowerCase() == "female" && suro >=18) {
		alert("Welcome Miss " + fan + " ! You may proceed to the bar.");
	}
	else if(vans.toLowerCase() == "female" && suro <18) {
		alert("Welcome Miss " + fan + " ! You are not allow  to the bar.");
	}

else if(vans.toLowerCase() == "male" && suro >=18) {
		alert("Welcome Mr. " + fan + " ! You may proceed to the bar.");
	}
	else if(vans.toLowerCase() == "male" && suro <18) {
		alert("Welcome Mr. " + fan + " ! You are not allow  to the bar.");
	}
else if (vans == "male" &&  vans == "female"  ) {
        alert("you can proced")
	
}
else{
	alert(" Please  " + fan +"  The gender is incorrect ")
}

}

var pin,been,mini;
function moon(){
pin=sd.value;
been=cd.value;
mini=e.value;
switch (been.toLowerCase()){
 case "a" : alert("excelent")
	break;
 case "b" : alert("very good")
	break;
 case "c" : alert("good")
	break;
 case "d" : alert("fair")
	break;
 case "e" : alert("poor")
	break;
 case "f" : alert("fail")
	break;

	default : alert("please insert a valid grade")
}
}

var t,a,i,w,o;
function oga(){
	t=tinu.value;
	a=folo.value;
	i=p.value;
	w=bol.value;
	o=old.value;
	console.log(t,a,i,w,o);
	if (o == "" && w == "" && i == "" && a == "" && t ==  "") {
		alert("Please " + t +" insert your details")
	}
	if (a.toLowerCase() == "female"  && i >=18) {
		alert("Miss " + t +" you can proceed")
	}
    if (a.toLowerCase() ==  "female" && i <18){
          alert("Miss " + t +" you are not allow")
  }
    if (a.toLowerCase() == "male"  && i >=18) {
		alert("Mr. " + t +" you can proceed")
	}
    if (a.toLowerCase() ==  "male" && i <18){
          alert("Mr. " + t +" you are not allow")
 }
 if (a !== "female" && a !== "male" ){
 	alert("please " + t +" input a valid gender")
 }
 }

 var sec;
 var min;
  var hr;
   // var alerm = new Audio("WALE1.mp3")
 function timecounting(){
 	var hr=hours.value;
 	var min=minutes.value;
 	var sec=seconds.value;


 	sec--;
 	seconds.value=sec;
 	setTimeout(timecounting,1000);

 	if (sec <= 0 && min <="") {
 		seconds.value="";

 	}
 else  if (sec<=0 && min !=="") {
   	minutes.value--;
   	seconds.value=59;
}
  
   if(min<=0){
   	minutes.value=""; 
   	seconds.value="";
   	}

 if (hr!=="" && min<=0 && sec<=0) {
	hours.value--;
	minutes.value=59;
	seconds.value=59;
}
 if (hr<=0 && min<=0 && sec<=0){
	seconds.value="";
	minutes.value="";
	hours.value="";
}

else{
	alerm.play();
}
function button(){
	alerm.pause();
	seconds.value=10;
}

}






var hor,minu, seco,minsec;
var set;


function stopwatch(){
	hor =hour.value;
	minu=minuet.value;
	seco=second.value;
	minsec=minisecond.value;

	minisecond.value++;
 set= setTimeout(stopwatch,10)
 
 if (seco!=="" && minsec==99) {
 	minisecond.value=0;
 	 	second.value++;
 	 	
 }
 if (minu!=="" && seco==59 && minsec==99) {
 	minuet.value++;
 	second.value=0;
 	minisecond.value=0;
 }
 if (hor!=="" && minu==59 && seco==59 && minsec==99) {
 	hour.value++;
 	minuet.value=0;
 	second.value=0;
 	minisecond.value=0;
 }

} 	
 
function stop(){
clearTimeout(set)
}
 function lap(){
 	document.getElementById('div').innerHTML +=  hour.value +":"+minuet.value+":"+second.value+":"+minisecond.value+"<br>";
 }