//选中节点
var box = document.getElementsByClassName("box");
//设置一个空数组
var array = [];
//创建一个函数
(function sub()
{
    //设置条件，依次排出三个数
    for(i = 0;i < box.length;i++)
    {
        //把数放入数组中
        array.push(i);
    }
    //返回一个数值
    return array;
})
//函数自执行
();
//打印数组
console.log(array);
// 创建一个新函数，设置默认颜色，方便日后调用。
function defaultColor() {
    for(var i = 0;i < box.length; i++){
        //选取节点.style.backgroundColor = "是值就打上冒号，是名就不用冒号"
        box[i].style.backgroundColor = "orange";
    }
}
//改变原本div的位置
function changeNumber() {
    for(i = 0;i<box.length;i++) {
        var randomnum = Math.floor(Math.random()*(box.length));//抽取随机数（0~9之间）
        var center =  array[randomnum];//把抽出来的牌先放到桌子上
        array[randomnum] = array[i];//把第一张牌（按顺序依次抽）放到随机抽取牌的位置
        array[i] = center;//再把随机抽出来的牌放到第一张牌（按顺序依次牌排）的位置
    }
    return array;
}
changeNumber();
console.log(changeNumber());
//颜色的选择用rgb，方便，只需要三个数。
function changeColor() {
    var r = Math.floor(Math.random()*256);//第一个数
    var g = Math.floor(Math.random()*256);//第二个数
    var b = Math.floor(Math.random()*256);//第三个数
    return "rgb("+ r +","+ g +","+ b +")";//然后把数进行拼接，返回值
}
changeColor(changeColor());
//该函数每执行一次，之前创建的数组里的数就进行依次洗牌
function Result() {
    changeNumber();
    defaultColor();//每执行一次重置一下颜色。
    console.log(changeNumber());
    //因为数组的数是随机的，所以变换三个只要取数组中前三个数，因为是0~9之间随机的
    box[array[0]].style.backgroundColor = changeColor();
    box[array[1]].style.backgroundColor = changeColor();
    box[array[2]].style.backgroundColor = changeColor();
}
//使用clearInterval、clearTimeout 必须要设置一个ID进行关联。
var id;
function start(){
    clearInterval(id);
    id = setInterval("Result()",1000);
}
function stop(){
    clearInterval(id);
    defaultColor();
}
// 回车键开始以及空格键暂停
function keyStart(){
 if (event.keyCode==13)
   document.getElementById("start").click();
}
function keyStop(){
 if (event.keyCode==32)
   document.getElementById("stop").click();
}
