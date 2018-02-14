var date_time = new Date();
var hours = date_time.getHours();
var years = date_time.getFullYear();
var months = date_time.getMonth();
var days = date_time.getDate();
var birth = 1994;
var lifeSpan = 75;
var life_years = date_time.getFullYear() - birth;
var life_per = Math.floor(life_years/lifeSpan*100);
var years_number = lifeSpan - life_years;

var days_last = new Date(years, months, 0).getDate();
var month_per = days/days_last;

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

var months_show = monthArray[months];

function time(){
	var timeShow = document.getElementById('showtime');
	var timeRun = document.getElementById('age_run');
 	var date_time = new Date()


	var timerun_ms = date_time.getTime()

	if(hours<	10){
	 	hours="0"+hours;
	}
	var minutes = date_time.getMinutes();
	if(minutes<10){
	 	minutes="0"+minutes;
	}
	var t = timerun_ms/1000/60/60/24/365;
	var y = Math.floor(t) - (birth - 1970);
	var f = (t- (years - 1970))*365*24*60*60*10;
	var r = Math.floor(f);
	timeShow.innerHTML = hours + ':' + minutes;
	timeRun.innerHTML = y + '.' + r;
 	setTimeout(time,10);
}

$("#life_per").attr("data-percent",life_per);

$(".years").html(years);
$(".years_number").html(years_number);
$(".line_years").css("width",months/12*100 +"%");

$(".months").html(months_show);
$(".months_number").html(years_number*12);
$(".line_months").css("width",month_per*100 +"%");

$(".days").html(days + "th");
$(".days_number").html(years_number*12*30);
$(".line_days").css("width",hours/24*100 +"%");

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
