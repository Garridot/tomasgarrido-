 
var icon_menu = document.querySelector('.icon-menu')
var menu      = document.querySelector('.list-nav')

icon_menu.addEventListener("click",function(){
    icon_menu.classList.toggle('clicked')
    menu.classList.toggle('show') 
})


var menu_li = [...menu.querySelectorAll('li')] 

menu_li.forEach(li => {

  li.addEventListener("click",function(){
    icon_menu.classList.toggle('clicked')
    menu.classList.toggle('show')
  })

});


var nav = document.querySelector('#nav')

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 

  var st = window.pageYOffset || document.documentElement.scrollTop; 
    // console.log(st)


  if (st > lastScrollTop){    
  nav.style.top = "-7rem" 
  nav.style.transition = 'all .5s'
  // downscroll code
  }else{     
  nav.style.top = "0" 
  nav.style.transition= 'all .5s'         
      
  // upscroll code
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

  
var id_projects  = document.querySelector('#projects')


window.addEventListener("scroll", function(){
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if(1000 < st ){
       
    document.querySelector('header').style.background  = '#030303' 
    
    
   
    
  }else{
    document.querySelector('header').style.background = 'transparent'    
       
  }
  
})




// var carousel  = document.querySelector('.carousel')

// window.onscroll = function (e) { 

//   carousel.querySelector('.frontend').style.transform= 'translate3d(500px, 10px, 10px)'
  
//   var pointY = 500 + Math.max(500 -  0.4*window.scrollY) 
//   carousel.querySelector('.frontend').style.transform = "translate3d("+ pointY +"px,  10px, 10px)"

  

//   carousel.querySelector('.backend').style.transform = "translate3d(500px,  10px, 10px)"  
//   var pointY2 = -500 - Math.max(50 - 0.4*window.scrollY)
//   carousel.querySelector('.backend').style.transform = "translate3d("+ pointY2 +"px,  10px, 10px)"
  
  

// }



     
        
    
    

