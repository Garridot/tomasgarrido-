// GLOBALS FUNTIONS //

const isElementVisible = (element,threshold)=>{    
    const rect = element.getBoundingClientRect();
    return rect.top < threshold  
};
  

// CURSOR //

var cursor         = document.querySelector(".cursor");
var cursorFollower = document.querySelector(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursorFollower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

window.addEventListener("mousemove", function(e) {
    
    mouseX = e.pageX;
    mouseY = e.pageY;
});

window.addEventListener('click', () => {
    cursorFollower.classList.add("click");
    cursor.classList.add("click");

    setTimeout(() => {
        cursorFollower.classList.remove("click");
        cursor.classList.remove("click");
    }, 500)
})




// LOADPAGE //

var loadpage = document.querySelector(".loadpage");
var header   = document.querySelector("header");
var wrapper  = document.querySelector(".wrapper--");

var string = "Tomas+Garrido";
var array  = string.split("");
const frameLooper = ()=>{    
    if (array.length > 0) {
        loadpage.querySelector("span h1").innerHTML += array.shift();
    }
    loopTimer = setTimeout('frameLooper()',300);
}
frameLooper(); 


// HEADER //


var barmenu    = document.querySelector(".bar-menu");
var iconmenu   = document.querySelector(".icon-menu");
var iconcancel = document.querySelector(".icon-menu-cancel");
var nav        = document.querySelector("nav"); 
var navContact = document.querySelector("nav .nav-contact");
var navList    = document.querySelectorAll("nav ul.header-list li");
var overlayNav = document.querySelector(".overlay-nav");


barmenu.onclick = ()=>{
    iconmenu.classList.toggle("click");
    iconcancel.classList.toggle("click");
    overlayNav.classList.toggle("click");
    nav.classList.toggle("show");
    navList.forEach(i=>{
        i.classList.toggle("click");       
    })
    navContact.classList.toggle("click");    
}

navList.forEach(i=>{   
    i.addEventListener("click",()=>{
        iconmenu.classList.toggle("click");
        iconcancel.classList.toggle("click");
        overlayNav.classList.toggle("click");
        nav.classList.toggle("show");
        navList.forEach(i=>{
            i.classList.toggle("click");       
        })
        navContact.classList.toggle("click");          
    })
})


// MAIN //

const main     = document.querySelector("main");
var mainTitles = main.querySelectorAll("h1"); 
var mainLine   = main.querySelector(".line");
var mainSub    = main.querySelector(".position-");
var mainList   = main.querySelector(".main-contact")


const mainAnime = ()=>{
  mainTitles.forEach(i=>{i.style.transform = "translateY(0%)"});
  setTimeout(()=>{mainLine.style.width = "15%";},1000);  
  mainSub.style.opacity = 1;
  mainList.style.opacity = 1;  
}

// ABOUTME // 

const circleText1 = document.querySelector(".aboutme-circle h4");

circleText1.innerHTML = circleText1.innerHTML.split("").map(
   (char,i) =>
   `<span style='transform:rotate(${i * 10}deg)'>${char}</span>`
    
).join("");


// LOAD // 

window.onload = ()=>{
    setTimeout(() => {   
        loadpage.style.visibility = "hidden";
        loadpage.style.display    = "none";
        header.classList.add("loaded")
        wrapper.style.display     = "block";
        setTimeout(()=>{ mainAnime();},1000)
    }, 5000);
}




const transitionBackground = document.querySelector(".transition-background");
var transitionText = transitionBackground.querySelectorAll("p");

const transitionAnime = ()=>{

    let position = transitionBackground.getBoundingClientRect().top
  
    if(position < 600){
        transitionText.forEach(i=>{
        i.style.clipPath= "polygon(0 0, 100% 0%, 100% 100%, 0 100%)";
        i.style.transitionDelay  = (i/10)  + "s";  
      });      
    }   
} 

window.addEventListener("scroll",()=>{
    transitionAnime()
})
  

// text scramble effect

var scrambleText1  = [`2001-2024 desing デザイン`];
var scrambleText2  = [`for a better future 将来`];

var scrambleText    = document.querySelector(".scramble-text p");
const scramblespan1 = document.querySelector('.s-text-first');
const scramblespan2 = document.querySelector('.s-text-second');

let counter = 0;

const scrambleInfinitive = () => {
    const fx = new TextScramble(scramblespan2)
    fx.setText(scrambleText2[counter]).then(() => {
        setTimeout(scrambleInfinitive, 4000)
    })
    counter = (counter + 1) % scrambleText2.length
};

var observerScramble = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting === true)
        scrambleText.classList.add("show");
        new TextScramble(scramblespan1).setText(scrambleText1[counter]).then();
        scrambleInfinitive();
    },
    { threshold: [1]});

observerScramble.observe(document.querySelector(".scramble-text"));


// PROJECTS //


var projectCard = document.querySelectorAll(".project-card");

