var hr,min,sec,da,mon,yea; pido

function time(){
hr=hour.value;
min=minuet.value;
sec=second.value;
da=date.value;
mon=month.value;
yea=day.value;

sec++;
second.value=sec;
setTimeout(time,1000)
if (sec==60 && min!=="") {
   minuet.value++;
   second.value=0;
   
}

if ( hr!=="" && min==59 && sec==60 ) {
	hour.value++;
	minuet.value=0;
}
if (da!=="" && hr==24 && min==59 && sec==60) {
	date.value++;
	hour.value=0;
	minuet.value=0;
	second.value=0
}
if (mon!=="" && da==30 && hr==24 && min==59 && sec==60) {
	month.value++;
     date.value=1;
	hour.value=0;
	minuet.value=0;
	second.value=0;
}
if (yea!=="" && mon==12 && da==30 && hr==24 && min==59 && sec==60) {
	day.value++;
	month.value=1;
     date.value=1;
	hour.value=0;
	minuet.value=0;
	second.value=0


}
}
function men(){
	pido=el.value;
	el.value="";
}















