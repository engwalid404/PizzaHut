let scroll_row = document.querySelector(".row");
let scroll_value = 0;

function scroll_status() {
  let scroll_docu = function (event) {
    scroll_row.scroll({
      top: event.deltaY * 5,
    });
  };

  if (scroll_row !== null) {
    scroll_row.addEventListener("mouseleave", () => {
      document.addEventListener("wheel", scroll_docu);
    });
  
    scroll_row.addEventListener("mouseenter", (e) => {
      document.removeEventListener("wheel", scroll_docu);
    });
  }
}

scroll_status();

// Accounts Manager
let sign_click = document.querySelector(".account-show");
let create_click = document.querySelector(".account-show-2");
let acc_tabs = document.querySelectorAll(".tabs div");
let forms = document.querySelectorAll(".account form");
let account_comp = document.querySelector(".account");
let remeber_me = document.querySelector(".checks p");
let close_acc = document.querySelector(".close-acc");
let email_input = document.querySelector(".account form input[type='email']");
let spn_overlay = document.querySelector(".overlay");


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


