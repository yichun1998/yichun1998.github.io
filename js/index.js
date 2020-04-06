window.onload = function(){
 
//获取到需要的元素
var demo = document.getElementById('demo');
var smallBbox = document.getElementById('small-box');
var floatBox = document.getElementById('float-box');
var bigBox = document.getElementById('big-box');
var bigBoxImg = bigBox.getElementsByTagName('img')[0];
 
 
floatBox.onmouseover = function(){
smallBbox.style.display = "block";
bigBox.style.display = "block";
}
floatBox.onmouseout = function(){
smallBbox.style.display = "none";
bigBox.style.display = "none";
}
floatBox.onmousemove = function(e){
var _event = e || event;
console.log(_event.clientY);
var l = _event.clientX - demo.offsetLeft - floatBox.offsetLeft - smallBbox.offsetWidth/2;//除2是因为让鼠标点出现在放大遮罩的中心位置
var t = _event.clientY - demo.offsetTop  - floatBox.offsetTop  - smallBbox.offsetHeight/2;
 
var demoWidth = demo.offsetWidth;
var demoHeight = demo.offsetHeight;
 
 
var smallBboxWidth = smallBbox.offsetWidth;
var smallBboxHeight = smallBbox.offsetHeight;
//鼠标可以移动的最大XY的距离
var maxX = demoWidth - smallBboxWidth;
var maxY = demoHeight - smallBboxHeight;
 
 
l = Math.min(maxX,Math.max(0,l));
t = Math.min(maxY,Math.max(0,t));
smallBbox.style.left = l +"px";
smallBbox.style.top = t +"px";
 
 
var percentX = l / (floatBox.offsetWidth - smallBboxWidth);//求出小图遮罩的坐标占可移动区域的比例
var percentY = t / (floatBox.offsetHeight - smallBboxHeight);
 
 
bigBoxImg.style.left = -percentX *(bigBoxImg.offsetWidth - bigBox.offsetWidth) +"px";//大图对的移动方向和小图遮罩的移动方向相反
bigBoxImg.style.top  = -percentY*(bigBoxImg.offsetHeight - bigBox.offsetHeight)+"px";
 
}
}