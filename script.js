// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
function luu() {
  var hoten = document.getElementById('hoten');
  var vtlv = document.getElementById('vtlv');
  var luong = document.getElementById('luong');
  var gioitinhnam = document.getElementById('gioitinhnam');
  var gioitinhnu = document.getElementById('gioitinhnu');

  var show = document.getElementsByClassName('show');
  var hotenx = document.getElementById('hotenx');
  var vtlvx = document.getElementById('vtlvx');
  var luongx = document.getElementById('luongx');
  var gioitinhx = document.getElementById('gioitinhx');
  if (hoten.value.trim() == '') {
      alert('Họ và tên không được để trống !');
  } else if (hoten.value.trim().length < 8) {
      alert('Họ và tên không nhập ít hơn 8 ký tự');
  } else if (vtlv.value == '') {
      alert('email không được để trống');
  } else if (vtlv.value.length > 100) {
      alert('email không được nhập quá 100 ký tự');
  } else if (luong.value == '') {
      alert('Vui lòng nhập tuổi');
  } else if (luong.value < 0) {
      alert('Tuổi không để số âm');
  } else if (gioitinhnam.checked == false && gioitinhnu.checked == false) {
      alert('Vui lòng chọn giới tính');
  } else {
      document.getElementsByClassName('containerss')[0].style.backgroundColor = 'hsl(104, 52%, 92%)';
      show[0].style.display = 'block';
      hotenx.innerHTML = hoten.value;
      vtlvx.innerHTML = vtlv.value;
      luongx.innerHTML = luong.value;
      if (gioitinhnu.checked == false) {
          gioitinhx.innerHTML = gioitinhnam.value;
      } else {
          gioitinhx.innerHTML = gioitinhnu.value;
      }
  }
}
