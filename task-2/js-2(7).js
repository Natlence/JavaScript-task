"use strict";
var arr = sessionStorage.getItem("headcount");
var nums = JSON.parse(arr);//用 JSON.parse(arr) 转出字符串
var day = sessionStorage.getItem("day");//获取天数
var players = JSON.parse(sessionStorage.getItem("players"));
var words = JSON.parse(sessionStorage.getItem("words"));//获取杀手杀人页面的情况
var words_a = JSON.parse(sessionStorage.getItem("words_a"));//获取全名投票情况
var index = sessionStorage.getItem("index");
//设置页头上方两个按钮跳转
function player(){
    window.location.href = "js-2(6).html";
}
function home() {
    var a = confirm("确定要结束游戏吗？");
    if(a === true){
        window.location.href = "js-2(1).html";
    }
}
//将天数上传



//设置动态效果
$(document).ready(function(){
    $("#one-day").text("第"+ day + "天");

    // //设置内容显示隐藏效果
    $("#one-day").click(function(){
        $("#content").toggle("slow");
    });



    //状态机
    var fsm = new StateMachine({
        init:sessionStorage.getItem("state"),
        transitions:[
            {name:"killer",from:"living",to:"last"},
            {name:"ghost",from:"last",to:"testament"},
            {name:"player",from:"testament",to:"speak"},
            {name:"everybody",from:"speak",to:"living"}
        ],
        methods:{
            onkiller:function(){
                $(".slayer:eq(0)").css("background-color","#ccc");
                $(".slayer-i:eq(0)").css("border","#ccc");
            },
            onghost:function(){
                $(".slayer:eq(1)").css("background-color","#ccc");
                $(".slayer-i:eq(1)").css("border","#ccc");
            },
            onplayer:function(){
                $(".slayer:eq(2)").css("background-color","#ccc");
                $(".slayer-i:eq(2)").css("border","#ccc");
            },
            oneverybody: function(){
                $(".slayer:eq(3)").css("background-color","#ccc");
                $(".slayer-i:eq(3)").css("border","#ccc");
            }
        }
    });
    $(".slayer:eq(0)").click(function(){
        if(sessionStorage.getItem("state")==="living"){
            fsm.killer();//调用该方法，实例状态将从"living"变为"last"
            sessionStorage.setItem("state",fsm.state);//获取当前状态，并且存到本地。
            fsm.onkiller();
            window.location.href = "js-2(kill).html";
        }
        else if(sessionStorage.getItem("state")==="last"){
            alert("请勿重复操作");
        }
        else {
            alert("请按步骤操作");
        }

    });
    $(".slayer:eq(1)").click(function(){
        if(sessionStorage.getItem("state")==="last"){
            fsm.ghost();
            sessionStorage.setItem("state",fsm.state);
            fsm.onghost();
            alert("请死者亮明身份并发表遗言");
        }
        else if(sessionStorage.getItem("state")==="testament"){
            alert("请勿重复操作");
        }
        else {
            alert("请按步骤操作");
        }
    });
    $(".slayer:eq(2)").click(function(){
        if(sessionStorage.getItem("state")==="testament"){
            fsm.player();
            sessionStorage.setItem("state",fsm.state);
            fsm.onplayer();
            alert("请玩家一次发表言论");
        }
        else if(sessionStorage.getItem("state")==="speak"){
            alert("请勿重复操作");
        }
        else {
            alert("请按步骤操作");
        }
    });
    $(".slayer:eq(3)").click(function(){
        if(sessionStorage.getItem("state")==="speak"){
            fsm.everybody();
            sessionStorage.setItem("state",fsm.state);
            fsm.oneverybody();
            window.location.href = "js-2(vote).html";
        }
    });

    switch(sessionStorage.getItem("state")){
        case "last":
            fsm.onkiller();
            if(parseInt(index) === -1){
                $(".cont-p-box:eq(0)").text("昨晚没有死人");//插入页面信息
            }
            else{
                $(".cont-p-box:eq(0)").text((parseInt(index)+1)+"号被杀死，真实身份是"+ players[index].role);//插入页面信息
            }
            break;
        case "testament":
            fsm.onkiller();
            fsm.onghost();
            break;
        case "speak":
            fsm.onkiller();
            fsm.onghost();
            fsm.onplayer();
            break;

    }
    if(day > 1){
        for(var i = 0; i < day - 1 ;i++){
            var aaa = "<div class=\"main-box\">\n" +
                "<div class=\"one-day cen-cen\"></div>\n" +
                "<div class=\"content\">\n" +
                "<div class=\"content-cont\">\n" +
                "<div class=\"cont-slayer relative cen-cen\">\n" +
                "<div class=\"moon absolute\">\n" +
                "<img class=\"moon-img\" src=\"pic1/moon.png\" alt=\"图片\">\n" +
                "</div>\n" +
                "<div class=\"slayer-c cen-cen relative\">\n" +
                "<i class=\"slayer-i-c block absolute\"></i>\n" +
                "杀手杀人\n" +
                "</div>\n" +
                "</div>\n" +
                "<div class=\"cont-p-box-c\"></div>\n" +
                "<div class=\"cont-slayer relative cen-cen\">\n" +
                "<div class=\"moon absolute\">\n" +
                "<img class=\"moon-img\" src=\"pic1/sun.png\" alt=\"图片\">\n" +
                "</div>\n" +
                "<div class=\"slayer-c cen-cen relative\">\n" +
                "<i class=\"slayer-i-c block absolute\"></i>\n" +
                "亡灵发表遗言\n" +
                "</div>\n" +
                "</div>\n" +
                "<div class=\"cont-slayer relative cen-cen\">\n" +
                "<div class=\"slayer-c cen-cen relative\">\n" +
                "<i class=\"slayer-i-c block absolute\"></i>\n" +
                "玩家依次发言\n" +
                "</div>\n" +
                "</div>\n" +
                "<div class=\"cont-slayer relative cen-cen\">\n" +
                "<div class=\"slayer-c cen-cen relative\">\n" +
                "<i class=\"slayer-i-c block absolute\"></i>\n" +
                "全名投票\n" +
                "</div>\n" +
                "</div>\n" +
                "<div class=\"cont-p-box-b\"></div>\n" +
                "</div>\n" +
                "</div>\n" +
                "</div>";
            $("#main-box").before(aaa);
            $(".one-day").eq(i).text("第"+ (i + 1) + "天");
            $(".cont-p-box-c").eq(i).text(words[i]);//插入页面信息
            $(".cont-p-box-b").eq(i).text(words_a[i]);//插入页面信息
            // //设置内容显示隐藏效果
        }
        //实现点击显示隐藏效果的两种方法
        $(".one-day").click(function () {
            $(this).next().toggle("slow")
        });
        // $(".one-day").click(function () {//第二种
        //     var aaa = $(".one-day").index(this);
        //     $(".content").eq(aaa).toggle("slow");
        // });

    }

});

