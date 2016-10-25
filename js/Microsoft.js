$(function(){
	var timer=setInterval(move,5000);
	var i=0;
	function move(){
		i++;
		if(i==3){
			i=1;
		}
		$(".banner div:nth-child("+i+")").css({"display":"none"}).siblings().css({"display":"block"})
//		$(".banner div").stop().fadeToggle("fast");
	}
	$(".banner").mouseenter(function(){
		console.log(1)
		clearInterval(timer);
		$(".banner").on("mousedown",".iconfont",function(){
			$(this).parent().hide();
			$(this).parent().siblings().show()
		})
	})
	$(".banner").mouseleave(function(){
		console.log(2)
		timer=setInterval(move,5000);
	})
	
//	if(document.body.clientWidth<=550){
		$("footer").find("li:nth-of-type(1)").on("click",function(){
			$(this).siblings().slideToggle();
		})
//	}

	window.onresize=function(){		
		if(document.body.clientWidth<=550){
			$("footer").find("li:nth-of-type(1)").on("click",function(){
				$(this).siblings().stop().slideToggle();
			})
		}
	}


})
