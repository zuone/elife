// Personal Info
var birth = 1994;
var lifeSpan = 75;

// Date Time
var date_time = new Date();
var minutes = date_time.getMinutes();
var hours = date_time.getHours();
var days = date_time.getDate();
var months = date_time.getMonth();
var years = date_time.getFullYear();
var monthArray = new Array(12);
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
var monthsEN = monthArray[months];

// Life
var age = years - birth;
var lifeRest = lifeSpan - age;
var lifePassed = Math.floor(age/lifeSpan*100);
var allDays = new Date(years, months, 0).getDate();
var month_per = days/allDays;

// Date And Age
function time(){
	var date_time = new Date();
	var minutes = date_time.getMinutes();
	var hours = date_time.getHours();
	var allTime = date_time.getTime();
	var timeShow = document.getElementById('showtime');
	var ageRun = document.getElementById('age_run');
	if(hours<	10){
	 	hours = "0" + hours;
	}
	if(minutes< 10){
	 	minutes = "0" + minutes;
	}
	timeShow.innerHTML = hours + ':' + minutes;

	var t = allTime/1000/60/60/24/365;
	var y = Math.floor(t) - (birth - 1970);
	var s = (years - 1970)*365*24*60*60*1000;
	var f = t - (years - 1970);
	var r = Math.floor(f*1000000000);
	ageRun.innerHTML = y + '.' + r;

 	setTimeout(time,50);
}

// Per Show
$("#life_per").attr("data-percent",lifePassed);

$(".years").html(years);
$(".years_number").html(lifeRest);
$(".line_years").css("width",months/12*100 +"%");

$(".months").html(monthsEN);
$(".months_number").html(lifeRest*12);
$(".line_months").css("width",month_per*100 +"%");

$(".days").html(days + "th");
$(".days_number").html(lifeRest*12*30);
$(".line_days").css("width",hours/24*100 +"%");


// Weather API
$.get('https://free-api.heweather.com/s6/weather/now?location=beijing&lang=en&key=c72a150369f644d39d367ddec7e7292e', function(data, textStatus) {
	console.log(data);
	var d = data.HeWeather6[0];
	var t = d.now.tmp;
	var c = d.now.cond_txt;
	$("#weather_tmp").html(t);
	$("#weather_cond").html(c);
});

// EasyPie Chart
var options = {
  scaleColor: false,
  trackColor: 'rgba(255,255,255,.05)',
  barColor: '#2B7CEC',
  lineWidth: 6,
  lineCap: 'round',
  size: 260,
  animate: 1000,
  onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
};

$('.chart').easyPieChart(options);

$('.re-init').click(function() {
  $('.chart').each(function(index, elem){
    var rand = Math.random() * 100;
    rand = Math.floor(rand);
    $(elem).data('easyPieChart').update(rand);
  });
})
