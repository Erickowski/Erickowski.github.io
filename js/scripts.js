(function() {
    'use strict';
    //Redireccionar a index
    var botonSkill = document.getElementById("skills");
    botonSkill.onclick = function(){
        window.location="index.html";
    };
    //Redireccionar a projects
    var botonProject = document.getElementById("projects");
    botonProject.onclick = function(){
        window.location="projects.html";
    };
    //Redireccionar a experience
    var botonExperience = document.getElementById("experience");
    botonExperience.onclick = function(){
        window.location="experience.html";
    };
    //Redireccionar a experience
    var botonEducation = document.getElementById("education");
    botonEducation.onclick = function(){
        window.location="education.html";
    };
    
  })();