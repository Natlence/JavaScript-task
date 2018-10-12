// 玩家匹配页面的JS
// 点击发牌后弹出框的函数
function print(){
	var players = document.getElementById("showplayers").value;
	if(players>4 && players<18){
		window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(5).html";
	}
	else{
		alert("请输入4-18的数字")
	}
}
// 拉动横条的函数
function change1(){
	var num=document.getElementById("range");
	var location=document.getElementById("showplayers");
	num.value=location.value;
}
function change2(){
	var num=document.getElementById("range");
	var location=document.getElementById("showplayers");
	location.value=num.value;
}
// 点击实现加和减
function cut(){
	var num = document.getElementById("showplayers").value;
	if(num==4 || num < 4){
		alert("人数已经是最少了哦~!")
	}
	else{
		document.getElementById("showplayers").value--;
		document.getElementById("range").value=document.getElementById("showplayers").value;
	}
}
function plus(){
	var num = document.getElementById("showplayers").value;
	if(num==18 || num > 18){
		alert("人数已经是最多了哦~!")
	}
	else{
		document.getElementById("showplayers").value++;
		document.getElementById("range").value=document.getElementById("showplayers").value;
	}
}
// 查看身份页面的JS
// 右上角退出的函数
window.onload=function(){
	var bt = document.getElementById("cancel-out");
	bt.onclick=function(){
		if(confirm("确认退出吗？")){
		window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(1).html";
	}
	
	}
}