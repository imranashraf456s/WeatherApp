const btnSubmit = document.getElementById("btnSubmit");
const formData = document.getElementById("formData");
const day = document.getElementById("day");
const date = document.getElementById("date");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");

const dateInfo = new Date();

const gDay = dateInfo.getDay() + 1;
const gDate = dateInfo.getDate();
const gMonth = dateInfo.getMonth() + 1 ;
const gYear = dateInfo.getFullYear() ;

const setDate = () => {

    console.log(gMonth);

    switch(gMonth){
        case 1: date.innerHTML = `${gDate} Jan ${gYear}`;
        break;
        case 2: date.innerHTML = `${gDate} Feb ${gYear}`;
        break;
        case 3: date.innerHTML = `${gDate} Mar ${gYear}`;
        break;
        case 4: date.innerHTML = `${gDate} Apr ${gYear}`;
        break;
        case 5: date.innerHTML = `${gDate} May ${gYear}`;
        break;
        case 6: date.innerHTML = `${gDate} June ${gYear}`;
        break;
        case 7: date.innerHTML = `${gDate} July ${gYear}`;
        break;
        case 8: date.innerHTML = `${gDate} Aug ${gYear}`;
        break;
        case 9: date.innerHTML = `${gDate} Sep ${gYear}`;
        break;
        case 10: date.innerHTML = `${gDate} Oct ${gYear}`;
        break;
        case 11: date.innerHTML = `${gDate} Nov ${gYear}`;
        break;
        case 12: date.innerHTML = `${gDate} Dec ${gYear}`;
        break;
         default: date.innerHTML = "";
    }


    switch(gDay){
        
        case 1: day.innerHTML = "Sunday";
        break;
        case 2: day.innerHTML = "Monday";
        break;
        case 3: day.innerHTML = "Tuesday";
        break;
        case 4: day.innerHTML = "Thursday";
        break;
        case 5: day.innerHTML = "Friday";
        break;
        case 6: day.innerHTML = "Saturday";
        break;
         default: day.innerHTML = "";
    }
}

function checker() {
    cityName.innerHTML = "Enter A Valid City Name";
    day.innerHTML = "";
    date.innerHTML = "";
    temperature.innerHTML = "";

    console.log(" i am in if");
}

const getApiData = async (Event) => {
    Event.preventDefault();
    if(formData.value == ""){
        checker();
    }else{
        try {
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${formData.value}&appid=bfb99509e858ddd85bffdafdd69d24a8`;
            const apiJson = await fetch(apiUrl);
            const apiObject = await apiJson.json();
            const apiArray =  [apiObject];

            console.log(apiArray[0].sys.country);

            cityName.innerHTML = `${apiArray[0].name} , ${apiArray[0].sys.country}`;
            temperature.innerHTML = `${Math.round(apiArray[0].main.temp - 273) } &degC`;
            setDate();

            
        } catch (error) {

            checker();
        }
        
    }
}
btnSubmit.addEventListener('click' , getApiData);