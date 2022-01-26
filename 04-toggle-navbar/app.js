const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

btn.addEventListener("click", function () {
  // if(links.classList.contains('show-links')){
  //     links.classList.remove('show-links');
  // }else{
  //     links.classList.add('show-links');
  // }

  links.classList.toggle("show-links");
});
