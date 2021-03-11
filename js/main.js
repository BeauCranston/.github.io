
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
    $('[data-toggle="popover"]').popover({
        html:true
    })
});

function setTechExperience(tech, time, projects, classes,overview ){
    $(`#${tech}-content`).data('content', 
        `
            <h4>Experience:</h4>
            <br>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Notable Projects:</strong> ${projects} </p>
            <p><strong>Classes Taken:</strong> ${classes}</p>
            <br>
            <p><strong>Overview:</strong></p>
            <p>
                ${overview}
            </p>
        `
    );
}
setTechExperience('c-sharp', '3 Years', 'Expression Trees, Signal R Chat App, Margin Report App for co-op, Serialization Class Library', `Intro to .NET, Advanced .NET` ,`C# is my go-to in terms of object-oriented languages.
At my last co-op job I made small scale applications for the company using a Vanilla JS / ASP.NET Web API tech stack, and I got exposure to MVC as well. I have experience with advanced concepts such as PLINQ, TAP, expression trees,
serialization, as well as frameworks such as Identity and Entity`);

setTechExperience('java', '3 years', `Black Jack Server-Client App, Parallel Mandelbrot renderer, "Optimal" Poker Bot, Optimal Yahtzee Bot, Optimal Battleship Bot`, 
'Intro to Java, Data Structures & Algorithms, Parallel Processing, Mathematics of Gaming',
`Java is the programming language I spent the most time in for school related projects since a lot of the courses required the use of Java 
(really wish it was c# instead). I learned about many advanced concepts with Java such as multithreading, socket IO, and dynamic programming to name a few.`);

setTechExperience('unity','1 Year', '2D Dodgeball', 'Game Dev Club, Udemy 2D Game Development, Udemy 3D Game Development',
`My interest in game design has been there since I was a young but I never actually started doing game design until I joined the Game Development Club at Mohawk.
The club brought me close with a mix of other developers as well as artists. I collaborated with a small team of artists to make 2D Dodgeball. I plan to make more 
games in the future. 
`
);

setTechExperience('nodejs', '1 Year', 'Band Together, Lifepoints Web Portal', 'Self Taught', 
`
I picked Node.Js for my backend technology because I saw that it was a modern stack that was very popular, and I wanted to give it a try. I got experience with it when
I worked in a team to build an admin portal for a startup company called "Lifepoints". After building the admin portal I got a good feel for Node.Js and decided I would 
write my capstone in Node.Js. Writing an all Javascript tech stack has enhanced my capabilities in Javascript by a substantial amount, and I had an overall great experience 
learning Node.js
`);

setTechExperience('react', '1 Year', 'Band Together', 'Self Taught', 
`Since my capstone was large in scale, I wanted to use a front-end framework to tackle the reuseability problems associated with a vanilla front-end tech stack.
I decided on React because it is much more lightweight than angular, I wanted to see what JSX was all about, and React is on top of the front-end framework market (even though vue is rising).
I learned the entire framework on one project alone becuase I would write a part of my project, find out that there is a better way of doing it and completely rewrite it.
I have a tendency to obsess over my code quality and make sure that it's not only efficient, but very easy to read and follow. I'm under the belief that readable code
is more important than documentation. The more readable your code is the less documentation you require to explain what's happening. Now that I'm used to coding in react
, and component based web programming in general I find it far superior than regular web programming.  
`
);

setTechExperience('javascript','3 Years', 'Lifepoints Web Portal, This Portfolio, Elsweyr Dice Fight, Band Together', 'Javascript & PHP, Front-end Web Programming, Software Eng. Project, Capstone, Udemy Web Dev Master Class',
`Javascript is definetly my strongest language. I have spent the msot time on it due to the fact that all front-end web programming stems from Javascript to some degree.
In my case however I have front-end and back-end Javascript experience. I understand asynchronous programming, ES 6 syntax, ajax, promises, and everything else associated 
with full stack web development. I can pick up new Javascript skills easily. For example this portfolio was my first time experimenting with animations and keyframes.`);

setTechExperience('html', '3 years', 'Lifepoints Web Portal, This Portfolio, Elsweyr Dice Fight, Band Together', 'Intro to HTML, Front-end Web Programming, PHP & Javascript, Software Eng. Project, Capstone, Udemy Web Dev Master Class', 
`I have built many microsites for assignments, as well as larger scale projects such as the Lifepoints admin portal, and Band Together. I understand the fundamentals of HTML
such as using HTML attributes to better leverage resuable Javascript funcationality as well as containerization of small sections of the website so that the website is ready to be styled with CSS/Bootstrap. 
I Have experience with playing audio files, embedding Youtube, HTML5 canvas, and many more content-based HTML5 features.  
`);

setTechExperience('css', '3 Years', 'Lifepoints Web Portal, This Portfolio, Elsweyr Dice Fight, Band Together', 'Intro to HTML, Front-end Web Programming, PHP & Javascript, Software Eng. Project, Capstone, Udemy Web Dev Master Class',
`I have a strong understanding of design principles such as spacing, contrast, color, visual hierarchy, and typography. I use CSS/SASS to ensure that I adhere to the design principles
mentioned before and modern techniques to get the job done. When I write CSS I make sure to reduce repetition as much as possible, and ensure that the CSS is readable. 
Lastly, I have a great understanding of the 'media' @ rule and use it to make my web apps responsive, and viable on all screen sizes. It took a lot of @Media queries to get
this portfolio to be responsive (especially the animations). 
`);

setTechExperience('bootstrap', '2 years', 'This Portfolio, Band Together', 'Front-end Web Programming', 
`I First Learned bootstrap back in 2019, and since then I have used it for many of my web projects. There is not always a need for the whole bootstrap framework so 
typically I just use the grid system for lightning fast grid layouts. This portfolio uses bootstrap, and is a big reason as to why the portfolio is responsive.
Right now you are reading from a Bootstrap Popover!
`);
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
    playHeaderAnimation(avatar);
    document.getElementById('click-me-box').style.display='none';

});
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
