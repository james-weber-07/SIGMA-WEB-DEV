let a="CRAZY "
let b="AMAZING "
let c="FIRE "
let d="ENGINE "
let e="FOODS "
let f="GARMENTS "
let g="BROS "
let h="LIMITED "
let i="HUB "

x=Math.random();
if(x<0.3){
     adj=a;
}
else if(x>0.3 && x<0.6){
      adj=b;
}
else{
      adj=c;
}
y=Math.random();
if(y<0.3){
     nam=d;
}
else if(y>0.3 && y<0.6){
      nam=e;
}
else{
      nam=f;
}
z=Math.random();
if(z<0.3){
     ads=g;
}
else if(z>0.3 && z<0.6){
      ads=h;
}
else{
      ads=i;
}

console.log(x)
console.log(y)
console.log(z)
console.log(adj+nam+ads)