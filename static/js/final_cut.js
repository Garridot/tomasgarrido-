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
var mainImg = document.querySelector("main img");

const mainAppear = ()=>{
    setTimeout(()=>{
        for(let i = 0; i < mainH1.length; i++){
            mainH1[i].style.transform          = "translateY(0%)";
            mainH1[i].style.opacity            = 1;
            mainH1[i].style.transitionDelay    = (i / 2) + "s";
            mainH1[i].style.transitionDuration = "2s"
        } 
        mainImg.style.transform = "scale(0.7) rotate(4deg) translateY(0%)";
        mainImg.style.opacity   = 1;
        mainImg.style.transitionDuration = "2s";
        mainImg.style.transitionDelay    =  "1.6s";

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
var second_page  = document.querySelector(".second_page");
var third_page   = document.querySelector(".third_page");


window.addEventListener("scroll",()=>{    
  
    if(first_page.getBoundingClientRect().top == 0){         
        first_page.querySelector("p").classList.add("show"); 

    }else{         
        first_page.querySelector("p").classList.remove("show");      
    }

    if(second_page.getBoundingClientRect().top == 0){    

        first_page.querySelector("p").classList.remove("show");
        second_page.querySelector("p").classList.add("show");

    }else{ 
        second_page.querySelector("p").classList.remove("show");    
    }

    if(third_page.getBoundingClientRect().top <= 0){ 
        second_page.querySelector("p").classList.remove("show");   
        third_page.querySelector("p").classList.add("show");  

    }else if(third_page.getBoundingClientRect().top > 0){
        third_page.querySelector("p").classList.remove("show");
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
var projectsName  = document.querySelector(".projects-name");


window.addEventListener("scroll",()=>{
    
    if(projectTitle.getBoundingClientRect().top <= 0){
        for(let i = 0;i < projectsh1.length;i++){
            projectsh1[i].style.transform = "translateX(0%)";
            projectsh1[i].style.transitionDelay = (i/5)+"s";
            projectsh1[i].style.opacity = 1;
        }

        projectsKanji.style.opacity = 1;
        projectsName.style.opacity = 1;
    }else{
        for(let i = 0;i < projectsh1.length;i++){
            projectsh1[i].style.transform = "translateX(-20%)";
            projectsh1[i].style.transitionDelay = (i/5)+"s";
            projectsh1[i].style.opacity = 0;
        }

        projectsKanji.style.opacity = 0;
        projectsName.style.opacity = 0;
    }
})



var projectsData = [
    {
        "id": 1,
        "title" : "Football Player Charts",
        "description":
            `Football Player Charts is a football statistics website where you will find information, statistics, 
            and charts that show how influenced a player in each team he played.
            <br> Football Player Charts is an API where you can see how much a player influences his team 
            (the percentage of the goals scored, his favorite victims, his performance by competition, 
            and his percentage of goals and assists per game). You can also compare their stats to each other.
            <br> The data is collected and it's updated through a web scraping on transfermarkt.com.`
            ,
        "skills":"Python ● Django ● Django Rest ● Pandas ● Beautiful Soup ● Javascript ● HTML ● CSS",
        "img":"/static/media/project__1.jpg",
        "link":"https://football-player-charts.onrender.com/",
    },    
    {
        "id": 2,
        "title" : "Ruins Of Versailles",
        "description":
            `A project inspired by a technical test. The API provides the functionality of E-commerce.
            It provides the next endpoints:            
            <br> Register/Edit a product      
            <br> Delete a product            
            <br> Consult a product           
            <br> List all products            
            <br> Update stock of a product            
            <br> Register/Edit an order (including its details). Updating the stock of the product            
            <br> Delete an order. Restore product stock            
            <br> Consult order and details            
            <br> List all orders`
            ,
        "skills":"Python ● Django ● Django Rest ● Javascript ● HTML ● CSS ● Bootstrap",
        "img":"/static/media/project__2.jpg",
        "link":"https://ruins-of-versailles-7rbc.onrender.com/",
    },
    {
        "id": 3,
        "title" : "Inflation Calculator",
        "description":
            `An app that allows the user to calculate the accumulated inflation over two periods of time, based 
            the consumer price index (CPI).<br> Only Argentina’s inflation data are available.<br>`
            ,
        "skills":"Python ● Django ● Django Rest ● Javascript ● HTML ● CSS ● Bootstrap",
        "img":"/static/media/project__3.jpg",        
        "link":"https://inflation-calculator-arg-x4iu.onrender.com/",
    },
]

var projetsList = document.querySelector(".projets-list");


for (var i in projectsData) {   
    

    var project = document.createElement("div");
    project.className = `project --${projectsData[i].id}`;    
    project.innerHTML =  
                    `<h1>${projectsData[i].title}</h1>`;
    projetsList.appendChild(project);   
}



var projects      = document.querySelectorAll(".projets-list .project");


function  blockAnimation(){

    document.querySelector(".overlay-project").style.zIndex = "10";
    
    
    TweenMax.to(".block", 0.8, {
        width: "6%",        
        ease: Power1.easeIn,                                  
    },
    0.04
    );

    setTimeout(() => {
        TweenMax.to(".block", 0.8, {
            width: "0%",            
            ease: Power1.easeIn,                                  
        },
        0.04
        ); 
        setTimeout(() => {
            document.querySelector(".overlay-project").style.zIndex = "-10";                
        }, "1000"); 
        
    }, "2000");
}







projects.forEach(i=>{
    i.addEventListener("click",()=>{
        var id = String(i.className).replace(/[a-zA-Z]/g, "").replace("--","");

        var getItem = projectsData.filter(obj => {
            return obj.id === parseInt(id)
        })
        blockAnimation();
        renderprojectData(getItem[0])       
    })
})


const renderprojectData = (item)=>{

    setTimeout(() => {
        var viewproject = document.createElement("div")
        viewproject.className = "viewproject";
    
        var dataPreject = document.createElement("div");
        dataPreject.className = "project-data";
    
        dataPreject.innerHTML = 
        `
        <div class="cancel-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <div class="proj-title"><h1>${item.title}</h1></div>
        <div class="proj-img"><img src="${item.img}"></div>
        <div class="proj-text">
            <div class="proj-skills">
                <h2>Skills</h2>
                <span><p>${item.skills}</p></span>
            </div>
            <div class="proj-description">
                <h2>(Description)</h2>
                <span><p>${item.description}</p></span>
                <div class="link"><a href="${item.link}"  target="_blank">View Project</a></div>
            </div>
        </div>`
    
        viewproject.appendChild(dataPreject);
        projetsList.appendChild(viewproject);
    }, "1000");  
    
    
    setTimeout(() => {
    var cancelProject =  document.querySelector(".cancel-icon svg");

    cancelProject.addEventListener("click",()=>{
        blockAnimation()
        setTimeout(() => {
            document.querySelector(".viewproject").remove()  ;                     
        }, "1000"); 
    })
    }, "1500");  
     
}







// TRANSITION 2 //

var dataText2   = document.querySelectorAll(".transition2-- h1");



window.addEventListener('scroll', ()=> {
    dataText2.forEach(i=>{
        i.classList.add("scroll");

        setTimeout(()=>{
            i.classList.remove("scroll");
        },1000)
    })  

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
observer.observe(document.querySelector("#aboutme--"));
observer.observe(document.querySelector(".skills-sticky"));
observer.observe(skills);
observer.observe(document.querySelector(".projects-content"));
observer.observe(contact);












