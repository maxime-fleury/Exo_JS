const convert = document.getElementById("convert") ;
const test = document.getElementById("test");
const resS = document.getElementById("resultSeconds");
const resM = document.getElementById("resultMinutes");
const resH = document.getElementById("resultHours");
const resD = document.getElementById("resultDays");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;




function getNbDaysOffset(){
	let temp = document.getElementById("numberOfYears").value;
	temp = Math.floor(temp/4);//= nombre d'années bisextiles
	return temp;
}

setInterval(function() {
    let numberOfYears = document.getElementById("numberOfYears").value ;
    test.innerHTML = "<span style='color:blue;'>Unite : "+ document.getElementById("list").value + "</span>";
    let offset = getNbDaysOffset();//retirer le nombre d'année bisextiles

    days = numberOfYears*daysInYear - offset;
    resD.innerHTML = "Days = " + days;
    
    hours = days*hoursInDay; 
    resH.innerHTML = "Hours = " + hours;  
 
    mins = hours*minutesInHour;
    resM.innerHTML = "Minutes = " + mins;  

    sec = mins*secondsInMinute;
    resS.innerHTML = "Seconds = " + sec;  
},100);