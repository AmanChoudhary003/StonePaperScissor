let result = document.querySelector(".main2");
result.style.display = "none";
let togglers = document.querySelectorAll(".togglers");
let toggler = document.querySelector(".toggler");

let imageHuman = document.querySelector(".imageHuman");
let imageComp = document.querySelector(".imageComp");
let textResult = document.querySelector(".resultText");
let scoreCount = document.querySelector(".scoreCount");



let image = ["stone.png", "scissor.png", "paper.png"];



winCount = 0;
toggler.addEventListener("click", function() {
    if (result.style.display == "none") {
        result.style.display = "block";

    } else {
        result.style.display = "none";
    }


})


togglers.forEach(function(x) {
    x.addEventListener("click", function() {
        let keyValue = x.value;


        if (result.style.display == "none") {
            result.style.display = "block";

        } else {
            result.style.display = "none";
        }


        switch (keyValue) {
            case "0":
                imageHuman.src = "media/" + image[keyValue];
                break;
            case "1":
                imageHuman.src = "media/" + image[keyValue];
                break;
            case "2":
                imageHuman.src = "media/" + image[keyValue];
                break;
        }



        let compChoice = Math.random();
        compChoice = Math.floor(compChoice * 3);
        imageComp.src = "media/" + image[compChoice];

        if (keyValue == compChoice) {
            textResult.innerHTML = "Draw";
        } else if (keyValue == 0 && compChoice == 1) {
            textResult.innerHTML = "You Win";
            winCount = winCount + 1;
            console.log(winCount);
        } else if (keyValue == 1 && compChoice == 2) {
            textResult.innerHTML = "You Win";
            winCount = winCount + 1;
            console.log(winCount);
        } else if (keyValue == 2 && compChoice == 0) {
            textResult.innerHTML = "You Win";
            winCount = winCount + 1;
            console.log(winCount);
        } else {
            textResult.innerHTML = "Computer Win";
        }

        scoreCount.innerHTML = winCount;


    })
})