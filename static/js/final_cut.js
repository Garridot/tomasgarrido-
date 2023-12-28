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

var main    = document.querySelector("main");
var mainH1  = document.querySelectorAll("main h1");
var mainP   = document.querySelector("main p");

const mainAppear = ()=>{
    setTimeout(()=>{
        for(let i = 0; i < mainH1.length; i++){
            mainH1[i].style.transform          = "translateY(0%)";
            mainH1[i].style.opacity            = 1;
            mainH1[i].style.transitionDelay    = (i / 2) + "s";
            mainH1[i].style.transitionDuration = "2s"
        }         

        mainP.style.transform = "rotate(350deg) translateY(0%)";
        mainP.style.opacity   = 1;
        mainP.style.transitionDuration = "2s";
        mainP.style.transitionDelay    =  "1.7s";


    },500)
}



// LOAD // 

window.onload = ()=>{
    setTimeout(() => {   
        loadpage.style.visibility = "hidden";
        loadpage.style.display    = "none";
        header.classList.add("loaded")
        wrapper.style.display     = "block";
        mainAppear()
    }, 5000);
}



// Transition-1 //

var dataText = document.querySelectorAll(".transition--1 span h1");

var data  = document.querySelectorAll(".data");
const dataPosition = Array.from(data).map(function(e, i) {        
    return [data[i].getBoundingClientRect().top];
});



window.addEventListener('scroll', ()=> {
    dataText.forEach(i=>{
        i.classList.add("scroll");

        setTimeout(()=>{
            i.classList.remove("scroll");
        },1000)
    })
    
    let value = window.scrollY;       
    for(var i=0; i < data.length; i++){
        var dataText1 = data[i].querySelector("span h1");
        var dataText2 = data[i].querySelector("span:nth-child(2) h1");

        if(data[i].getBoundingClientRect().top < window.innerHeight && data[i].getBoundingClientRect().bottom >= 0) {

            dataText1.style.transform  = "translateX("+ (value - dataPosition[i]) * .02 +"px)"; 
            dataText2.style.transform  = "translateX(-"+ (value - dataPosition[i]) * .02 +"px)";            
        }
    }
    

})



// text scramble effect

var scrambleText1  = [`2001-2023 desing デザイン`];
var scrambleText2  = [`for a better future 将来`];

var scrambleText    = document.querySelector(".scramble-data p");
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

observerScramble.observe(document.querySelector(".text-scramble-"));




// ABOUT ME //

var first_page   = document.querySelector(".first_page");

