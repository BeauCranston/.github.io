
$(".main").onepage_scroll({
    sectionContainer: "section",  
    easing: "ease",                   
    animationTime: 1200,             
    updateURL: false,                 
    beforeMove: function(index) {},   
    afterMove: function(index) {
        switch(index){
            case 2:
                playAboutMeAnimation();
                window.history.pushState('','About Me','#about-me')
                break;
            // case 3:
            //     window.location.replace('#my-skills')
            //     break;
            case 3:
                window.history.pushState('','My Works','#my-works')
                break;
            case 4:
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
var shouldScroll = false;
window.addEventListener('resize',()=>{
    const mq = window.matchMedia("(min-width:992px)");
    
    if(mq.matches == true && shouldScroll == true){
        console.log('match')
        window.scrollTo(0, 0);
        shouldScroll = false;
    }
    else{
        console.log('not match')
        shouldScroll = true;
    }
})



$("#about-me-link").click((event)=>{$('.main').moveTo(2)})
$("#my-works-link").click((event)=>{$('.main').moveTo(3)})
$("#contact-link").click((event)=>{$('.main').moveTo(4)})

function characterSpriteAnimation(sprite, animation, src, end, callback){
    var sprite = document.getElementById(sprite);
    var spriteContainer = sprite.parentElement;
    if(spriteContainer.classList.contains('d-none')){
        spriteContainer.classList.remove('d-none')
    }
    spriteContainer.classList.add(animation);
    sprite.classList.add('spritesheet');
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


// var destroyButton = document.getElementById('destroyButton');

// destroyButton.addEventListener('click', (event)=>{
//     playHeaderAnimation();
    
// })
var avatar = document.querySelector('#avatar');
avatar.addEventListener('click', (event)=>{
    var headerSprite = document.getElementById('header-sprite'); 
    avatar.classList.add('shake');
    headerSprite.src='./images/Pixel Art/Me-at-desk-scared.png'
    headerSprite.classList.remove('sprite-typing');
    avatar.addEventListener('animationend', ()=>{
        characterSpriteAnimation('header-sprite', 'header-sprite-animation', './images/Pixel Art/me-run2-Sheet.png', true)
        avatar.classList.remove('shake');
        avatar.classList.add('roll-away');
        avatar.addEventListener('animationend', ()=>{
            avatar.style.display='none'
            console.log('avataranimation ended');
            var subtitle = document.getElementById('subtitle');
            fadeIn('subtitle-container');

        });
    });
})
function playHeaderAnimation() { 
    

}

function playAboutMeAnimation(){
    characterSpriteAnimation('about-me-sprite', 'about-me-right-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
        showInfoBox('info-box-right', 'top-border-right');
        characterSpriteAnimation('about-me-sprite', 'about-me-right-run', './images/Pixel Art/me-run2-Sheet.png', false, ()=>{
            characterSpriteAnimation('about-me-sprite', 'about-me-right-jump', './images/Pixel Art/me-jump-Sheet.png', false, ()=>{
                characterSpriteAnimation('about-me-sprite', 'about-me-center-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
                    showInfoBox('info-box-center', 'top-border-center');
                    //fadeIn('line-1')
                    characterSpriteAnimation('about-me-sprite', 'about-me-center-run', './images/Pixel Art/me-run2-Sheet.png', false, ()=>{
                        characterSpriteAnimation('about-me-sprite', 'about-me-center-jump', './images/Pixel Art/me-jump-Sheet.png', false, ()=>{
                            characterSpriteAnimation('about-me-sprite', 'about-me-left-fall', './images/Pixel Art/me-fall-Sheet.png', false, ()=>{
                                showInfoBox('info-box-left', 'top-border-left');
                                //fadeIn('line-2')
                                characterSpriteAnimation('about-me-sprite', 'about-me-left-run', './images/Pixel Art/me-run2-Sheet.png', true)
                            });
                        });
                        
                    });
                });
            });
        });
              
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
