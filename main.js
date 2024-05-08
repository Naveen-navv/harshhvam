var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    260: {
      slidesPerView: 1,
    },
    940: {
      slidesPerView: 1,
    },
    1040: {
      slidesPerView: 3,
    }
  }
});



var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: "#swpnxt",
    prevEl: "#swpprv",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".worker", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#drm, .sh2 , .services h3, .wh2", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".why h4, .contact, .contact h5, .links img", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(
  ".homecon h2, .abcon h3, .abcon h2, .abcards h5, .proj h3, .prh2",
  {
      ...scrollRevealOption,
      interval: 200,
  }
);


function empty() {
  var x;
  x = document.getElementById("name").value;
  if (x == "") {
      alert("Please enter a Name");
      return false;
  };
  var a;
  a = document.getElementById("phone").value;
  if (a == "") {
      alert("Please enter a Phone number to be contacted");
      return false;
  }
   var z;
  z = document.getElementById("message").value;
  if (z == "") {
      alert("Please type a message");
      return false;
  };

  if (x !== "") {
      alert("Your details have been submitted. We will contact you shortly")
      return false;
  }
}

const navLinks = document.getElementById("navbarSupportedContent");

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("show");
});

