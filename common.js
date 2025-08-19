$(function(){
    // if (window.location.protocol !== 'https:') {
    //     window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
    // }
    function checkDevice () {
      var pathName = location.pathname
      if (navigator.userAgent.match(/iPhone|iPad|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null){
        location.href = "/m" + pathName;
      }
    }
    
    if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
      window.location = 'microsoft-edge:' + window.location;
      setTimeout(function() {
        window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
      }, 1);
    }
    (function(d) {
      var config = {
        kitId: 'yyo4knr',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    
    checkDevice()
    $('map').imageMapResize()

	$('.footer-top').on('click',function(){
		$.fn.fullpage.moveTo(1);
	})

	//TAB
    $('ul.tabs li').click(function () {
        var tab_area_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-area').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_area_id).addClass('current');
        AOS.refresh();
    });
    
    $('ul.tabs2 li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs2 li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        AOS.refresh();
    });
    
    $('ul.unit-tab li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.unit-tab li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        AOS.refresh();
    });
})