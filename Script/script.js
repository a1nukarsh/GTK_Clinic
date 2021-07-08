// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Counter
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 2);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

// Burger
var test = (function () {
  let sidebar = document.getElementById("sidebar");
  let openButton = document.getElementById("burger");
  let closeButton = document.getElementById("close");

  navtoggle = function () {
    openButton.addEventListener("click", (_) => {
      sidebar.classList.add("open");
    });

    closeButton.addEventListener("click", (_) => {
      sidebar.classList.remove("open");
    });
  };

  window.onload = function () {
    console.log("loaded");
    navtoggle();
  };
})();



