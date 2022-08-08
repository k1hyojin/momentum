const clock = document.querySelector("#clock li:nth-of-type(2)");
const calendar = document.querySelector("#clock li:first-child");
const ckbutton  = document.querySelector("#clock li:last-child div");
const clockChange = ckbutton.querySelector("span");
let ck = true;
const date = new Date();
let hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2,"0");
let ampm;

function getDays(){
    const month  = date.getMonth() +1;
    const day = date.getDate();
    const year  = date.getFullYear();
    const yoil = date.getDay() -1;
    const yoilArray = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
    
    calendar.innerText = `${year} . ${month} . ${day} . ${yoilArray[yoil]}`;
}
function getClock(){
    if(ck===true){
        if(hours < 12){
            ampm = "AM";
            if(hours === 0){
                hours = 12
            }
        }else{
            ampm = "PM";
            hours -=12;
        }
        clock.innerText = `${ampm} ${String(hours).padStart(2,"0")} : ${minutes}`;
    }else{
        ckchange();
    }
}

function ckchange(){
    if(ck === true){
        ck = false;
        if(ampm === "PM"){
            hours += 12;
        }else if(hours === 0){
            hours -= 12;
        }
        clock.innerText = `${String(hours).padStart(2,"0")} : ${minutes}`;
        clockChange.animate([
            {transform:"translateX(0px)"},
            {transform:"translateX(30px)",easing:"ease-out"},
        ],{
            duration:200,
            direction:"normal",
            iterations:1,
            fill:"both"
        });
        ckbutton.animate({
            backgroundColor:"#f8e2f4",
        },
            {duration:200,
            iterations:1,
            fill:"forwards"
        });

    }else{
        ck = true;
        clockChange.animate([
            {transform:"translateX(30px)"},
            {transform:"translateX(0px)",easing:"ease-out"},
        ],{
            duration:200,
            direction:"normal",
            iterations:1,
            fill:"both"
        });
        ckbutton.animate({
            backgroundColor:"lavender",
        },
            {duration:200,
            iterations:1,
            fill:"forwards"
        });

        getClock();
    }
}

clockChange.addEventListener("click" , ckchange );
getClock();
getDays();
setInterval(getClock, 60000);