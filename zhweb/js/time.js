$(function(){
	getnowtimes();
	getday();
	getmonth();	
	var handle=setInterval(getnowtimes,1000);
});

function getnowtimes(){
	var newtime = new Date();
	var time1 = newtime.getHours();
	var time2=newtime.getMinutes();
		if(time2<10){
			time2="0"+time2;
		}
	var nowtime=time1+":"+time2;
	document.getElementById("times").innerText=nowtime;
				
}
function getday(){
	 	var day=new Date();
	 	var nowday=day.getDate();
	 	
	 	document.getElementById("days").innerText=nowday;
	 	
}
function getmonth(){
		var month=new Date();
		var mon=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
	 	var nowmonth=month.getMonth();
	 	
	 	for(var i=0;i<12;i++){
	 		if(i==nowmonth){
	 			var mond=mon[i];
	 		
	 			
	 			document.getElementById("months").innerHTML=mond;
	 		}
	 	}
}

function selectcn(){
	$(".businessmap").hide();
	$(".bussinesstext").hide();
	$(".selectbusiness").show();
}
			
/*function pagenext(){
	$(".pagethree").show();
}*/