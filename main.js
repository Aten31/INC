// change navebar styles on scroll 

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})


// show/hide faq answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faqs => {
    faqs.addEventListener('click',() =>{
        faqs.classList.toggle('open');
    
    //change icon
    const icon = faq.querySelector('.faq-icon i');
    if(icon.classname === 'uli uli-plus'){
        icon.classname = "uli uli-minus";
    }else {
        icon.classname ="uli uli-plus";
    }
    })


})