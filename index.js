//add dripping waterdrop

//interaction 1:
//creating a Div that is represented by variable dropBottom
var button = document.getElementById('p');
//make variable button listen to mouse hover, if mouse hovered over the button, then do function Drip
button.addEventListener('mouseover', Drip);


  function Drip() {
    //loop that create 5 drops at the same time
    for (var i = 0; i < 5; i++) {
      //creating a Div that is represented by variable dropBottom
      var dropBottom = document.createElement('div');
      //add class 'cir-bottom'to this div
      dropBottom.className = 'cir-bottom';
      //get the element that has the id of 'container'
      var container = document.getElementById('container');
      //assign iteration number as id for variable dropTop
      dropBottom.id = i;
      //attach the cir-bottom div to the container div
      container.appendChild(dropBottom);
      //define that the vertical distance between each bottom part of the drop is 150px
      dropBottom.style.top = 530 + 150 * i + 'px';

      //creating a Div that is represented by variable dropTop
      var dropTop = document.createElement('div');
      //add class 'tri-top'to this div
      dropTop.classList.add('tri-top');
      //get the element that has the id of 'container'
      var container = document.getElementById('container');
      //assign iteration number as id for variable dropTop
      dropTop.id = i;
      //attach the tri-top div to the container div
      container.appendChild(dropTop);
      //define that the vertical distance between each top part of the drop is 150px
      dropTop.style.top = 500 + 150 * i + 'px';

      //for every even number of drops, the color of it will be blue
      if (i % 2 == 0 && i < 5) {
        dropBottom.style.backgroundColor = '#67aceb';
        dropTop.style.borderBottom = '50px solid #67aceb';
      }
    }
  }



//interaction 2
var cirTop= document.getElementById('cir-top');
cirTop.addEventListener('click',DownOrBlue);
cirTop.addEventListener('mouseup',BacktoPos);

function DownOrBlue(){
  var random=Math.floor(Math.random()*10);
  console.log(Math.floor(Math.random()*10));
  if (random<5) {
    cirTop.style.backgroundColor='#67aceb';
    cirTop.className='glow';
  }
  else {
    cirTop.className='down';
  }
}

function BacktoPos(){
  cirTop.style.backgroundColor='white';
  cirTop.className-='glow';
}

//interaction 3
