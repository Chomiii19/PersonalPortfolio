const clickHoldBtn = document.querySelector(".clickHold");
const introSection = document.querySelector(".intro-section");
const holdBtn = document.querySelector(".hold");
const box = document.querySelector(".box");
const cursor = document.querySelector(".cursor");
const noiseContainer = document.querySelector(".noise-container");
const intro = document.querySelector(".intro");
const introName = document.querySelector(".intro-name");
const introBar = document.querySelector(".intro-bar");
const moveElements = document.querySelectorAll(".move");
const portfolio = document.querySelector(".portfolio");
const subSection = document.querySelector(".sub-sections");
const aboutSection = document.querySelector(".about");
const stackSection = document.querySelector(".tech-stack");
const dotContainer = document.querySelector(".slides");
const contents = document.querySelector(".contents");
const dots = document.querySelectorAll(".dot");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let holdTimeout;
let isHolding = false;
let shrinkInterval;
let scale = 1.0;
const initialDimensions = Array.from(moveElements).map((element)=>({
        width: parseFloat(getComputedStyle(element).width),
        height: parseFloat(getComputedStyle(element).height)
    }));
const shrinkDimensions = Array.from(moveElements).map((element)=>({
        width: parseFloat(getComputedStyle(element).width) * 0.8,
        height: parseFloat(getComputedStyle(element).height) * 0.8
    }));
//////////////////////////////////////
function reduceSize() {
    scale = 0.9;
    let origWidth, origHeight;
    moveElements.forEach((div, index)=>{
        div.style.width = `${shrinkDimensions[index].width}px`;
        div.style.height = `${shrinkDimensions[index].height}px`;
    });
    shrinkInterval = setInterval(()=>{
        console.log("SHrinking");
        moveElements.forEach((div, index)=>{
            const { posX, posY } = initialPositions[index];
            const offsetX = (cursor.clientX - (posX + 50)) * 0.07;
            const offsetY = (cursor.clientY - (posY + 50)) * 0.07;
            div.style.transform = ` translate(${offsetX}px, ${offsetY}px)`;
        });
    }, 100);
}
function resetSize() {
    moveElements.forEach((div, index)=>{
        div.style.width = `${initialDimensions[index].width}px`;
        div.style.height = `${initialDimensions[index].height}px`;
    });
}
const initialPositions = Array.from(moveElements).map((element)=>({
        posX: element.offsetLeft,
        posY: element.offsetTop
    }));
