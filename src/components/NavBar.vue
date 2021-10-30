<template>
  <nav class="">
    <div class="nav-container">
    <img class="nav-logo" src="../assets/uploads/logo.svg" alt="">
    <!-- <img class="nav-logo" src="../assets/uploads/M.svg" alt=""> -->
    <div class="nav-menu" @click="navdropdown">      
      <div class="nav-hamburgerctn">
        <div class="nav-hamburgerbtn"></div>
        <div class="nav-hamburgerbtn"></div>
        <!-- <div class="nav-hamburgerbtn"></div> -->
    </div>

    </div>
    
    <!-- <div class="navbar-div"> 
        <ul class="">
            <li class="">Development</li>
            <li class="">Graphic Design</li>
            <li class="">About</li>
            <li class="">Contact</li>
        </ul>
    </div> -->
    <div class="navbar-nav">
        <!-- <img class="nav-icons"  src="../assets/uploads/instagram.svg" alt=""> -->
        <!-- <img class="social-icon" src="../assets/uploads/linkedin.svg" alt=""> -->
        <!-- <img class="nav-icons" src="../assets/uploads/facebook.svg" alt=""> -->
        <!-- <img class="social-icon"  src="../assets/uploads/github.svg" alt=""> -->
        <!-- <img class="social-icon"  src="../assets/uploads/dribbble-logo.svg" alt="">   -->
    </div>  
  </div>
  <!-- <div class="dropdown" @focus="handleFocus" @focusout="handleFocusOut" @mouseleave="handleFocusOut" tabindex="-1">
     <ul class="">
            <li class="">Development</li>
            <li class="">Graphic Design</li>
            <li class="">About</li>
            <li class="">Contact</li>
        </ul>
  </div> -->
  </nav>
 
</template>

<script>
export default {
  name: "NavBar", 

  methods:{
    navdropdown:()=> {
 
      let dropdown= document.getElementsByClassName('dropdown')[0];
      // console.log(dropdown);
      dropdown.style.display="block";
      
    }, 

    clickoutside: ()=>{
      console.log('hfjjf');
      let dropdown= document.getElementsByClassName('dropdown')[0];
      dropdown.hidden = "true";
      // if(!dropdown.is(e.target) && dropdown.has(e.target).length === 0){
      //   dropdown.hide();
      // }
    }, 
    handleFocus: function(){
        let dropdown= document.getElementsByClassName('dropdown')[0];
        dropdown.style.display="block";
    }, 

    handleFocusOut: function(){
      let dropdown= document.getElementsByClassName('dropdown')[0];
      dropdown.style.display="none";

    }
    
  }
};
</script>
