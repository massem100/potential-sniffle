// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("count-new").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  if (days < 10){
    document.getElementById("days-1").innerHTML = 0;
    document.getElementById("days-2").innerHTML =days;
  }else{
    document.getElementById("days-1").innerHTML =days.toString().slice(0,1);
    document.getElementById("days-2").innerHTML =days.toString().slice(1,2);
  }
  
  if (hours < 10){
    document.getElementById("hours-1").innerHTML = 0;
    document.getElementById("hours-2").innerHTML =hours;
  }else{
    document.getElementById("hours-1").innerHTML =hours.toString().slice(0,1);
    document.getElementById("hours-2").innerHTML =hours.toString().slice(1,2);
  }
  
  if (minutes < 10 ){
    document.getElementById("min-1").innerHTML = 0;
    document.getElementById("min-2").innerHTML = minutes;
  }else {
    document.getElementById("min-1").innerHTML = minutes.toString().slice(0,1);
    document.getElementById("min-2").innerHTML = minutes.toString().slice(1,2);
  }
  if (seconds < 10){
    document.getElementById("sec-1").innerHTML = 0;
    document.getElementById("sec-2").innerHTML =seconds;
  }else{
    document.getElementById("sec-1").innerHTML =seconds.toString().slice(0,1);
    document.getElementById("sec-2").innerHTML =seconds.toString().slice(1,2);
  }
  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-new").innerHTML = "IT's HERE..";
  }
}, 1000);