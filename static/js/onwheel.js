var projects  = document.querySelector('.container-projs')
var project_1 = document.querySelector('#football_proj__')
var project_2 = document.querySelector('#classroom_proj__')
var project_3 = document.querySelector('#inflation_calculator_proj')




projects.onwheel = function(e){ 
    var pointY =  e.wheelDelta
    setTransform(pointY=pointY)
}

function setTransform(pointY) { 
  
  project_1.style.transform = "translateY(800px)" 
  project_1.style.transform = "translateY("+ pointY +"px)"  
  
  if (project_1.style.transform = "translateY(0px)"){ 
    project_2.style.transform = "translateY("+ pointY +"px)";    
    
  }else{
    project_1.style.transform = "translateY("+ pointY +"px)";
  }

  if(project_2.style.transform = "translateY(120px)"){   
    project_2.style.transform = "translateY(0px)";    
  } 


  if(project_3.style.transform = "translateY(120px)"){   
    project_3.style.transform = "translateY(0px)";    
  }   
}      



  
