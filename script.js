$(document).ready(function(){
    $('#female-in').click(function(){
        $('#female').addClass('checked').siblings().removeClass('checked');       
    });
    $('#male-in').click(function(){
        $('#male').addClass('checked').siblings().removeClass('checked');       
    });
    $('#non-binary-in').click(function(){
        $('#non-binary').addClass('checked').siblings().removeClass('checked');       
    });
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var emojiOld = document.getElementById("year-img");
var valueX = slider.value;
output.innerHTML = valueX;

slider.oninput = function() {
  if(this.value <= 2020 && this.value > 2014){
    emojiOld.innerHTML = "<img src='assets/emoji/0-5.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 2014 && this.value > 2009){
    emojiOld.innerHTML = "<img src='assets/emoji/6-10.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 2009 && this.value > 2003){
    emojiOld.innerHTML = "<img src='assets/emoji/11-16.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 2003 && this.value > 1994){
    emojiOld.innerHTML = "<img src='assets/emoji/17-25.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 1994 && this.value > 1988){
    emojiOld.innerHTML = "<img src='assets/emoji/26-31.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 1988 && this.value > 1979){
    emojiOld.innerHTML = "<img src='assets/emoji/32-40.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  else if(this.value <= 1979 && this.value >= 1970){
    emojiOld.innerHTML = "<img src='assets/emoji/41-50.png' class='emojiYear' style='height: 200px; margin: 0px auto;'>";
  }
  output.innerHTML = this.value;
}








var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

