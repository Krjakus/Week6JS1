/**
 * Created by Constantius on 09.04.2020.
 */
// 1)
/*
let x1=11;
let x2='true';
let x3='java script';
let x4=100;

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
*/
// 2)
/*
 let num = 1;
 num += 11;
 console.log(num);
 num -= 11;
 console.log(num);
 num *= 11;
 console.log(num);
 num /= 11;
 console.log(num);
 num ++;
 console.log(num);
 num --;
 console.log(num);
*/
// 3)
/*
let greeting='Hello, ';
let userName;

userName=prompt('Whats your name?');
greeting+=userName;
greeting+='!';
alert(greeting);
*/
// 4)
/*
let x;
let y;
let result;
x=prompt('Введите два разных нечетных числа, что бы при операции ((x+y)/x)*((x+y)/y) остаток оставался четным. Первое число.');
x=parseInt(x);
if(x%2 ==0) {
    alert('Пожелуйста, введите нечетное число!!!')
    window.location.reload();
}else {
    y = prompt('Введите два разных нечетных числа, что бы при операции ((x+y)/x)*((x+y)/y) остаток оставался четным. Второе число.');
    y = parseInt(y);
}if (y%2 == 0){
    alert('Пожелуйста, введите нечетное число!!!');
    window.location.reload();
}else if(x==y){
    alert('Пожелуйста, введите разные числа!!!');
    window.location.reload();
}else{
    result = ((x + y) / x) * ((x + y) / y);
}if ( result%2  == 0){
    alert("число четное");
}else{                                  // заметил что при срабатывании какого либо из if ранее, запускается последний else.
    alert("число не четное");
    window.location.reload();
}
*/
// 5)
/*
let x;
x=prompt('ведите минуты');
x=parseInt(x);
x=x%60;
console.log(x);
if(x<=15){
    alert('Первая четверть часа');
}else if(x<=30){
    alert('Вторая четверть часа');
}else if(x<=45){
    alert('Третья четверть часа');
}else if(x<=60){
    alert('Четвёртая четверть часа');
}
*/
// 6)
/*
let a = 10;
let b = 51;

for (var i = a; i < b; i++) {
    if (i % 5 == 0){
        console.log(i);
    }
}
*/
// 7)
/*
let x=5;
console.log(x)
while(x > 1){
    x-=1
    console.log(x)
}
*/
// 8)
/*
let y;
let x;
y=prompt('Введите число.');
y=parseInt(y);
if(y<10){
    x=1;
    console.log(x);
}else if(10<y>20){
    x=0;
    console.log(x);
}else if(y>20){
    x=-1;
    console.log(x);
}
*/
// 9)
/*
let x= 100;
let i= 1;
for (i; i<100; i++){
    x=x+i
}
console.log(x);
*/



























