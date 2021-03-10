
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
    $('[data-toggle="popover"]').popover()
});

// Time Spent: 2 Years 
                            
//                             C# is my go-to in terms of object-oriented languages. I have  experience with .NET/ASP.NET Framework, and 1 Year experience with .NET Core.
//                             At my last co-op job I made small scale applications for the company using a Vanilla JS / ASP.NET Web API tech stack, and I got exposure to MVC as well.
//                             During school I took 2 .NET Courses (.NET, and Advanced .NET respectively). I have experience with advanced concepts such as PLINQ, TAP, expression trees,
//                             serialization, as well as frameworks such as Identity and Entity
var croopy = "croopy"
 $('#c-sharp-content').data('content', `poop doop ${croopy}`);

$(".main").onepage_scroll({
    sectionContainer: "section",  
    easing: "ease",                   
    animationTime: 1200,             
    updateURL: false,                 
    beforeMove: function(index) {},   
    afterMove: function(index) {
        switch(index){
            case 2:      
                window.history.pushState('','About Me','#about-me')
                playAboutMeAnimation();
                break;
            case 3:
                window.history.pushState('','My Skills','#my-skills')
                playMySkillsAnimation();
                break;
            case 4:
                window.history.pushState('','My Works','#my-works')
                break;
            case 5:
                window.history.pushState('','Contact','#contact')
                break;
            default:
                window.history.pushState('','','#header')
                break;
        }
    },    
    loop: false,                      
    keyboard: true,                  
    responsiveFallback: 992,                                            
    direction: "vertical"              
});


$("#about-me-link").click((event)=>{$('.main').moveTo(2)})
$("#my-skills-link").click((event)=>{$('.main').moveTo(3)})
$("#my-works-link").click((event)=>{$('.main').moveTo(4)})
$("#contact-link").click((event)=>{$('.main').moveTo(5)})

function characterSpriteAnimation(sprite, animation, src, end, callback){
    var spriteContainer = sprite.parentElement;
    if(spriteContainer.classList.contains('d-none')){
        spriteContainer.classList.remove('d-none')
    }
    spriteContainer.classList.add(animation);
    sprite.src = src;
    spriteContainer.addEventListener('animationend', (event)=>{
        if(end){
            spriteContainer.style.display='none'
        }
        console.log('sprite animation ended');
        if(callback){
            callback();
        }
        
    });
}

var avatar = document.querySelector('#avatar');
avatar.addEventListener('click', (event)=>{
    playHeaderAnimation(event.target);
})
function playHeaderAnimation(avatar) { 
    var headerSprite = document.getElementById('header-sprite'); 
    avatar.classList.add('shake');
    headerSprite.src='./images/Pixel Art/Me-at-desk-scared.png'
    headerSprite.classList.remove('sprite-typing');
    avatar.addEventListener('animationend', ()=>{
        headerSprite.classList.add('spritesheet');
        characterSpriteAnimation(headerSprite, 'header-sprite-animation', './images/Pixel Art/me-run2-Sheet.png', true)
        avatar.classList.remove('shake');
        avatar.classList.add('roll-away');
        avatar.addEventListener('animationend', ()=>{
            avatar.style.display='none'
            console.log('avataranimation ended');
            var subtitle = document.getElementById('subtitle');
            fadeIn('subtitle-container');

        });
    });

}

function playAboutMeAnimation(){
    var aboutMeSprite = document.getElementById('about-me-sprite');
    aboutMeSprite.classList.add('spritesheet');
    characterSpriteAnimation(aboutMeSprite, 'about-me-right-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
        characterSpriteAnimation(aboutMeSprite, 'about-me-right-run', './images/Pixel Art/me-run2-Sheet.png', false, ()=>{
            characterSpriteAnimation(aboutMeSprite, 'about-me-right-jump', './images/Pixel Art/me-jump-Sheet.png', false, ()=>{
                characterSpriteAnimation(aboutMeSprite, 'about-me-center-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
                    characterSpriteAnimation(aboutMeSprite, 'about-me-center-run', './images/Pixel Art/me-run2-Sheet.png', false, ()=>{
                        characterSpriteAnimation(aboutMeSprite, 'about-me-left-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
                            aboutMeSprite.classList.remove('spritesheet')
                            characterSpriteAnimation(aboutMeSprite, 'about-me-pipe-fall', './images/Pixel Art/me-idle.png', true);
                        });

                        
                    });
                });
            });
        });
              
    });
    
}

function playMySkillsAnimation(){
    var mySkilsSprite = document.getElementById('my-skills-sprite');
    mySkilsSprite.classList.add('spritesheet');
    characterSpriteAnimation(mySkilsSprite, 'my-skills-plunge','./images/Pixel Art/me-scared-fall-Sheet.png', true, ()=>{

    });

}

function showInfoBox(infoBox, topBorder){
    var border = document.getElementById(topBorder)
    fadeIn(infoBox)  
    border.classList.add('d-none');
}
function fadeIn(element){
    var e = document.getElementById(element);
    e.classList.add('fade-in');
    e.classList.forEach(className =>{
        if(className.match(/d-[xlsmdg-]*none/g)){
            e.classList.remove(className);
        }
    })
}
