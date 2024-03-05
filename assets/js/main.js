
(function () {
  "use strict";

  //--------------  PAGE LOADER
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  // -------------- Part function for page spinner    For scroll event listener 
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  //--------------  PAGE LOADER END



  //-------------- NAVIGATION TO GO BACK AT HOME PAGE
  let homenav = select('.home-nav')
  if (homenav) {
    const togglehome = () => {
      if (window.scrollY > 100) {
        homenav.classList.add('active')
      } else {
        homenav.classList.remove('active')
      }
    }
    window.addEventListener('load', togglehome)
    onscroll(document, togglehome)
  }
  //-------------- NAVIGATION TO GO BACK AT HOME PAGE END


  //--------------  PAGE LOAD SPINNER 
  let spinner = select('#spnrlodr');
  if (spnrlodr) {
    window.addEventListener('load', () => {
      spinner.remove()
    });
  }
  //--------------  PAGE LOAD SPINNER END


  //-------------- FOR HEADER TRANSITION
  const glightbox = GLightbox({
    selector: '.glightbox'
  });
  //-------------- FOR HEADER TRANSITION END



  // -------------- ANIMATION ON SCROLL
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()
// -------------- ANIMATION ON SCROLL END






//-------------- SCROLLED ANIMATION FOR HEADER / NAVBAR
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  // const logo = document.getElementById('tfsi-logo');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
    // logo.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    // logo.classList.remove('scrolled');
  }
});
//-------------- SCROLLED ANIMATION FOR HEADER / NAVBAR END



//------------- FOR NAV ITEMS BACKGROUND COLOR WHEN IT IS CLICKED
function toggleNav() {
  const header = document.getElementById('header');
  header.classList.toggle('toggled-nav');
}
//------------- FOR NAV ITEMS BACKGROUND COLOR WHEN IT IS CLICKED END



// //------------- NAVBAR AUTO CLOSE WHEN CLICKING A NAV ITEM
// // Get all nav-link elements
// var navLinks = document.querySelectorAll('.nav-link');

// // Loop through each nav-link element
// navLinks.forEach(function (navLink) {
//   // Add click event listener
//   navLink.addEventListener('click', function () {
//     // Close the navbar by triggering the click event on the toggler button
//     document.querySelector('.navbar-toggler').click();
//   });
// });
// //-------------- NAVBAR AUTO CLOSE WHEN CLICKING A NAV ITEM END



//------------- NAVBAR AUTO CLOSE WHEN CLICKING A NAV ITEM
document.addEventListener("DOMContentLoaded", function () {
  // Get all nav-link elements
  const navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each nav-link
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      // Close the navbar by removing the 'show' class from the collapsible element
      const collapsible = document.getElementById('tfsi-main-nav');
      collapsible.classList.remove('show');
    });
  });
});
//------------- NAVBAR AUTO CLOSE WHEN CLICKING A NAV ITEM END





//----------- FUNCTION TO ADD THE BACKGROUND COLOR CLASS WHEN NAVBAR IS EXPANDED
function addNavbarBg() {
  const navbar = document.getElementById('tfsi-main-nav');
  navbar.classList.add('navbar-bg');
}

// Function to remove the background color class when navbar is collapsed
function removeNavbarBg() {
  const navbar = document.getElementById('tfsi-main-nav');
  navbar.classList.remove('navbar-bg');
}

// Add event listener for collapse event (when navbar is hidden)
document.querySelector('.collapse').addEventListener('hide.bs.collapse', removeNavbarBg);

// Add event listener for show event (when navbar is expanded)
document.querySelector('.collapse').addEventListener('show.bs.collapse', addNavbarBg);

// Add event listener for window resize event
window.addEventListener('resize', function () {
  // Check if the navbar is expanded and the screen size is now larger than the breakpoint
  const navbar = document.getElementById('tfsi-main-nav');
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (!navbarToggler.classList.contains('collapsed') && window.innerWidth > 991) {
    // Remove the background color class
    removeNavbarBg();
  }
});
//----------- FUNCTION TO ADD THE BACKGROUND COLOR CLASS WHEN NAVBAR IS EXPANDED - END




// --------------------------- WEB PORTFOLIO --------------------------------- //






