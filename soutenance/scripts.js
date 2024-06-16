
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//- Page title
const pageName = window.location.pathname.split("/").pop(-1).replace(".html", "");
if (pageName.length > 0) { document.title = pageName + " - " + document.title; }

//- Fill empty a links with text
const el_a = document.querySelectorAll("a");
if (el_a) {
    el_a.forEach((a_link) => {
        if (!a_link.innerText.length > 0) {
            a_link.innerText = a_link.getAttribute("href");
        }
    })
}

//- Videos setup
const el_videos = document.querySelectorAll("video");
if (el_videos) {
    el_videos.forEach((vid) => {
        vid.autoplay = true,
        vid.muted = true;
        vid.loop = true;
    })
}

//- dys swirl
const el_dysSwirl = document.querySelectorAll(".dys-swirl");
if (el_dysSwirl) {
    el_dysSwirl.forEach((swirlGroup) => {
        swirlGroup.addEventListener("mousemove", (e) => {
            swirlGroup.querySelector("p:last-child").style.transformOrigin = e.layerX +"px "+ e.layerY +"px";
        })
        swirlGroup.addEventListener("mouseleave", (e) => {
            swirlGroup.querySelector("p:last-child").style.transformOrigin = "center";
        })
    })
}

//- dys holes
let dysHolesTxtInterval, dysHolesTxtInterval_stop = false;
const el_dysHoles = document.querySelectorAll(".dys-holes");
if (el_dysHoles) {
    el_dysHoles.forEach((holesTxtGroup) => {
        const textToHoles = holesTxtGroup.querySelector("p").innerText,
              textWordsNb = textToHoles.split(" ").length,
              textWordsNew = "<span>"+ textToHoles.replaceAll(" ", "</span><span>") +"</span>";

        holesTxtGroup.querySelector("p").innerHTML = textWordsNew;

        function pickRandomWords(wordsMax) {
            let wordsIndexArr = [];
            for (let index = 0; index < 10; index++) {
                wordsIndexArr.push(randomIntFromInterval(1, wordsMax));
            }
            return wordsIndexArr;
        }

        dysHolesTxtInterval = setInterval(() => {
            pickRandomWords(textWordsNb).forEach((wordIndex) => {
                const correspondingWord = holesTxtGroup.querySelector("span:nth-child("+ wordIndex +")");

                setTimeout(() => {
                    correspondingWord.classList.add("hole");
                    setTimeout(() => {
                        correspondingWord.classList.remove("hole");
                    }, 1000 + randomIntFromInterval(0, 4000));
                }, 0 + randomIntFromInterval(0, 3000));
            });

            if (dysHolesTxtInterval_stop) {
                clearInterval(dysHolesTxtInterval);
            }
        }, 2000);
    })
}