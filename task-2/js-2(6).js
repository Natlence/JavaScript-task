//获取上一个页面中的玩家人数
var killer = sessionStorage.getItem("killer");//接受杀手人数
var civilian = sessionStorage.getItem("civilian");//接受平民人数
var players = sessionStorage.getItem("players");//接受总人数
var sum= sessionStorage.getItem("headcount");
console.log(killer);
console.log(civilian);
console.log(players);
console.log(sum);
//将传递的字符串解析回数组
sum = sum.replace(/,/g, "");//取消字符串中出现的所有逗号
sum = sum.replace(/"/g, "");
console.log(sum);
var arr =[];
for(var i=0;i<sum.length-2;i=i+2){
	arr.push(sum[i+1]+sum[i+2]);
}
console.log(arr);
// 退出函数
function  cancel(){
	if(confirm("确定要退出吗？")){
		window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(1).html";
	}
}
//将玩家身份赋到盒子中
var box = document.getElementsByClassName("box");
var boxTop =document.getElementsByClassName("box-top");
var boxBottom =document.getElementsByClassName("box-bottom");
for(i=0;i<arr.length;i++){
	box[i].style.height = '25vw';
	box[i].style.width = '25vw';
	box[i].style.background='#f5c97b';
	box[i].style.border='2px solid white';
	box[i].style.margin='3vw 1vw';
	boxTop[i].innerHTML = arr[i];
	boxBottom[i].innerHTML = i +1;

}
//开始游戏按钮
function jump(){
	window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(7).html"
}