let navbar=document.querySelector(".navbar");

document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle("active");
    searchbar.classList.remove(".active");
};
let searchbar=document.querySelector(".search-bar");
document.querySelector("#search-btn").onclick = () =>{
    navbar.classList.remove("active");
    searchbar.classList.toggle(".active");
};
 


document.addEventListener('DOMContentLoaded',function(){
    const section= document.querySelectorAll('.animated-section');

    function checkscroll(){
        section.forEach(section => {
            const rect=section.getBoundingClientRect();
            const isvisible=(rect.top <= window.innerHeight / 2);

            if(isvisible){
                section.classList.add('animate');
            }
        });
    }
    checkscroll();

    window.addEventListener('scroll',function(){
        checkscroll();
    });
})

