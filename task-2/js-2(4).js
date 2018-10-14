// 玩家匹配页面的JS
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
	people();
}
// 点击实现加和减
function cut(){
	var num = document.getElementById("showplayers").value;
	if(num==4 || num < 4){
		alert("人数已经是最少了哦~!");
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
// 分配杀手和水民
function people() {
    var x = document.getElementById("range").value;
    document.getElementById("watershow").innerHTML = Math.ceil( x * 2 / 3);
    document.getElementById("Killershow").innerHTML = Math.floor(x /3);
    console.log(x);
}
// 点击发牌后弹出框的函数
//     function print(){
// 	var players = document.getElementById("showplayers").value;
// 	var water =document.getElementById("watershow");
// 	var killer =document.getElementById("killershow");
// 	sessionStorage.setItem("killer",killer.innerText);
// 	if(players>4 && players<=18){
// 		window.location.href="js-2(5).html";
// 		sessionStorage.setItem("waterpeople",water.innerText);
// 		sessionStorage.setItem("killer",killer.innerText);
// 		sessionStorage.setItem("players",players.value);

// 	}
// 	else{
// 		alert("请输入4-18的数字")
// 	}
// }
function deal(){
    var killer = document.getElementById("Killershow");//获取杀手
    var civilian = document.getElementById("watershow");//获取平民
    var players = document.getElementById("showplayers");
    if(players.value >= 4 && players.value <= 18 ) {
        window.location.href ="js-2(5).html";//跳转页面
        sessionStorage.setItem("killer",killer.innerText);//获取杀手人数
        sessionStorage.setItem("civilian",civilian.innerText);//获取平民人数
        sessionStorage.setItem("players",players.value);//获取总人数
    }else {
        alert("请输入玩家数量");
    }
}