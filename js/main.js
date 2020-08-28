

// Slider
let swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
        autoplay:{
      	delay: 2000,
      	disableOnInteraction:false
      },
    });

// Scroll Menu
const header = document.querySelector('header');

window.onscroll = ()=>{

let scrollTop = scrollY;

  if( scrollTop > 100){
    header.classList.add('sticky');
  } else {
     header.classList.remove('sticky');
  }
};


// Portfolio  Filter
const portfolioFilter = document.querySelector('.panel-btn');
const portfoliobtn = document.querySelectorAll('.panel-btn li a');

const galleryItems = document.querySelector('.gallery-items');
const galleryItem = galleryItems.children;

for( let i = 0; i < portfoliobtn.length; i++){

  portfoliobtn[i].addEventListener('click', function(){
 
     portfolioFilter.querySelector('.active').classList.remove('active');
     this.classList.add('active');


     let filterValue = portfoliobtn[i].getAttribute('data-filter');

for(let x = 0;  x < galleryItem.length; x++){

    if( filterValue == galleryItem[x].getAttribute('data-category')){

      galleryItem[x].classList.add('show');
      galleryItem[x].classList.remove('hide');

    } else 
    {
      galleryItem[x].classList.add('hide');
      galleryItem[x].classList.remove('show');
    }
    if( filterValue === "All"){

      galleryItem[x].classList.add('show');
      galleryItem[x].classList.remove('hide');
    }
};   
      
  });
};


// Lightbox

const lightBox = document.getElementById('lightbox');
const closeBtn = lightbox.querySelector('.lightbox-close');
const currentImg = lightbox.querySelector('.curent-image');
const captionCount = lightbox.querySelector('.caption-count');

const leftBtn = lightbox.querySelector('.left');
const rightBtn = lightbox.querySelector('.right');


const footer = document.querySelector('footer');
const galleryImgs = footer.querySelector('.galleryBox');
const galleryImg = galleryImgs.children;

let itemIndex = 0;

for(let k = 0; k < galleryImg.length; k++){

  galleryImg[k].addEventListener('click', function(){

    itemIndex = k;
    changePhoto();
    lightToggle();
  });
};



function changePhoto(){

  let curentImgSrc = galleryImg[itemIndex].querySelector('.img img').getAttribute('src');
  currentImg.src = curentImgSrc;
  captionCount.innerHTML = ( itemIndex + 1 ) + " of " + galleryImg.length;

};

function lightToggle(){

  lightBox.classList.toggle('open');
};

leftBtn.addEventListener('click', function(){

  if( itemIndex == 0){
    itemIndex = galleryImg.length - 1;
  } else 
  {
    itemIndex--;
  }
  changePhoto();

});


rightBtn.addEventListener('click', function(){

  if( itemIndex == galleryImg.length - 1 ){
    itemIndex =0;
  } else 
  {
    itemIndex++;
  }
  changePhoto();

});

closeBtn.addEventListener('click', ()=>{

  lightToggle();

});