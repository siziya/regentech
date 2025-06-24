/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Header Search
5. Init Masonry


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var header = $(".header");
  var menuActive = false;
  var menu = $(".menu");
  var burger = $(".hamburger");

  setHeader();

  $(window).on("resize", function () {
    setHeader();
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initHeaderSearch();
  initMasonry();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".menu").length) {
      var menu = $(".menu");
      if ($(".hamburger").length) {
        burger.on("click", function () {
          if (menuActive) {
            closeMenu();
          } else {
            openMenu();

            $(document).one("click", function cls(e) {
              if ($(e.target).hasClass("menu_mm")) {
                $(document).one("click", cls);
              } else {
                closeMenu();
              }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	4. Init Header Search

	*/

  function initHeaderSearch() {
    if ($(".search_button").length) {
      $(".search_button").on("click", function () {
        if ($(".header_search_container").length) {
          $(".header_search_container").toggleClass("active");
        }
      });
    }
  }

  /* 

	5. Init Masonry

	*/

  function initMasonry() {
    if ($(".blog_post_container").length) {
      $(".blog_post_container").masonry({
        itemSelector: ".blog_post",
        columnWidth: ".blog_post",
        gutter: 30,
      });
    }
  }
});

const parentImageContainer = document.querySelector("#full_image_prev")
const closeImageBoxBtn = document.querySelector(".close_image_box_btn");
const ImagesBoxes = document.querySelectorAll(".blog_post.trans_200");
const toggleBoxImageContainer = document.querySelector(".big_image_container");
const imageCaraouselContainer = document.querySelector(".big-image-box img");
const prev = document.querySelector(".gallery_prev_btn");
const next = document.querySelector(".gallery_next_btn");
// set current img
let currentIndex;
// cliked image src
let src;
// toggle =>  box-image-container to when click on any image then it will show
toggleBoxImageContainer.style.display = "none";
closeImageBoxBtn.style.display = "none";

// get clicked image index
ImagesBoxes.forEach((allImages, index) => {
  allImages.addEventListener("click", (e) => {
    toggleBoxImageContainer.style.display = "flex";
    closeImageBoxBtn.style.display = "flex";
    currentIndex = index;
    src = allImages.querySelector("img").src;
    imageShow();
  });
});

// function to show current index image
function imageShow() {
  imageCaraouselContainer.src = src;
}
// prev img
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + ImagesBoxes.length) % ImagesBoxes.length;
  src = ImagesBoxes[currentIndex].querySelector("img").src;
  imageShow();
});
// next img
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % ImagesBoxes.length;
  src = ImagesBoxes[currentIndex].querySelector("img").src;
  imageShow();
});
// click on close =>
closeImageBoxBtn.addEventListener("click", () => {
  toggleBoxImageContainer.style.display = "none";
  closeImageBoxBtn.style.display = "none";
});