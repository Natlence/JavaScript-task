// 查看身份页面的JS
// 获取上一个页面的杀手和水民的人数
    var killer = sessionStorage.getItem("killer");//接受杀手人数
    var civilian = sessionStorage.getItem("civilian");//接受平民人数
    var players = sessionStorage.getItem("players");//接受总人数
    console.log(killer);
    console.log(civilian);
    console.log(players);
// 右上角退出的函数
window.onload=function(){
	var bt = document.getElementById("cancel-out");

	bt.onclick=function(){
		if(confirm("确认退出吗？")){
		window.location.href="js-2(1).html";
	}
	}
}
// 创建一个平民与幽灵一起的数组
var sum = [];
for(var i = 0;i<killer;i++){
    sum.push("杀手");
}
for(var u =0;u<civilian;u++){
    sum.push("平民");
}
console.log(sum);
// 将杀手幽灵这个数组乱序
function disorder(){
    for(var i=0;i<sum.length;i++){
        var a = Math.floor(Math.random()*sum.length);
        var b = sum[a];
        sum[a] = sum[i];
        sum[i] = b;
    }
};
disorder();
console.log(sum);
sessionStorage.setItem("headcount",JSON.stringify(sum));
//点击按钮内容改变
var picword = document.getElementsByClassName("pic-word")[0];//图片下方的文字
var draw = document.getElementsByClassName("draw")[0];//翻牌前图片
var girl = document.getElementsByClassName("normalpeople")[0];//翻牌后图片
var number = document.getElementsByClassName("player-num")[0];//图片上方的文字
var btn = document.getElementsByClassName("bottom-button")[0];//下方按钮
var label = 1, status = 0, i=0;
function change(){
		console.log(sum.length);
		if(draw.style.display=='none'){
	           draw.style.display='block';
	            girl.style.display='none';
	            picword.innerHTML="";
	            number.innerHTML=i+1;
	            // if(i=sum.length){
	            // 	btn.innerHTML="请将手机交给法官";
	            // }
	            btn.innerHTML="查看"+number.innerHTML+"号身份";
	            if(i==sum.length){
	      	        if(confirm("请将手机递交给法官")){
	      	        	window.location.href="js-2(6).html";
	      	        }
	      	        else{
	      	        	if(confirm("请务必提交给法官（否则自动退出）"))
	      	        	{
	      	        		window.location.href="js-2(6).html";
	      	        	}
	      	        }
	             }
	   }
	    else{
	      draw.style.display='none';
	      girl.style.display='block';
	      picword.innerHTML=sum[i];
	      i++;
	      number.innerHTML=i;
	      var num=parseInt(number.innerHTML)+1;
	      btn.innerHTML="隐藏并传递给"+num+"号";
	      if(i==sum.length){
	      	btn.innerHTML="法官查看";
	      }
	  }
	}