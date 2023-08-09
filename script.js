let homeButton = document.getElementById("home-button")
let aboutmeButton = document.getElementById("aboutme-button")
let projectsButton = document.getElementById("projects-button")
let skillsButton = document.getElementById("skills-button")

let homeContent = document.getElementsByClassName("content")[0]
let aboutmeContent = document.getElementsByClassName("content")[1]
let projectsContent = document.getElementsByClassName("content")[2]
let skillsContent = document.getElementsByClassName("content")[3]
let emailText = document.getElementById("email")

homeContent.hidden = false;
aboutmeContent.hidden = true;
projectsContent.hidden = true;
skillsContent.hidden = true;
emailText.hidden = true;

function fade_func(target, className){
    let line = 0;
    let timer = setInterval(onTick,100);
    let length = document.getElementsByClassName(className)[0].getElementsByTagName('span').length
    function onTick(){
        const span = target.querySelectorAll('span')[line];
        span.classList.add('fade');
        line++;
        if(line === length){
            clearInterval(timer);
            timer = null;
        }
    }
}   

function clear_fade_class(target, className){
    let line = 0;
    let timer = setInterval(onTick,0);
    let length = document.getElementsByClassName(className)[0].getElementsByTagName('span').length
    function onTick(){
        const span = target.querySelectorAll('span')[line];
        span.classList.remove('fade')
        line++
        if(line === length){
            clearInterval(timer);
            timer = null;
        }
    }
}  

window.onload = (event) => {
    event = fade_func(homeContent, "home")
}

homeButton.onclick = function() {
    homeContent.style.zIndex = "10";
    aboutmeContent.style.zIndex = "0";
    projectsContent.style.zIndex = "0";
    skillsContent.style.zIndex = "0";
    homeContent.hidden = false;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    fade_func(homeContent, "home");
    clear_fade_class(aboutmeContent, "about-me");
    clear_fade_class(projectsContent, "projects");
    clear_fade_class(skillsContent, "skills");
}

aboutmeButton.onclick = function() {
    homeContent.style.zIndex = "0";
    aboutmeContent.style.zIndex = "10";
    projectsContent.style.zIndex = "0";
    skillsContent.style.zIndex = "0";
    homeContent.hidden = true;
    aboutmeContent.hidden = false;
    projectsContent.hidden = true;
    skillsContent.hidden = true;
    fade_func(aboutmeContent, "about-me");
    clear_fade_class(homeContent, "home");
    clear_fade_class(projectsContent, "projects");
    clear_fade_class(skillsContent, "skills");
}

projectsButton.onclick = function() {
    homeContent.style.zIndex = "0";
    aboutmeContent.style.zIndex = "0";
    projectsContent.style.zIndex = "10";
    skillsContent.style.zIndex = "0";
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = false;
    skillsContent.hidden = true;
    fade_func(projectsContent, "projects");
    clear_fade_class(homeContent, "home");
    clear_fade_class(aboutmeContent, "about-me");
    clear_fade_class(skillsContent, "skills");
}

skillsButton.onclick = function() {
    homeContent.style.zIndex = "0";
    aboutmeContent.style.zIndex = "0";
    projectsContent.style.zIndex = "0";
    skillsContent.style.zIndex = "10";
    homeContent.hidden = true;
    aboutmeContent.hidden = true;
    projectsContent.hidden = true;
    skillsContent.hidden = false;
    fade_func(skillsContent, "skills");
    clear_fade_class(homeContent, "home");
    clear_fade_class(projectsContent, "projects");
    clear_fade_class(aboutmeContent, "about-me");
}