const projectsAnime = ()=>{
    if(isElementVisible(projectCard[0],600)){        
        projectCard[0].querySelector(".media").style.clipPath = "polygon(70% 0, 100% 0, 100% 100%, 70% 100%)";
        projectCard[0].querySelector(".media").style.transition = "all 1.5s";
    }
    if(isElementVisible(projectCard[1],600)){        
        projectCard[1].querySelector(".media").style.clipPath = "polygon(0% 0, 30% 0, 30% 100%, 0% 100%)";
        projectCard[1].querySelector(".media").style.transition = "all 1.5s";
    }
    if(isElementVisible(projectCard[2],600)){        
        projectCard[2].querySelector(".media").style.clipPath = "polygon(20% 0, 50% 0, 50% 100%, 20% 100%)";
        projectCard[2].querySelector(".media").style.transition = "all 1.5s";
    }
    if(isElementVisible(projectCard[3],600)){        
        projectCard[3].querySelector(".media").style.clipPath = "polygon(70% 0, 100% 0, 100% 100%, 70% 100%)";
        projectCard[3].querySelector(".media").style.transition = "all 1.5s";
    }
} 

window.addEventListener("scroll",()=>{
    projectsAnime()
})
    


// SKILLS //

const circleText = document.querySelector(".skills-circle h4");

circleText.innerHTML = circleText.innerHTML.split("").map(
   (char,i) =>
   `<span style='transform:rotate(${i * 10}deg)'>${char}</span>`
    
).join("");

var skills      = document.querySelector(".skills--");
var skillsBoxs  = document.querySelector(".skills-- .skills-boxs");
var sboxs       = document.querySelectorAll(".skills-- .box");
var sdiverder   = document.querySelectorAll(".skills-- .diverder");

var skillsRed   = document.querySelectorAll(".skills-- .box h1:nth-child(2)"); 
var skillsBlue  = document.querySelectorAll(".skills-- .box h1:nth-child(3)");



window.addEventListener("scroll",()=>{
    if(skills.getBoundingClientRect().top < window.innerHeight && skills.getBoundingClientRect().bottom >= 0) {
        for(let i = 0; i < sdiverder.length; i++){
            sdiverder[i].style.opacity = 1;
            sdiverder[i].style.width   = "100%";
            sdiverder[i].style.transitionDuration = "1s";
            sdiverder[i].style.transitionDelay    = (i / 5) +"s";
        }	
        
        for(let i = 0; i < sboxs.length; i++){
            sboxs[i].style.opacity = 1;          
            sboxs[i].style.transform = "translateY(0%)";
            sboxs[i].style.transitionDuration = ".5s";
            sboxs[i].style.transitionDelay    = (i / 4) +"s";
        }        
        
        if(this.oldScroll > this.scrollY == true){
            skillsBoxs.style.transform = "skewY(-5deg)"; 
            
        }else{
            skillsBoxs.style.transform = "skewY(5deg)"; 
           
        }
        setTimeout(() => {   
            skillsBoxs.style.transform = "skewY(0deg)"; 
            
        }, 500);
        this.oldScroll = this.scrollY;   
        
       
        skillsRed.forEach(i=>{
            i.classList.add("scroll");           
        })
    
        skillsBlue.forEach(i=>{
            i.classList.add("scroll");                 
        })
    
        setTimeout(() => {
            skillsRed.forEach(i=>{
                i.classList.remove("scroll");               
            })
            skillsBlue.forEach(i=>{
                i.classList.remove("scroll");            
            })
        }, 500);
	}
});



var anotherTools = document.querySelector(".another-tools");


window.addEventListener("scroll",()=>{
    if(anotherTools.getBoundingClientRect().top <= 0){
        
        anotherTools.querySelector(".diverder-tools").style.width = "100%";
    }else{
        
        anotherTools.querySelector(".diverder-tools").style.width = "0%";
    }
})


// CONTACT //

var contact           = document.querySelector(".contact--");
var contactBackground = document.querySelectorAll(".contact-background  p");
var contactText       = document.querySelector(".contact-- .contact-text p");
var contactUl         = document.querySelector(".contact-- ul.contactUl");
window.addEventListener("scroll", ()=>{

    for(let i = 0; i < contactBackground.length; i++){ 
        if(contact.getBoundingClientRect().top <= 500){

            contactBackground[i].style.clipPath= "polygon(0 0, 100% 0%, 100% 100%, 0 100%)";
            contactBackground[i].style.transitionDelay  = (i/10)  + "s";  
            contactText.classList.add("show");     
            contactUl.classList.add("show"); 

        }else{

            contactBackground[i].style.clipPath= "polygon(0 0, 100% 0%, 100% 0, 0 0)";
            contactBackground[i].style.transitionDelay  = (i/10)  + "s";   
            contactText.classList.remove("show");             
            contactUl.classList.remove("show");      
        }
    }
})





// SECTION TITLE UPDATE //

var sectionTitle = document.querySelector(".div-title h6");


// Create a new IntersectionObserver
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the target element is intersecting      
      if (entry.isIntersecting) {        
        if(entry.target.className == "main"){
            sectionTitle.innerHTML = "Tomas Garrido | Python Developer";
        }
        if(entry.target.id == "aboutme--"){
            sectionTitle.innerHTML = "About me";
        }
        if(entry.target.className == "skills-sticky" | entry.target.className == "skills--"){
            sectionTitle.innerHTML = "Skills";
        }
        if(entry.target.className == "projects-content"){
            sectionTitle.innerHTML = "Projects";
        }
        if(entry.target.className == "contact--"){
            sectionTitle.innerHTML = "Contact";
        }
      }
    });
  });  


// Iterate over the selected elements and start observing each target

observer.observe(main);
observer.observe(document.querySelector(".aboutme--"));
observer.observe(document.querySelector(".skills-sticky"));
observer.observe(skills);
observer.observe(contact);












