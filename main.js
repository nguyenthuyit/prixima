var btn = document.getElementById('btn-nav')
var navMenu = document.getElementById('list-nav')
btn.onclick = function(){
    if(navMenu.className.indexOf('open')== -1){
        navMenu.className += ' open'
    }else{
        navMenu.className = navMenu.className.replace('open','')
    }
}
var listItems = document.querySelectorAll('#list-nav a[href *= "#"]')
console.log(listItems)
for(var i =0; i<listItems.length;i++){
    var listItem = listItems[i]
    listItem.onclick=function(){
        navMenu.className = navMenu.className.replace('open','')

    }
}