window.addEventListener("scroll",()=>{
    if(first_page.getBoundingClientRect().top < 500){
        first_page.querySelector("p").classList.add("show");
    }
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




// PROJECTS //


var projectTitle  = document.querySelector(".projects-presentation");
var projectsh1    = document.querySelectorAll(".projects-presentation h1");
var projectsKanji = document.querySelector(".projects-kanji");



window.addEventListener("scroll",()=>{
    
    if(projectTitle.getBoundingClientRect().top <= 0){
        for(let i = 0;i < projectsh1.length;i++){
            projectsh1[i].style.transform = "translateX(0%)";
            projectsh1[i].style.transitionDelay = (i/5)+"s";
            projectsh1[i].style.opacity = 1;
        }

        projectsKanji.style.opacity = 1;
        
    }else{
        for(let i = 0;i < projectsh1.length;i++){
            projectsh1[i].style.transform = "translateX(-20%)";
            projectsh1[i].style.transitionDelay = (i/5)+"s";
            projectsh1[i].style.opacity = 0;
        }
        projectsKanji.style.opacity = 0;     
    }
})


var projectsList = document.querySelector(".projects--");

const upateProject = (project) => {
    var title   = projects[0].querySelector(".title-- h5");
    var skills  = projects[0].querySelector(".tech-skills span");
    var img     = projects[0].querySelector(".project-img");
    var URLSITE = projects[0].querySelector(".links a:nth-of-type(1)");
    var URLCODE = projects[0].querySelector(".links a:nth-of-type(2)");
    var description = projects[0].querySelector(".description-- p");

    title.innerHTML  = project.name;
    skills.innerHTML = project.skills;

    img.style.background         = `url(${project.image})`;
    img.style.backgroundSize     = "cover";
    img.style.backgroundPosition = "center";

    URLCODE.href = project.URL_CODE;
    URLSITE.href = project.URL_SITE;

    description.innerHTML = project.description

}

const projectsData = [
    {
        "name"        : "Football Players Charts",
        "skills"      : "Python ● Django RestFramework ● Flask ● Pandas ● JWT  ● YAML ● HTML ● CSS ● Javascript ● Chart.js",
        "URL_CODE"    : "https://github.com/Garridot/football-players-stats-api",
        "URL_SITE"    : "https://football-players-charts.onrender.com/",
        "image"       : "/static/media/banner.png",
        "description" : "Developed using Django Rest Framework, this app manages and analyzes football players' performance statistics by web scraping from Transfermarkt.",
    },
    {
        "name"        : "E-commerce Project",
        "skills"      : "Python ● Django RestFramework ● HTML ● CSS ● bootstrap  ● Javascript",
        "URL_CODE"    : "https://github.com/Garridot/Ruins-of-Versailles_Ecommerce-Project",
        "URL_SITE"    : "https://ruins-of-versailles-7rbc.onrender.com/",
        "image"       : "https://raw.githubusercontent.com/Garridot/Ruins-of-Versailles_Ecommerce-Project/main/project_images/image__1.png",
        "description" : 
        `The API streamlines E-commerce for a painting-centric art gallery, featuring key endpoints for creating, editing, and deleting products. Users can view product details, list products, and update stock. It also supports order functions, allowing creation, modification, and deletion, with options for restoring product stock, viewing order details, and listing all orders, enhancing business efficiency.`,
    },
    {
        "name"        : "Inflation Calculator",
        "skills"      : "Python ● Django RestFramework ● HTML ● CSS ● bootstrap  ● Javascript",
        "URL_CODE"    : "https://github.com/Garridot/inflation_calculator",
        "URL_SITE"    : "https://inflation-calculator-arg-x4iu.onrender.com/",
        "image"       : "/static/media/project__3.jpg",
        "description" : "app that allows the user to calculate the accumulated inflation over two periods of time, based the consumer price index (CPI). Only Argentina’s inflation data are available.",
    }
]


for (var i = 0; i < projectsData.length; i++) {
    var project = document.createElement("div");
    project.className = "project"; 
    projectsList.appendChild(project);   
}

var projects = document.querySelectorAll(".project");

projects[0].innerHTML = 
`
<div class="data--">
    <div class="tags--">
        <div class="tech-skills">
            <span>${projectsData[0].skills}</span>
        </div>                        
    </div>
    <div class="project-img"></div>
    <div class="proj--text">
        <div class="title--">
            <h5>${projectsData[0].name}</h5>
            <div class="links">
                <a href="${projectsData[0].URL_SITE}" target="_blank">view project</a>
                <a href="${projectsData[0].URL_CODE}" target="_blank">view code</a>
            </div>
        </div>
        <div class="description--">
            <p>${projectsData[0].description}</p>
        </div>
    </div>
</div>  
`

// Function to update project content
const updateProjectContent = () => {
    projects.forEach((project, index) => {
        if (project.getBoundingClientRect().top == 0) {
            upateProject(projectsData[index]);
        }
    });
};

// Event listener for scroll
window.addEventListener('scroll', updateProjectContent);





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
observer.observe(document.querySelector("#aboutme--"));
observer.observe(document.querySelector(".skills-sticky"));
observer.observe(skills);
observer.observe(document.querySelector(".projects-content"));
observer.observe(contact);












