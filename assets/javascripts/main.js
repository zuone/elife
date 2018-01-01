// Progress Line
$().ready(function() {
  $(window).on('load scroll resize', function() {
    var docHeight = $(document).height(); //获取页面的高度
    var windowPos = $(window).scrollTop(); //获取当前滚动条的位置
    var windowHeight = $(window).height(); //获取当前窗口的高度
    var windowWidth = $(window).width(); //获取当前窗口的宽度
    var linebgHeight = $('.line-bg').height(); //获取背景条的高度
    var completion = windowPos / (docHeight - windowHeight);
    if (docHeight <= windowHeight) {
      $('#line_progress').height(windowHeight);
    } else {
      $('#line_progress').height(completion * linebgHeight);
    }
  });
});

// Menu


$().ready(function($) {
  $(".btn_menu").on('click', function(e) {
    $(".menu").toggleClass('menu_open');
    e.preventDefault();
    $(this).toggleClass('btn_menu--toggled');
  });
  $('.toggle_all').on('click', function(e) {
    e.preventDefault();
    $('.btn_menu').toggleClass('btn_menu--toggled');
  });
});

// Instagram Image
var feed = new Instafeed({
  get: 'user',
  userId: 3253094037,
  accessToken: '3253094037.1677ed0.661863f9351c4c66bc4869c570eb9c44',
  target: 'instagram',
  resolution: 'standard_resolution',
  limit: '6',
  after: function() {
    var el = document.getElementById('instagram');
    if (el.classList)
      el.classList.add('show');
    else
      el.className += ' ' + 'show';
  }
});

window.onload = function() {
  feed.run();

};

// Fullpage
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['Main Page', 'About', 'Case_1', 'Case_2', 'Case_3', 'Blog', 'Story', 'Contact'],
    menu: '#menu',
    scrollingSpeed: 600,
    navigation: true,
    navigationPosition: 'right',
  });
});

// Back Top
$(document).ready(function() {
  $('#goToTop').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });
});

// China Time
$.each($('.js--time'), function() {
  var timezone  = $(this).data('timezone').toString(),
      container = $(this);
      window.setInterval(function() {
      container.html(moment().tz(timezone).format('LT'))
    }, 1000);
});
