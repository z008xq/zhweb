$(function(){
	initClick();
});

function initClick(){
	$("#earth-asia").click(function(){
		$(".earthpage").hide();
		$(".oceaniapage").show();
	});
	$("#asia-china").mouseenter(function(){
		$(".asia-box").css('display','block'); 
	});
	$("#asia-china").mouseleave(function(){
		$(".asia-box").css('display','none'); 
	});
	$("#asia-china").click(function(){
		$(".businesspage").css('display','block');
		$(".oceaniapage").hide();
	});
	
}
			
function selectcn(){
	$(".businessmap").hide();
	$(".bussinesstext").hide();
	$(".selectbusiness").show();
}
			
/*function pagenext(){
	$(".pagethree").show();
}*/	