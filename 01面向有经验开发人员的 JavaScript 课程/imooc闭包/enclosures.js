// 
document.body.innerHTML = 
"<div id='div1'>111</div>" + "<div id='div2'>222</div>" +
"<div id='div3'>333</div>" + "<div id='div4'>444</div>";

for (var i = 0; i < 4; i++) {
    document.getElementById('div'+i).addEventListener('click',function(){
        alert(i);
    });
}

