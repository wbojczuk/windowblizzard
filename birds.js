"use strict";

const birdAnim = {

    setup: ()=>{

        const birds = document.querySelectorAll(".bird");
        birds.forEach((bird)=>{

            birdAnim.animBird(bird);

        });

    },

    animBird: (bird)=>{
        bird.style.top = `${rand(1,50)}%`;
        bird.style.left = "-20%";
        const animSpeed = rand(3,5);
        setTimeout(()=> {

        bird.style.transition = `${animSpeed}s left linear, ${animSpeed}s top linear`;
        bird.style.transform = `scale(${rand(0.3,0.5)})`;
        setTimeout(()=>{
            bird.style.left = "100%";
            bird.style.top = `${rand(0,20)}%`;
            setTimeout(()=>{
                bird.style.transition = "none";
                setTimeout(()=>{
                    birdAnim.animBird(bird);
                }, 100)
            }, ((animSpeed * 1000)));
        }, 100);
        

    }, Math.floor(rand(200, 5000)));
    }


};

function rand(min, max){
    return (Math.random() * (max - min) + min).toFixed(2);
}
let animType = Math.floor(rand(1,3));
const snowman = document.querySelector(".snowmanski");
setInterval(()=>{
    console.log(Math.floor(rand(1,3) ));
    animType = (animType == 1) ? 2 : 1;
    snowman.style.animation = "none";
    setTimeout(()=>{switch(animType){
        case 1:
            snowman.style.animation = "snowman_ski2 1.5s linear forwards";
        break;
        case 2:
            snowman.style.animation = "snowman_ski1 1.5s linear forwards";
        break;
    }}, 100)
}, Math.floor(rand(6000, 10000)))

setTimeout(()=>{
    lightning();
}, Math.floor(rand(10000, 15000)));

function lightning(){
    const container = document.querySelector(".container");
    const stormCloud = document.querySelector(".cloud3");
    const amount = rand(95, 105);
    container.style.filter = `brightness(${amount}%)`;
    stormCloud.style.opacity = "0.6";
    setTimeout(()=>{
        container.style.filter = "brightness(80%)";
        stormCloud.style.opacity = "1";
        setTimeout(()=>{
            container.style.filter = `brightness(${amount}%)`;
            stormCloud.style.opacity = "0.6";
            setTimeout(()=>{
                container.style.filter = `brightness(80%)`;
                stormCloud.style.opacity = "1";
                setTimeout(()=>{
                    lightning();
                }, Math.floor(rand(10000, 20000)));
            }, 100);
        }, 100);
    }, 200);
}

birdAnim.setup();