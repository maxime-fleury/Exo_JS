const resS = document.getElementById("resultSeconds");

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
    let UniteInput = document.getElementById("list").value;
    let UniteOutput = document.getElementById("list2").value;
    let realRes = 0;

    switch(UniteInput){
        case "Year": switch(UniteOutput){
		 case "Year" : realRes = numberOfYears; break;
		 case "Day"  : realRes = daysInYear*numberOfYears; break;
		 case "Hour" : realRes = daysInYear*numberOfYears*hoursInDay; break;
		 case "Minute" : realRes = daysInYear*numberOfYears*hoursInDay*minutesInHour; break;
		 case "Second" : realRes = daysInYear*numberOfYears*hoursInDay*minutesInHour*secondsInMinute; break;
		}; break;
	case "Day": switch(UniteOutput){
		 case "Year" : realRes = numberOfYears/daysInYear; break;
		 case "Day"  : realRes = numberOfYears; break;
		 case "Hour" : realRes = numberOfYears*hoursInDay; break;
		 case "Minute" : realRes = numberOfYears*hoursInDay*minutesInHour; break;
		 case "Second" : realRes = numberOfYears*hoursInDay*minutesInHour*secondsInMinute; break;
		}; break;
	case "Hour": switch(UniteOutput){
		 case "Year" : realRes = numberOfYears/(daysInYear*hoursInDay); break;
		 case "Day"  : realRes = numberOfYears/hoursInDay; break;
		 case "Hour" : realRes = numberOfYears; break;
		 case "Minute" : realRes = numberOfYears*minutesInHour; break;
		 case "Second" : realRes = numberOfYears*minutesInHour*secondsInMinute; break;
		}; break;
	case "Minute": switch(UniteOutput){
		 case "Year" : realRes = numberOfYears/(daysInYear*hoursInDay*minutesInHour); break;
		 case "Day"  : realRes = numberOfYears/(hoursInDay*minutesInHour); break;
		 case "Hour" : realRes = numberOfYears/minutesInHour; break;
		 case "Minute" : realRes = numberOfYears; break;
		 case "Second" : realRes = numberOfYears*secondsInMinute; break;
		}; break;
	case "Second": switch(UniteOutput){
		 case "Year" : realRes = numberOfYears/(daysInYear*hoursInDay*minutesInHour*secondsInMinute); break;
		 case "Day"  : realRes = numberOfYears/(hoursInDay*minutesInHour*secondsInMinute); break;
		 case "Hour" : realRes = numberOfYears/(minutesInHour*secondsInMinute); break;
		 case "Minute" : realRes = numberOfYears/secondsInMinute; break;
		 case "Second" : realRes = numberOfYears; break;
		}; break;
    }
       resS.innerHTML = UniteInput + ": " + numberOfYears + " => " + UniteOutput + ": " + realRes;

},100);