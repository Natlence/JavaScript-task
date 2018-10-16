var killer = sessionStorage.getItem("killer");//接受杀手人数
var civilian = sessionStorage.getItem("civilian");//接受平民人数
var players = sessionStorage.getItem("players");//接受总人数
var sum= sessionStorage.getItem("headcount");
console.log(killer);
console.log(civilian);
console.log(players);
console.log(sum);
//右上角退出函数
function cancel(){
	if(confirm("确定要退出吗？")){
		window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(1).html";
		return true;
	}
	return false;
}
//底部按钮的函数
function endgame(){
	if (confirm("确定要结束游戏吗")) {
		window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(1).html";
	}
}
function judge(){
	window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(6).html";
}
//杀手杀人的函数
function Killpeople(){
	window.location.href="https://natlence.github.io/JavaScript-task/task-2/js-2(8).html";
}