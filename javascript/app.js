
//(all the selectors)

//grabing the navbar from the html
let nav=document.querySelector('nav');


//grabing the landing page
let landing = document.querySelector('.landing-page');
let landing2= document.querySelector('.landing-page2');


//ham button
let navItems = document.querySelector('.nav-items');


//all the functions

//this function is for the stickey menu
let sticky_menu = () =>{

    if(window.scrollY > landing.offsetTop){
        document.body.style.paddingTop=nav.offsetHeight+'px';
        document.body.classList.add('stick-nav');
        
    }else{
        document.body.style.paddingTop= 0;
        document.body.classList.remove('stick-nav');
       
    }
}


//this is for the parellex effect

let scroll= () => {
   
    // landing2.style.transform='translateY('+   - scrollY * 0.2 +'px)';
    // landing2.style.marginBottom= - scrollY *0.2+'px';
}


//all the eventlistener
window.addEventListener('scroll', sticky_menu );
window.addEventListener('scroll',scroll);