noiseContainer.addEventListener("mousemove", (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    moveElements.forEach((element, index)=>{
        const { posX, posY } = initialPositions[index];
        const offsetX = (x - (posX + 50)) * 0.07;
        const offsetY = (y - (posY + 50)) * 0.07;
        element.style.transform = ` translate(${offsetX}px, ${offsetY}px)`;
    });
});
const generateRandomLetter = (intro)=>{
    intro.classList.add("appear");
    let intervals = 0;
    const interval = setInterval(()=>{
        intro.innerText = intro.dataset.value.split("").map((letter, i)=>{
            if (i < intervals) return intro.dataset.value[i];
            return letters[Math.floor(Math.random() * letters.length)];
        }).join("");
        if (intervals >= intro.dataset.value.length) {
            clearInterval(interval);
            if (intro.dataset.value !== "JOMARI BORINES") setTimeout(()=>{
                intro.dataset.value = "JOMARI BORINES";
                setTimeout(()=>{
                    clickHoldBtn.classList.add("appear");
                    generateRandomLetter(intro);
                }, 1000);
            }, 2000);
        }
        intervals += 1 / 3;
    }, 50);
    PowerGlitch.glitch(".glitch", {
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
            duration: 3000
        },
        glitchTimeSpan: {
            start: 0.5,
            end: 0.7
        },
        shake: {
            velocity: 15,
            amplitudeX: 0.2,
            amplitudeY: 0.2
        },
        slice: {
            count: 4,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true
        },
        pulse: false
    });
};
PowerGlitch.glitch(".glitch1", {
    timing: {
        duration: 5000
    }
});
PowerGlitch.glitch(".glitch2", {
    timing: {
        duration: 7000
    }
});
PowerGlitch.glitch(".glitch3", {
    timing: {
        duration: 2000
    }
});
setTimeout(()=>{
    let currentWidth = 0;
    const interval = setInterval(()=>{
        if (currentWidth >= introBar.dataset.value) {
            clearInterval(interval);
            setTimeout(()=>{
                intro.classList.add("appear");
                generateRandomLetter(intro);
            }, 1000);
        }
        currentWidth++;
        introBar.style.width = `${currentWidth}px`;
    }, 10);
}, 1500);
///////////////////////////////////////
document.addEventListener("mousedown", ()=>{
    clickHoldBtn.classList.remove("appear");
    box.classList.add("loading");
    holdBtn.classList.add("appear");
    reduceSize();
    holdTimeout = setTimeout(()=>{
        isHolding = true;
        introSection.style.display = "none";
        portfolio.style.display = "flex";
    }, 3020);
});
document.addEventListener("touchstart", ()=>{
    clickHoldBtn.classList.remove("appear");
    box.classList.add("loading");
    holdBtn.classList.add("appear");
    reduceSize();
    holdTimeout = setTimeout(()=>{
        isHolding = true;
        introSection.style.display = "none";
        portfolio.style.display = "flex";
    }, 3020);
});
document.addEventListener("mouseup", ()=>{
    clearTimeout(holdTimeout);
    clearInterval(shrinkInterval);
    resetSize();
    scale = 1;
    if (!isHolding) {
        clickHoldBtn.classList.add("appear");
        holdBtn.classList.remove("appear");
        box.classList.remove("loading");
    }
    isHolding = false;
});
document.addEventListener("touchend", ()=>{
    clearInterval(shrinkInterval);
    clearTimeout(holdTimeout);
    resetSize();
    if (!isHolding) {
        clickHoldBtn.classList.add("appear");
        holdBtn.classList.remove("appear");
        box.classList.remove("loading");
    }
    isHolding = false;
});
const boxCopy = document.querySelectorAll(".boxCopy");
box.addEventListener("mouseenter", ()=>{
    boxCopy.forEach((box)=>{
        box.style.transform = "rotate(0deg)";
    });
});
box.addEventListener("mouseleave", ()=>{
    let rotation = 0;
    boxCopy.forEach((box, index)=>{
        rotation = (index + 1) * 20;
        box.style.transform = `rotate(${rotation}deg)`;
    });
});
let rotation = 0;
boxCopy.forEach((box, index)=>{
    rotation = (index + 1) * 20;
    box.style.transform = `rotate(${rotation}deg)`;
});
const aboutMe = document.querySelector(".about-me");
const techContain = document.querySelector(".techContain");
const myProjects = document.querySelector(".myProjects");
const contactMe = document.querySelector(".contact-me");
const linebars = document.querySelectorAll(".linebar");
const topicText = document.querySelectorAll(".topic-text");
dotContainer.addEventListener("click", (e)=>{
    dots.forEach((dot)=>dot.classList.remove("active"));
    linebars.forEach((line, i)=>{
        line.style.width = "2rem";
        line.style.backgroundColor = "#848484";
        topicText[i].style.color = "#848484";
    });
    if (e.target.classList.contains("dot")) {
        const num = Number(e.target.dataset.value);
        e.target.classList.add("active");
        if (num === 0) {
            aboutMe.style.display = "flex";
            techContain.style.display = "none";
            myProjects.style.display = "none";
            contactMe.style.display = "none";
            linebars[0].style.width = "4rem";
            linebars[0].style.backgroundColor = "#fff";
            topicText[0].style.color = "#fff";
        } else if (num === 1) {
            aboutMe.style.display = "none";
            techContain.style.display = "flex";
            myProjects.style.display = "none";
            contactMe.style.display = "none";
            linebars[1].style.width = "4rem";
            linebars[1].style.backgroundColor = "#fff";
            topicText[1].style.color = "#fff";
        } else if (num === 2) {
            aboutMe.style.display = "none";
            techContain.style.display = "none";
            myProjects.style.display = "flex";
            contactMe.style.display = "none";
            linebars[2].style.width = "4rem";
            linebars[2].style.backgroundColor = "#fff";
            topicText[2].style.color = "#fff";
        } else if (num === 3) {
            aboutMe.style.display = "none";
            techContain.style.display = "none";
            myProjects.style.display = "none";
            contactMe.style.display = "flex";
            linebars[3].style.width = "4rem";
            linebars[3].style.backgroundColor = "#fff";
            topicText[3].style.color = "#fff";
        }
    }
});
const form = document.querySelector(".contact-container");
form.addEventListener("click", (e)=>{
    e.preventDefault();
    form.reset();
});
const audio = document.querySelector("audio");
const playButton = document.querySelector(".play-button");
let isMuted = false;
playButton.addEventListener("click", ()=>{
    if (!isMuted) {
        audio.muted = false;
        isMuted = true;
        playButton.textContent = "Mute Music";
        audio.play().catch((error)=>{
            console.error("Audio play failed:", error);
        });
    } else {
        audio.muted = true;
        isMuted = false;
        playButton.textContent = "Unmute Music";
    }
});

//# sourceMappingURL=index.672d4772.js.map
