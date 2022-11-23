function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Показать больше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Показать меньше";
      moreText.style.display = "grid";
    }
}

function myFunction_mob() {
  var dots = document.getElementById("dots_mob");
  var moreText = document.getElementById("more_mob");
  var btnText = document.getElementById("myBtn_mob");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Показать меньше";
    moreText.style.display = "grid";
  }
}



function showPopUp() {
  let wrapper_99 = document.querySelector('.wrapper_99')
  wrapper_99.style.display = "flex"
}

function closePopUp() {
  let wrapper_99 = document.querySelector('.wrapper_99')
  wrapper_99.style.display = "none"
}




function tabs_one () {
  let tab_three = document.querySelector('.tabs_3')
  let tab_two = document.querySelector('.tabs_2')
  let tab_one = document.querySelector('.tabs_1')
  tab_one.style.display = "flex"
  tab_two.style.display = "none"
  tab_three.style.display = "none"
}

function tabs_two () {
  let tab_three = document.querySelector('.tabs_3')
  let tab_two = document.querySelector('.tabs_2')
  let tab_one = document.querySelector('.tabs_1')
  tab_one.style.display = "none"
  tab_two.style.display = "flex"
  tab_three.style.display = "none"
}

function tabs_three () {
  let tab_three = document.querySelector('.tabs_3')
  let tab_two = document.querySelector('.tabs_2')
  let tab_one = document.querySelector('.tabs_1')
  tab_one.style.display = "none"
  tab_two.style.display = "none"
  tab_three.style.display = "flex"
}





function next_right () {
  let nex_right = document.querySelector('.arrow_right')
  let nex_left = document.querySelector('.arrow_left')

  nex_right.style.display = "flex"
  nex_left.style.display = "none"
}

function next_left () {
  let nex_right = document.querySelector('.arrow_right')
  let nex_left = document.querySelector('.arrow_left')

  nex_right.style.display = "none"
  nex_left.style.display = "flex"
}





function mount () {
  let mount = document.querySelector('.moutingers')
  let servis = document.querySelector('.service_2')
  let servis_3 = document.querySelector('.service_3')


  if (mount.style.display === "none") {
    mount.style.display = "block"
    servis.style.display = "none"
    servis_3.style.display = "none"
  } else {
    mount.style.display = "none"
    servis.style.display = "flex"
    servis_3.style.display = "none"
  }

  // mount.style.display = "block"
  // servis.style.display = "none"
}

