function sson(){
	var sson = document.getElementById("ssimg");
	sson.src = "images/搜索ho.png";
}
function sso(){
	var sson = document.getElementById("ssimg");
	sson.src = "images/搜索.png";
}

$(function(){
  //下面我们需要开发用户滚动时，当滚动向下一定距离，展示这个隐藏的顶端固定导航

  $(window).scroll(function(){
    //在window的滚动回调方法中，我们处理具体逻辑
      var scrollTop　=　document.documentElement.scrollTop || document.body.scrollTop;
    /* 以上代码获取滚动后，离顶端距离，这里使用两个值是为了兼容不同浏览器及其不同doctype定义 */

     if(scrollTop > 100){
        /*当滚动超过100px*/
        $('#head2').fadeIn("fast");
     }else{
        $('#head2').fadeOut("fast");
     }
  });
});
var headnav = document.getElementById('headnav').querySelectorAll('a');
var vanshead = document.querySelectorAll('.vanshead');
var triangle = document.querySelectorAll('.triangle');
for (var i = 0; i < headnav.length; i++) {
  headnav[i].onmouseover = function(){
    heado();
		triangleo();
    vanshead[this.id].style.display = "block";
		triangle[this.id].style.display = "block";
  }
}
function heado(){
	for (var i = 0; i < vanshead.length; i++) {
		vanshead[i].style.display = "none";
	}
}
function triangleo(){
	for (var i = 0; i < vanshead.length; i++) {
		triangle[i].style.display = "none";
	}
}
