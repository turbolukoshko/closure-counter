var a = document.createElement("button");
var b = document.createElement("button");
a.innerText = "button 1";
b.innerText = "button 2";
document.body.appendChild(a);
document.body.appendChild(b);

function clickCounter(el){
  var counter = 0;
  el.addEventListener('click', function(){
    el.innerText = counter++;
  });
}

clickCounter(a);
clickCounter(b);
