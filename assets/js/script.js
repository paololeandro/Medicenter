window.onload = function() {
  this.document.querySelector(".menuToggle").addEventListener("click", function(){
    if(document.querySelector(".menu nav ul ").style.display == 'block') {
      document.querySelector(".menu nav ul ").style.display = 'none';
    } else {
      document.querySelector(".menu nav ul ").style.display = 'block';
    }
  });
};