
$(".main").onepage_scroll({
    sectionContainer: "section",  
    easing: "ease",                   
    animationTime: 1200,             
    updateURL: false,                 
    beforeMove: function(index) {},   
    afterMove: function(index) {
        if(index === 2){
            playAboutMeAnimation();
        }
    },    
    loop: false,                      
    keyboard: true,                  
    responsiveFallback: false,                                            
    direction: "vertical"              
});

$("#about-me-link").click((event)=>{$('.main').moveTo(2)})
$("#my-works-link").click((event)=>{$('.main').moveTo(3)})
$("#contact-link").click((event)=>{$('.main').moveTo(4)})

function characterSpriteAnimation(sprite, animation, src, callback){
    var sprite = document.getElementById(sprite);
    var spriteContainer = sprite.parentElement;
    spriteContainer.classList.add(animation);
    sprite.classList.add('spritesheet');
    sprite.src = src;
    spriteContainer.addEventListener('animationend', (event)=>{
        spriteContainer.style.display='none'
        console.log('sprite animation ended');
        if(callback){
            callback();
        }
        
    });
}


var destroyButton = document.getElementById('destroyButton');

destroyButton.addEventListener('click', (event)=>{
    playHeaderAnimation();
    
})

function playHeaderAnimation() {
    var triangle = document.querySelector(".triangle");
    triangle.classList.add('shake');
    triangle.addEventListener('animationend', ()=>{
        triangle.style.display = 'none';
        var avatar = document.querySelector('.avatar'); 
        characterSpriteAnimation('header-sprite', 'header-sprite-animation', './images/Pixel Art/me-run2-Sheet.png')
        avatar.classList.remove('spin-y');
        avatar.classList.add('roll-away');
        avatar.addEventListener('animationend', ()=>{
            avatar.style.display='none'
            console.log('avataranimation ended');
            var subtitle = document.getElementById('subtitle');
            var subtitleContainer = subtitle.parentElement.parentElement;
            subtitleContainer.classList.remove('d-none');
            subtitleContainer.classList.add('fade-in');
    
        });
    })
}

function playAboutMeAnimation(){
    characterSpriteAnimation('about-me-sprite', 'about-me-animation', './images/Pixel Art/me-run2-Sheet.png');
}