// var killer = sessionStorage.getItem("killer");//接收杀手人数
// var civilian = sessionStorage.getItem("civilian");//接收平民人数
// var players = JSON.parse(sessionStorage.getItem("players"));//接收玩家状态及号码
// var sum= JSON.parse(sessionStorage.getItem("headcount"));//接收玩家身份数组
// var day = sessionStorage.getItem("day");
// var index = sessionStorage.getItem("index");
// var words = JSON.parse(sessionStorage.getItem("words"));//获取杀手杀人页面的情况
// var words_a = JSON.parse(sessionStorage.getItem("words_a"));//获取全名投票情况
// console.log(killer);
// console.log(civilian);
// console.log(players);
// console.log(sum);
// console.log(words);
// console.log(words_a);
// console.log(index);
//
// //右上角退出函数
// function cancel(){
// 	if(confirm("确定要退出吗？")){
// 		window.location.href="js-2(1).html";
// 		return true;
// 	}
// 	return false;
// }
// //底部按钮的函数
// function endgame(){
// 	if (confirm("确定要结束游戏吗")) {
// 		window.location.href="js-2(1).html";
// 	}
// }
// function judge(){
// 	window.location.href="js-2(6).html";
// }
// //点击天数的动态效果
// $(document).ready(function () {
// 	$("#one_day").text("第"+day+"天");
//     //设置内容隐藏的效果
// 	$("#one_day").click(function () {
// 		$("#content").toggle("slow");
//     });
//     //创建状态机
//     var fsm = new StateMachine({
//         init:sessionStorage.getItem("state"),
//         transitions:[
//             {name:"killer",from:"living",to:"last"},
//             {name:"ghost",from:"last",to:"testament"},
//             {name:"player",from:"testament",to:"speak"},
//             {name:"everybody",from:"speak",to:"living"}
//         ],
//         methods:{
//             onkiller:function(){
//                 $(".slayer:eq(0)").css("background-color","#ccc");
//                 $(".slayer-i:eq(0)").css("border","#ccc");
//             },
//             onghost:function(){
//                 $(".slayer:eq(1)").css("background-color","#ccc");
//                 $(".slayer-i:eq(1)").css("border","#ccc");
//             },
//             onplayer:function(){
//                 $(".slayer:eq(2)").css("background-color","#ccc");
//                 $(".slayer-i:eq(2)").css("border","#ccc");
//             },
//             oneverybody: function(){
//                 $(".slayer:eq(3)").css("background-color","#ccc");
//                 $(".slayer-i:eq(3)").css("border","#ccc");
//             }
//         }
//     });
//     $(".slayer:eq(0)").click(function(){
//         if(sessionStorage.getItem("state")==="living"){
//             fsm.killer();//调用该方法，实例状态将从"living"变为"last"
//             sessionStorage.setItem("state",fsm.state);//获取当前状态，并且存到本地。
//             fsm.onkiller();
//             window.location.href = "js-2(kill).html";
//         }
//         else if(sessionStorage.getItem("state")==="last"){
//             alert("请勿重复操作");
//         }
//         else {
//             alert("请按步骤操作");
//         }
//
//     });
//     $(".slayer:eq(1)").click(function(){
//         if(sessionStorage.getItem("state")==="last"){
//             fsm.ghost();
//             sessionStorage.setItem("state",fsm.state);
//             fsm.onghost();
//             alert("请死者亮明身份并发表遗言");
//         }
//         else if(sessionStorage.getItem("state")==="testament"){
//             alert("请勿重复操作");
//         }
//         else {
//             alert("请按步骤操作");
//         }
//     });
//     $(".slayer:eq(2)").click(function(){
//         if(sessionStorage.getItem("state")==="testament"){
//             fsm.player();
//             sessionStorage.setItem("state",fsm.state);
//             fsm.onplayer();
//             alert("请玩家依次发表言论");
//         }
//         else if(sessionStorage.getItem("state")==="speak"){
//             alert("请勿重复操作");
//         }
//         else {
//             alert("请按步骤操作");
//         }
//     });
//     $(".slayer:eq(3)").click(function(){
//         if(sessionStorage.getItem("state")==="speak"){
//             fsm.everybody();
//             sessionStorage.setItem("state",fsm.state);
//             fsm.oneverybody();
//             window.location.href = "js-2(vote).html";
//         }
//     });
//
//     switch(sessionStorage.getItem("state")){
//         case "last":
//             fsm.onkiller();
//             if(parseInt(index) === -1){
//                 $(".cont-p-box:eq(0)").text("昨晚没有死人");//插入页面信息
//             }
//             else{
//                 $(".cont-p-box:eq(0)").text((parseInt(index)+1)+"号被杀死，真实身份是"+sum[index]);//插入页面信息
//             }
//             break;1
//         case "testament":
//             fsm.onkiller();
//             fsm.onghost();
//             break;
//         case "speak":
//             fsm.onkiller();
//             fsm.onghost();
//             fsm.onplayer();
//             break;
//
//     }
//     if(day > 1){
//         for(var i = 0; i < day - 1 ;i++){
//             var aaa = "<div class=\"main-box\">\n" +
//                 "<div class=\"one-day cen-cen\"></div>\n" +
//                 "<div class=\"content\">\n" +
//                 "<div class=\"content-cont\">\n" +
//                 "<div class=\"cont-slayer relative cen-cen\">\n" +
//                 "<div class=\"moon absolute\">\n" +
//                 "<img class=\"moon-img\" src=\"pic1/moon.png\" alt=\"图片\">\n" +
//                 "</div>\n" +
//                 "<div class=\"slayer-c cen-cen relative\">\n" +
//                 "<i class=\"slayer-i-c block absolute\"></i>\n" +
//                 "杀手杀人\n" +
//                 "</div>\n" +
//                 "</div>\n" +
//                 "<div class=\"cont-p-box-c\"></div>\n" +
//                 "<div class=\"cont-slayer relative cen-cen\">\n" +
//                 "<div class=\"moon absolute\">\n" +
//                 "<img class=\"moon-img\" src=\"pic1/sun.png\" alt=\"图片\">\n" +
//                 "</div>\n" +
//                 "<div class=\"slayer-c cen-cen relative\">\n" +
//                 "<i class=\"slayer-i-c block absolute\"></i>\n" +
//                 "亡灵发表遗言\n" +
//                 "</div>\n" +
//                 "</div>\n" +
//                 "<div class=\"cont-slayer relative cen-cen\">\n" +
//                 "<div class=\"slayer-c cen-cen relative\">\n" +
//                 "<i class=\"slayer-i-c block absolute\"></i>\n" +
//                 "玩家依次发言\n" +
//                 "</div>\n" +
//                 "</div>\n" +
//                 "<div class=\"cont-slayer relative cen-cen\">\n" +
//                 "<div class=\"slayer-c cen-cen relative\">\n" +
//                 "<i class=\"slayer-i-c block absolute\"></i>\n" +
//                 "全名投票\n" +
//                 "</div>\n" +
//                 "</div>\n" +
//                 "<div class=\"cont-p-box-b\"></div>\n" +
//                 "</div>\n" +
//                 "</div>\n" +
//                 "</div>";
//             $("#main-box").before(aaa);
//             $(".one-day").eq(i).text("第"+ (i + 1) + "天");
//             $(".cont-p-box-c").eq(i).text(words[i]);//插入页面信息
//             $(".cont-p-box-b").eq(i).text(words_a[i]);//插入页面信息
//             // //设置内容显示隐藏效果
//         }
//         //实现点击显示隐藏效果的两种方法
//         $(".one-day").click(function () {
//             $(this).next().toggle("slow")
//         });
//         // $(".one-day").click(function () {//第二种
//         //     var aaa = $(".one-day").index(this);
//         //     $(".content").eq(aaa).toggle("slow");
//         // });
//
//     }
// });
