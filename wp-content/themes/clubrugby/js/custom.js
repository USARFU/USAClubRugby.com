jQuery(function($){

// MAIN MENU FUNCTIONALITY

  var news = $('#menu-news-menu'),
      clubs = $('#menu-clubs-menu'),
      schedules = $('#menu-schedules-menu'),
      standings = $('#menu-standings-menu'),
      stats = $('#menu-statistics-menu'),
      champs = $('#menu-championships-menu'),
      social = $('#menu-social-hub-menu'),
      admin = $('#menu-administration-menu'),
      resources = $('#menu-resources'),
      about = $('#menu-about-menu');

  $('#site-menu .news > .dropdown').attr('id','menu-news-menu').addClass('button-group even-4');
  $('#site-menu .clubs > .dropdown').attr('id','menu-news-menu').addClass('button-group even-4');
  $('#site-menu .schedules > .dropdown').attr('id','menu-schedules-menu').addClass('button-group even-5');
  $('#site-menu .standings > .dropdown').attr('id','menu-standings-menu').addClass('button-group even-4');
  $('#site-menu .statistics > .dropdown').attr('id','menu-statistics-menu').addClass('button-group even-4');
  $('#site-menu .championships > .dropdown').attr('id','menu-championships-menu').addClass('button-group even-5');
  $('#site-menu .social > .dropdown').attr('id','menu-social-menu').addClass('button-group even-4');

  news.addClass('button-group even-4');
  admin.addClass('button-group even-4');
  resources.addClass('button-group even-5');
  about.addClass('button-group even-5');


  function resetMenus(k,v){
    if(v){
      v.addClass('dropdown').attr('data-dropdown-content');
      $('li.'+k).addClass('has-dropdown').append(v);
      $('li.'+k).children('a[title]').attr({'data-dropdown':'menu-'+k+'-menu'});
    }
  }
  resetMenus('news',news);
  resetMenus('clubs',clubs);
  resetMenus('schedules',schedules);
  resetMenus('standings',standings);
  resetMenus('statistics',stats);
  resetMenus('championships',champs);
  resetMenus('social',social);
  resetMenus('administration',admin);
  resetMenus('resources',resources);
  resetMenus('about',about);
  
  $('a[title="Resources"]').attr('data-dropdown','menu-resources');
  $('a[title="Social Hub"]').attr('data-dropdown','menu-social-hub-menu');

  $('ul#site-menu ul.menu.dropdown').css({'width':$('.top-bar-section').width()+'px'});
  $('ul#site-menu').children('li').children('.menu-image-title-after').append('<i class="fa fa-sort-desc"></i>');
  $('a.menu-image-title-after').css({'font-size':($('ul#site-menu > li.menu-item').css('font-size'))});
  $('li.menu-item').addClass('button');

  $('header').click(function(){$(this).toggleClass('active')});
  $('.has-dropdown').click(function(){
    $(this).toggleClass('open');
    $(this).children('a').toggleClass('hover');
    $(this).children('ul').toggleClass('active');
    $(this).siblings('.open').removeClass('open');
    $(this).siblings().children('.hover').removeClass('hover');
    $(this).siblings().children('.active').removeClass('active');
  });
  
  $('#content-wrapper').click(function(){
    $('.open').removeClass('open');
    $('#site-menu li').children('a').removeClass('hover');
    $('#site-menu li').children('ul').removeClass('active');
  });

  $(window).bind("scroll",function(){
    if($(window).scrollTop() = 107){
      $('#news-menu').addClass('fixed').css('position','fixed');
      var filter = $('dl.sub-nav');
      var sticky = $('<div class="contain-to-grid sticky"></div>');
      sticky.append(filter.attr('data-options','sticky_on: large'));
    };
    // sticky nav bar
    if($(window).scrollTop() >= 129){
      $('#desktop-site-navigation').css({position: 'fixed', top: '0px'});
      $('#sticky').css('display', 'block');
    }
    else {
      $('#desktop-site-navigation').css({position: 'static', top: '0px'});
      $('#sticky').css('display', 'none');
    }
  });


// FIRE WHEN DOCUMENT'S READY
  $(document).ready(function(){
    
    removeComma($('#about .no-bullet > li:last-child > span'));

    $('.main-navigation').fadeIn('slow');  

    if($('.home')){
// MASONRY HOME NEWS FEED
      var $container;
      function triggerMasonry() {
// don't proceed if $container has not been selected
        if ( !$container ) {
          return;
        }
// init Masonry
        $container.masonry({
          itemSelector: '.brick'
        });
      }
// trigger masonry on document ready
      $(function(){
        $container = $('#container');
        triggerMasonry();
      });
      $(function(){
        $container = $('#container').masonry();
        $container.imagesLoaded(function(){
          $container.masonry();
        });
      });
// trigger masonry when fonts have loaded
      Typekit.load({
        active: triggerMasonry,
        inactive: triggerMasonry
      });

    }

  });


  $('#mobile-menu-button').click(function(){
    $(this).addClass('active');
  });
  $('.exit-off-canvas').click(function(){
    $('#mobile-menu-button').removeClass('active');
  });

  $('#mobile-site-navigation #menu-item-70').remove();

  $('#mobile-header #mobile-site-menu .has-dropdown').addClass('has-submenu').removeClass('has-dropdown');
  $('#mobile-header .has-submenu .dropdown').addClass('left-submenu').removeClass('dropdown');
  $('#mobile-header .has-submenu a').click(function(){
    $('.left-submenu').toggleClass('move-right');
  });
  $('.left-submenu').append('<li class="back"><a href="#"><i class="fa fa-angle-double-left"></i>Back</a></li>');

  //$('.menu-item-divider, .menu-item-divider > a').css({'height':$('.before-divider').height()});

  $('.sub-nav > dd').click(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });

  $('#news-menu').width($('#content').width());

  $('.news > a').attr('data-dropdown','news-drop');
  $('.news > .dropdown').attr('id','news-drop');

  $('#news .searchandfilter > div > ul').addClass('stack-for-small button-group even-6');

  $('#about li div.text-center').css({'width':$(this).siblings('strong').innerWidth()+'px'});

  $('#masthead').fadeIn(1500);

// UTILITY FUNCTIONS
  function removeComma(el){
    var str = $(el).text();
    str = str.slice(0,str.length-1);
    $(el).text(str);
  }

// RESPONSIVE CONFIGS
  $(window).resize(function(){
    if($(window).width() > 892) {
// Home Page News Tweaks
      if($('#site-menu > .menu-item > a').innerWidth() >= 83){
        $('#site-menu > .menu-item > a').css('font-size','0.9rem');
      }
      if($('.home h4.news-item-metadata').innerWidth() >= 270){
        $('.home h4.news-item-metadata').css('font-size','1.25rem');
      }
   
    } else {
// smaller
      $('.rsGCaption > .caption > h1.columns:first-child').fitText(2);
      $('#featured-matches > h4').fitText(1.5);
      $('#latest-news-headlines > h4').fitText(1.5);
      $('footer#footer > .column > p').fitText(2, {minFontSize:'17px', maxFontSize:'17px'});
    }
  }).resize();
  
});