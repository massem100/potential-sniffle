'use strict'

window.onload = ()=>{
    // alert("I'm working");
    //Carousel Functionality 
    // Arrow Buttons should work
    //if it's at the begining, previous arrow should be inactive
    // if at end, next button should be an inactive. 
    //Images if not active should be hidden 
    // SLide transition
    var img1 = document.getElementById("img1"); 
    var slides = document.getElementsByClassName("carousel__slide");

    // console.log(slides.classList);
    // console.log(slides);

   for (let i=0; i < slides.length; i++){
        if (!(slides[i].classList.contains("active"))){   
            slides[i].style.display= "None";
        }
    }
    
    // img1.style.display = 'None';


}