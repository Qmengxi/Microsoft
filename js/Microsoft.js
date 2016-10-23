$(function(){
	var timer=setInterval(move,5000);
	function move(){
		console.log(1)
		$(".banner div").stop().fadeToggle("fast");
		$(".banner div article p").css({"animation": "name 2s linear"})
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
})
