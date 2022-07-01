// Sliders
$(document).ready(function () {
  $(".hero").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  })

  $(".categories").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: `<div id="prev"><ion-icon name="arrow-back"></ion-icon></div>`,
    nextArrow: `<div id="next"><ion-icon name="arrow-forward"></ion-icon></div>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  })

  $(".menu").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: `<div id="prev2"><ion-icon name="arrow-back"></ion-icon></div>`,
    nextArrow: `<div id="next2"><ion-icon name="arrow-forward"></ion-icon></div>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  })

  $(".testimonial").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  })
})

// Menu Items
const menuItems = [...document.querySelectorAll(".menu-item")]
const firstItem = menuItems[0]
let currentSelectedItem = firstItem

menuItems.forEach((menuItem, index) => {
  menuItem.onclick = ({ target }) => {
    if (target !== currentSelectedItem) {
      target.classList.remove("hoverable")
      target.classList.add("selected")
      firstItem.style.setProperty("--value", `${index * 76}px`)
      currentSelectedItem.classList.remove("selected")
      currentSelectedItem.classList.add("hoverable")
      currentSelectedItem = target
    }
  }
})
// Navigation
const closeButton = document.querySelector(".close-button")
const expandButton = document.querySelector(".expand-button")
const navItems = document.querySelector(".nav-items")
const navItemList = [...navItems.querySelectorAll(".link")]
const navLinks = document.querySelector(".nav-links")

expandButton.onclick = () => {
  navItems.classList.remove("translate-x-full")
  navLinks.classList.remove("translate-y-[10rem]")
}

closeButton.onclick = () => {
  navItems.classList.add("translate-x-full")
  navLinks.classList.add("translate-y-[10rem]")
}

navItemList.forEach((item) => {
  item.onclick = () => closeButton.click()
})
