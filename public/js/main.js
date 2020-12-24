const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const tempmin_max=document.getElementById('tempmin_max');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
  event.preventDefault();
  let cityVal=cityName.value;
  console.log(cityVal);
  if(cityVal==="")
  {
city_name.innerText=`Plz write the name before Search`;
datahide.classList.add('data_hide');
  }
  else{
      try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
        const response=await fetch(url);
        const data=await response.json();
        const arrdata=[data];
        console.log(arrdata);
        city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temp.innerText=arrdata[0].main.temp;
       // tempmin_max.innerText=`min ${arrdata[0].main.temp_min} | max ${arrdata[0].main.temp_max}`
        const tempMood=arrdata[0].weather[0].main;
          //condition to check sunny or cloudy
          if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
            cityVal=" ";
      }
catch{
     cityVal=" ";
     datahide.classList.add('data_hide');
    city_name.innerText=`please enter the proper city name `;
    
}
  }
    
}

submitBtn.addEventListener('click',getInfo);