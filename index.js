
document.querySelector('.imageList').style.width = '1200px';
document.querySelector('.slider').style.width = '300px';
document.querySelector('.slider').style.height = '300px';

let slideIndex = 1
let slideArray = document.getElementsByClassName('sliderImage')

function imageSlider(n){
 
  console.log(slideArray)
  console.log(slideIndex)


  if (n > slideArray.length){
    slideIndex = 1
  }

   if (n < 1) {
    slideIndex = slideArray.length
  }

  for (let i = 0; i < slideArray.length; i++){

   slideArray[i].className = slideArray[i].className.replace('firstPosition', 'secondPosition');
   slideArray[i].className = slideArray[i].className.replace('secondPosition', 'secondPosition');
   slideArray[i].className = slideArray[i].className.replace('thirdPosition', 'secondPosition');
   slideArray[i].className = slideArray[i].className.replace('fourthPosition', 'secondPosition');
}

slideArray[slideIndex-1].className = slideArray[slideIndex-1].className.replace('secondPosition', 'firstPosition');

}

function reverseImageSlider(n){
 
  console.log(slideArray)
  console.log(slideIndex)


  if (n > slideArray.length){
    slideIndex = 1
  }

   if (n < 1) {
    slideIndex = slideArray.length
  }

  for (let i = 0; i < slideArray.length; i++){

   slideArray[i].className = slideArray[i].className.replace('firstPosition', 'fourthPosition');
   slideArray[i].className = slideArray[i].className.replace('secondPosition', 'fourthPosition');
   slideArray[i].className = slideArray[i].className.replace('thirdPosition', 'fourthPosition');
   slideArray[i].className = slideArray[i].className.replace('fourthPosition', 'fourthPosition');
}

  slideArray[slideIndex-1].className = slideArray[slideIndex-1].className.replace('fourthPosition', 'firstPosition');
 
}



document.getElementById('next').addEventListener('click', function(){   
  imageSlider(slideIndex += 1);
});

document.getElementById('prev').addEventListener('click', function(){   
  imageSlider(slideIndex -= 1);
});

document.onkeydown = function(n){

   if (n.keyCode == 39){   
    imageSlider(slideIndex += 1);
  }

  if (n.keyCode == 37){   
    reverseImageSlider(slideIndex -= 1);
  }
};

slideShowPaused = false

window.onload = function(){
    setInterval( function(){ 
           if (!slideShowPaused) { 
               imageSlider(slideIndex);
               slideIndex++ 
           }
     } , 1500);
}

document.getElementById('play').addEventListener('click', function(){
  slideShowPaused = false;
})

document.getElementById('stop').addEventListener('click', function(){
   slideShowPaused = true;
})

