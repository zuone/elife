function time(){
	hoursShow = document.getElementById('showtime_hours');
	minutesShow = document.getElementById('showtime_minutes');
 	var date_time = new Date()
	var hours = date_time.getHours();
	if(hours<10){
	 	hours="0"+hours;
	}
	var minutes = date_time.getMinutes();
	if(minutes<10){
	 	minutes="0"+minutes;
	}
 	hoursShow.innerHTML = hours;
	minutesShow.innerHTML = minutes;
 	setTimeout(time,1000);
}

$.get('https://free-api.heweather.com/s6/weather/now?location=beijing&lang=en&key=c72a150369f644d39d367ddec7e7292e', function(data, textStatus) {
	console.log(data);
	var d = data.HeWeather6[0];
	var t = d.now.tmp;
	var c = d.now.cond_txt;
	$("#weather_tmp").html(t);
	$("#weather_cond").html(c);
});

$.get("https://talaikis.com/api/quotes/random/", function(data) {
	console.log(data);
  $("#quotes").html(data.quote);
	$("#quotes_author").html(data.author);
});
