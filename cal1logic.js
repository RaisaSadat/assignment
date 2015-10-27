/**
 * @author sharmin
 */
var num= document.getElementById('display');
function intoscreen(x) {
	num.value +=x;
	if (x=="C"){
		num.value = "";
	}
}
function answer(){
	x= num.value;
	x= eval (x);
	num.value =x;
}
function backspace(){
	var number = num.value;
	var len= number.length-1;
	var newnumber = number.substring (0,len);
	num.value=newnumber;
}
function power (y){
	x= num.value;
	x=Math.pow(x,y);
	num.value=x;
}
function percent(y){
	x=num.value;
	x= x*y;
	num.value=x;
}
