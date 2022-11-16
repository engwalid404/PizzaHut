// Mobile Menu [show-hide]
//////////////////////////
let mobile_menu = document.querySelector(".mobile-menu");
let mobile_bars = document.querySelector("#mobile-bar");
let spn_overlay = document.querySelector(".overlay");
let menu_list_show = document.querySelector(".show-menu");
let mob_mega_men = document.querySelector("#m-mega-menu");

function mobileMenu() {
  if (mobile_bars !== null) {
    mobile_bars.addEventListener("click", function () {
      mobile_menu.classList.toggle("active");
      spn_overlay.classList.toggle("active");
      if (spn_overlay.classList.contains("active")) {
        spn_overlay.addEventListener("click", (e) => {
          e.target.classList.remove("active");
          mobile_menu.classList.remove("active");
        });
      }
    });
  }
}
function menuList() {
  if (menu_list_show !== null) {
    menu_list_show.addEventListener("click", (e) => {
      menu_list_show.classList.toggle("active");
      if (menu_list_show.classList.contains("active")) {
        mob_mega_men.classList.remove("d-none");
      } else {
        mob_mega_men.classList.add("d-none");
      }
    });
  }
}

mobileMenu();
menuList();
//////////////////////////
//////////////////////////
// Slider
let go_left = document.querySelector("#sld-left");
let go_right = document.querySelector("#sld-right");
let imgs_slider = document.querySelector("#imgs-slider");
let trans_value = 0;
let mouse_cond = false;
let curr_pos = 0;

function auto_sliding() {
  function slide_op() {
    trans_value -= 500;
    imgs_slider.style.transform = `translateX(${trans_value}px)`;
    if (trans_value < -1500) {
      trans_value = 0;
      imgs_slider.style.transform = `translateX(0px)`;
    }
  }
  function slide_stoppers() {
    document
      .querySelector(".home-slider .container")
      .addEventListener("mouseenter", (e) => {
        clearInterval(set_swip_hold);
      });
  }
  let set_swip_hold = setInterval(slide_op, 2500);
  document
    .querySelector(".home-slider .container")
    .addEventListener("mouseleave", () => {
      set_swip_hold = setInterval(slide_op, 2500);
    });
  slide_stoppers();
}

if (window.innerWidth < 992) {
  setInterval(() => {
    trans_value -= 356;
    imgs_slider.style.transform = `translateX(${trans_value}px)`;
    if (trans_value < -356) {
      trans_value = 0;
      imgs_slider.style.transform = `translateX(0px)`;
    }
  }, 1500);
} else {
  auto_sliding();
}

function mouseSwip() {
  imgs_slider.addEventListener("mousedown", (e) => {
    mouse_cond = true;
    curr_pos = e.screenX;
    imgs_slider.classList.remove("trans");
  });

  imgs_slider.addEventListener("mouseup", () => {
    mouse_cond = false;
    imgs_slider.classList.add("trans");
  });

  imgs_slider.addEventListener("mousemove", (e) => {
    if (mouse_cond) {
      if (trans_value < 0) {
        if (e.screenX > curr_pos) {
          trans_value += 50;
          imgs_slider.style.transform = `translateX(${trans_value}px)`;
        }
      }
      if (trans_value > -1500) {
        if (e.screenX < curr_pos) {
          trans_value -= 50;
          imgs_slider.style.transform = `translateX(${trans_value}px)`;
        }
      }
    }
    if (trans_value < -1500) {
      imgs_slider.style.transform = `translateX(${-1500 + 10}px)`;
    }
    if (trans_value > 0) {
      imgs_slider.style.transform = `translateX(0px)`;
    }
  });
}

function goArrows() {
  go_left.addEventListener("click", () => {
    if (trans_value < 0) {
      trans_value += 500;
      imgs_slider.style.transform = `translateX(${trans_value}px)`;
    }
    if (trans_value > 0) {
      imgs_slider.style.transform = `translateX(0px)`;
    }
  });
  go_right.addEventListener("click", () => {
    if (trans_value > -1500) {
      trans_value -= 500;
      imgs_slider.style.transform = `translateX(${trans_value}px)`;
    }
    if (trans_value < -1500) {
      imgs_slider.style.transform = `translateX(${-1500 + 10}px)`;
    }
  });
}

mouseSwip();
goArrows();

//////////////////////////
//////////////////////////
// Selects
let selects_div = document.querySelectorAll(".selects > div .main");

