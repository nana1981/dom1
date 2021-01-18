const gallery = document.querySelector('#gallery')
const images = document.querySelectorAll('#gallery .photos img')

const prev = document.querySelector('#gallery .buttons .prev')
const next = document.querySelector('#gallery .buttons .next')

let i = 0 ;

prev.onclick=function(){
    console.log("prev clicked")
    images[i].className='';
    i++; 
    if(i === images.length){
        i=0;
    }
    images[i].className='show';
    
    }

next.onclick=function(){
console.log("next clicked")
images[i].className='';
i--; 
if(i < 0){
    i=5;
}
images[i].className='show';

}

