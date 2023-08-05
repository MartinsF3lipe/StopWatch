const hourText = document.getElementById("hour");
const minutesText = document.getElementById("minutes");
const SegundsText = document.getElementById("segunds");
const buttonStart = document.getElementById("start");
const buttonPause = document.getElementById("pause");
const buttonReset = document.getElementById("reset");

let resetOn = false

let hour = 0
let minutes = 0
let segunds = 0
let miliSegunds = 0


function startTimer() {

    buttonStart.style = "display: none;"
    buttonPause.style = "display: block;"
    buttonReset.style = "opacity: 0.5;"

    resetOn = false

    let intervalId = setInterval(loadtimer, 100);

    function loadtimer() {

        miliSegunds = miliSegunds+100;

        if (miliSegunds >= 1000) {
            miliSegunds=0;
            segunds++;
        }

        if (segunds >= 60) {
            segunds=0;
            minutes++;

        }

        if (minutes >= 60) {
            minutes=0;
            hour++;
        }
    
        buttonPause.addEventListener("click", () => {
            buttonStart.style = "display: block;"
            buttonPause.style = "display: none;"
            buttonReset.style = "opacity: 1.0;"
            resetOn = true;
            clearInterval(intervalId);
        });
    
        buttonReset.addEventListener("click", () => {
            if (resetOn == true) {
                buttonStart.style = "display: block;"
                buttonPause.style = "display: none;"
                buttonReset.style = "opacity: 0.5;"
                clearInterval(intervalId);

                hour = 0
                minutes = 0
                segunds = 0
                miliSegunds = 0
                
                SegundsText.innerText = "00"
                minutesText.innerText = "00"
                hourText.innerText = "00"
        

            }
        });

        SegundsText.innerText = segunds.toString().padStart(2, '0');
        minutesText.innerText = minutes.toString().padStart(2, '0');
        hourText.innerText = hour.toString().padStart(2, '0');
        
    }
};

buttonStart.addEventListener("click", startTimer);