function popular_products_selects() {
  selects_div.forEach((div) => {
    div.addEventListener("click", function (e) {
      if (div.classList.contains("active")) {
        div.classList.remove("active");
      } else {
        selects_div.forEach((div) => {
          div.classList.remove("active");
        });
        div.classList.add("active");
      }
      check_selects_pos();
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("in-range-sel")) {
      selects_div.forEach((div) => div.classList.remove("active"));
    }
  });
  // Check Pos When Scroll
  window.addEventListener("scroll", function (e) {
    check_selects_pos();
  });
}

function check_selects_pos() {
  if (document.querySelector(".main.active + div") !== null) {
    if (window.scrollY <= 944) {
      document.querySelector(".main.active + div").style.bottom = "35px";
    } else {
      document.querySelector(".main.active + div").style.bottom = "";
    }
  }
}

popular_products_selects();

//////////////////////////
//////////////////////////
// Choose Countries
let choose_lang = document.querySelector(".choose-lang");
let counts_sections = document.querySelectorAll(".choose-lang .count");
let count_sec_show = document.querySelector("footer .footer-midd .lang a");
let choose_lang_close = document.querySelector(".choose-lang .close");

// Open Window
count_sec_show.addEventListener("click", function () {
  spn_overlay.classList.add("active");
  choose_lang.classList.add("active");
  document.body.style = `
    max-height: 100vh;
    overflow: hidden;
  `;
  spn_overlay.addEventListener("click", () => {
    spn_overlay.classList.remove("active");
    choose_lang.classList.remove("active");
  });
});

// Close window
choose_lang_close.addEventListener("click", function () {
  spn_overlay.classList.remove("active");
  choose_lang.classList.remove("active");
  document.body.style = "";
});

// Add active onclick
counts_sections.forEach((sec) => {
  sec.addEventListener("click", () => {
    counts_sections.forEach((sec) => sec.classList.remove("active"));
    sec.classList.add("active");
  });
});

//////////////////////////
//////////////////////////
// Show Sign In

let sign_click = document.querySelector(".account-show");
let create_click = document.querySelector(".account-show-2");
let acc_tabs = document.querySelectorAll(".tabs div");
let forms = document.querySelectorAll(".account form");
let account_comp = document.querySelector(".account");
let remeber_me = document.querySelector(".checks p");
let close_acc = document.querySelector(".close-acc");
let email_input = document.querySelector(".account form input[type='email']");

// Tabs

manage_account ();

function manage_account () {
  acc_tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      if (!e.target.classList.contains("active")) {
        acc_tabs.forEach((tab) => tab.classList.remove("active"));
        e.target.classList.add("active");
        if (e.target.classList.contains("sign-in")) {
          document.querySelectorAll(".sign-in-form").forEach((ele) => {
            ele.classList.remove("d-none");
          });
          forms[1].classList.add("d-none");
        }
        if (e.target.classList.contains("create-acc")) {
          document.querySelectorAll(".sign-in-form").forEach((ele) => {
            ele.classList.add("d-none");
          });
          forms[1].classList.remove("d-none");
        }
      }
    });
  });
  
  sign_click.addEventListener("click", function () {
    spn_overlay.classList.add("active");
    spn_overlay.addEventListener("click", function () {
      spn_overlay.classList.remove("active");
      account_comp.classList.remove("active");
    });
    account_comp.classList.add("active");
    //
    //
    if (acc_tabs[1].classList.contains("active")) {
      acc_tabs[1].classList.remove("active");
      acc_tabs[0].classList.add("active");
      document.querySelectorAll(".sign-in-form").forEach((ele) => {
        ele.classList.remove("d-none");
      });
      forms[1].classList.add("d-none");
    }
  });
  
  create_click.addEventListener("click", function () {
    spn_overlay.classList.add("active");
    spn_overlay.addEventListener("click", function () {
      spn_overlay.classList.remove("active");
      account_comp.classList.remove("active");
    });
    account_comp.classList.add("active");
    //
    if (acc_tabs[0].classList.contains("active")) {
      acc_tabs[0].classList.remove("active");
      acc_tabs[1].classList.add("active");
      document.querySelectorAll(".sign-in-form").forEach((ele) => {
        ele.classList.add("d-none");
      });
      forms[1].classList.remove("d-none");
    }
  });
  
  close_acc.addEventListener("click", function () {
    account_comp.classList.remove("active");
    spn_overlay.classList.remove("active");
  });
  
  remeber_me.addEventListener("click", function () {
    document.querySelector(".checks p i").classList.toggle("d-none");
  });
}

//////////////////////////
//////////////////////////
