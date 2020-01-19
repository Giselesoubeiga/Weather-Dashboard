
$(document).ready(function(){


    var url = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=0946b5eb988b3caf2e24954f8caf2636"
   
        $.get(url,function(data,status){
            console.log(data.name)
            
            var currentDate = new Date(data.dt * 1000).toISOString(); //https://stackoverflow.com/questions/56070796/show-day-name-instead-of-number-from-open-weather-api-response

             var display =  data.name + " (" + moment(currentDate).format("MM/D/YYYY") + ")"
            $('#cityName').text(display )
      })


   
        
})