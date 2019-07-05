function sson(){
	var sson = document.getElementById("ssimg");
	sson.src = "images/搜索ho.png";
}
function sso(){
	var sson = document.getElementById("ssimg");
	sson.src = "images/搜索.png";
}
//function gyvs(){
//	var gyvs = document.getElementById("triangle");
//	var gyvs2 = document.getElementById("abvsover");
//	gyvs.style.display = "block";
//	gyvs2.style.display = "block";
//}
//function gyvso(){
//	var gyvso = document.getElementById("triangle");
//	var gyvso2 = document.getElementById("abvsover");
//	gyvso.style.display = "none";
//	gyvso2.style.display = "none";
//}
//function remen(){
//	var remen = document.getElementById("triangle2");
//	var remen2 = document.getElementById("remenover");
//	remen.style.display = "block";
//	remen2.style.display = "block";
//}
//function remeno(){
//	var gyvso = document.getElementById("triangle2");
//	var gyvso2 = document.getElementById("remenover");
//	gyvso.style.display = "none";
//	gyvso2.style.display = "none";
//}
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