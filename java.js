var fan, vans, suro;
function me(){
	fan=m.value;
	vans=gnr.value;
	suro=Number(a.value);

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
else if (vans !== "male" &&  vans !== "female"  ) {
	alert(" Please  " + fan +"  The gender is incorrect ")
}


}

