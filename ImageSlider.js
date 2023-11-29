var slides=document.querySelectorAll('.frame');

let c=0;
// for first collection
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

//for second collection
slides.forEach((slide2,index)=>{
    slide2.style.left=`${index*100}%`;
})

//for first collection
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${c*100}%)`;
            slide.style.transition=`transform 2s`;
        }
    )
}



//for first collection
function goPrev() {
    c--;
    slideImage();
   
}
function goNext() {
    c++;
    slideImage();
   
}

