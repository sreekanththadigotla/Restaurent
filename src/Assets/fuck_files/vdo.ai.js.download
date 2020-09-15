var vdo_analyticsID = 'UA-113932176-25';
(function(v, d, o, ai) {
    ai = d.createElement('script');
    ai.async = true;
    ai.src = o;
    d.head.appendChild(ai);
})(
    window,
    document,
    'https://www.googletagmanager.com/gtag/js?id=' + vdo_analyticsID
);

function vdo_analytics() {
    window.dataLayer.push(arguments);

}
(function () {
  window.dataLayer = window.dataLayer || [];
  vdo_analytics("js", new Date());
})();
vdo_analytics('event', 'loaded', { send_to: vdo_analyticsID, value:1, event_category: 'vdoaijs' });



try {


function insideSafeFrame() {
  try {
    if(top != self && window.innerWidth > 1) {
      return true;
    }
    if(top.location.href) {
      return false;
    }
  } catch (error) {
    return true;
  }
}



var w_vdo = (insideSafeFrame()) ? window : window.top,
d_vdo = w_vdo.document;
(function (window, document, deps, publisher) {
  var protocol = window.location.protocol;

  window.vdo_ai_ = window.vdo_ai_ || {};
  window.vdo_ai_.cmd = window.vdo_ai_.cmd || [];

  function loadStyleSheet(src, id) {
    var s = document.createElement('link');
    s.id = id;
    s.rel = "stylesheet";
    s.href = protocol + src;
    document.head.appendChild(s);
  }

    function loadPlayerDiv(id,parentId,iframeBurst=false) {
    if (!iframeBurst) {
      if(document.getElementById(id) == null) {
        var s = document.createElement('div');
        s.id = id;
      } else{
        var s = document.getElementById(id);
      }
       if (parentId != '') {
         var parentDiv = document.getElementById(parentId);
         parentDiv.style.display = "block";
         parentDiv.style.width = "100%";
         if (document.getElementById(parentId).parentNode.offsetWidth < 350){
           var margin = (352 - document.getElementById(parentId).parentNode.clientWidth )/2 ;
           parentDiv.style.marginLeft = '-'+margin + 'px';
         }
         parentDiv.appendChild(s);
       } else{
         document.body.appendChild(s);
       }

    } else{

      var parentIframes = top.document.querySelectorAll('iframe');
      for (var i=0; i < parentIframes.length; i++) {
        var el = parentIframes[i];
        if (el.contentWindow === self) {
            // here you can create an expandable ad
            var s = document.createElement('div');
            s.style.zIndex=111;
            s.style.margin = "0 auto";
            s.style.display = "block";
            s.style.position = "relative";
            s.width = 'fit-content';
            s.id = id;
            var googleDiv = el.parentNode;


            if (parentId != '') {
              var parentDiv = document.createElement('div');
              parentDiv.id = parentId;
              parentDiv.style.display = "block";
              parentDiv.style.width = "100%";
              parentDiv.appendChild(s);
              googleDiv.insertBefore(parentDiv, el);
            } else{
              googleDiv.insertBefore(s, el);
            }


            googleDiv.style.width = "auto";
            googleDiv.parentNode.style.width='auto';
            googleDiv.parentNode.style.height='auto';
        }
      }
    }
  }

  var playerLoaded = false;

  var checkTimer = setInterval(function() {
      if(window.initVdo && typeof window.google != 'undefined' && window.google.ima) {
	     callAdframe();
      }
  }, 1000);


  function callAdframe() {
    if(!playerLoaded) {
        playerLoaded = true;
        clearInterval(checkTimer);
        window.vdo_ai_.cmd.push(function() {
          window.initVdo({"desktop":{"show":true,"muted":true,"autoResize":false,"width":498,"height":280,"bottomMargin":10,"topMargin":10,"unitType":"floating","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":30000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":498,"smallHeight":280,"crossSize":17,"dispose_off":true,"bannerOff":false,"companionOff":false},"mobile":{"dispose_off":true,"show":true,"muted":true,"autoResize":false,"width":333,"height":250,"bottomMargin":10,"topMargin":10,"unitType":"floating","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":30000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":333,"smallHeight":250,"crossSize":17,"bannerOff":false,"companionOff":false},"bottomMargin":10,"showOnlyFirst":false,"cancelTimeout":10000,"id":"vdo_ai_3605","muted":true,"playsinline":true,"autoplay":true,"preload":true,"video_clickthrough_url":"","content_sources":["videos\/categories\/50MIN.m3u8","videos\/categories\/news2.m3u8","videos\/categories\/News.m3u8"],"pubId":"695","brandLogo":{"img":"","url":""},"coppa":false,"add_on_page_ready":"no","showLogo":true,"adbreak_offsets":[0,5,10,15,20,25],"show_on_ad":true,"domain":"wallpaperaccess.com","path":"a.vdo.ai\/core\/v-wallpaperaccess\/adframe.js","unitId":"_vdo_ads_player_ai_3126","tag_type":"other","close_after_first_ad_timer":0,"hls":false,"media_url":"\/\/s.vdo.ai\/","show_on":"ads-ad-started","canAutoplayCheck":true,"parent_div":"","bidders":{"0":{"bids":[{"bidder":"appnexus","params":{"placementId":19755952,"reserve":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"ix","params":{"siteId":"560521","size":[300,250],"video":{"mimes":["video\/mp4","video\/webm","application\/javascript"],"minduration":1,"maxduration":200,"linearity":1,"startdelay":0,"skip":1,"api":[1,2],"protocols":[1,2,3,4,5,6]}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-v-pre","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"kadfloor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19755975,"reserve":0.5}},{"bidder":"ix","params":{"siteId":"560524","size":[300,250]}},{"bidder":"ix","params":{"siteId":"560524","size":[336,280]}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-b-pre-2","kadfloor":"0"}}]}},"5":{"bids":[{"bidder":"appnexus","params":{"placementId":19755958,"reserve":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"ix","params":{"siteId":"560522","size":[300,250],"video":{"mimes":["video\/mp4","video\/webm","application\/javascript"],"minduration":1,"maxduration":200,"linearity":1,"startdelay":0,"skip":1,"api":[1,2],"protocols":[1,2,3,4,5,6]}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-v-mid1","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"kadfloor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19755976,"reserve":0.5}},{"bidder":"ix","params":{"siteId":"560525","size":[300,250]}},{"bidder":"ix","params":{"siteId":"560525","size":[336,280]}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-b-mid1-2","kadfloor":"0"}}]}},"10":{"bids":[{"bidder":"appnexus","params":{"placementId":19755963,"reserve":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"ix","params":{"siteId":"560523","size":[300,250],"video":{"mimes":["video\/mp4","video\/webm","application\/javascript"],"minduration":1,"maxduration":200,"linearity":1,"startdelay":0,"skip":1,"api":[1,2],"protocols":[1,2,3,4,5,6]}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-v-mid2","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"kadfloor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19755978,"reserve":0.5}},{"bidder":"ix","params":{"siteId":"560526","size":[300,250]}},{"bidder":"ix","params":{"siteId":"560526","size":[336,280]}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v-wallpaperaccess-b-mid2-2","kadfloor":"0"}}]}}},"waterfallTags":{"0":["googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-7094677798399606&slotname=v-wallpaperaccess-mid-1&ad_type=video&description_url=http%3A%2F%2Fwallpaperaccess.com&max_ad_duration=60000&videoad_start_delay=0&vpmute=1&vpa=1","vpaid.pubmatic.com\/ads\/video\/vadtag.html?adtype=13&pubId=159175&siteId=741187&adId=3114958&vadFmt=3&vapi=2&vminl=1&vmaxl=100&vh=PLAYER_HEIGHT&vw=PLAYER_WIDTH&placement=INSERT_PLACEMENT_TYPE&vtype=0&vpos=1&vskip=1&vskipdelay=5&vcom=0&vfmt=1+3+4+5+6+7+9+10+11+12&gdpr=&gdpr_consent=& "],"5":["googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-7094677798399606&slotname=v-wallpaperaccess-mid-2&ad_type=video&description_url=http%3A%2F%2Fwallpaperaccess.com&max_ad_duration=60000&videoad_start_delay=0&vpmute=1&vpa=1","vpaid.pubmatic.com\/ads\/video\/vadtag.html?adtype=13&pubId=159175&siteId=741187&adId=3114959&vadFmt=3&vapi=2&vminl=1&vmaxl=100&vh=PLAYER_HEIGHT&vw=PLAYER_WIDTH&placement=INSERT_PLACEMENT_TYPE&vtype=0&vpos=1&vskip=1&vskipdelay=5&vcom=0&vfmt=1+3+4+5+6+7+9+10+11+12&gdpr=&gdpr_consent=& "],"10":["googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-7094677798399606&slotname=v-wallpaperaccess-mid-3&ad_type=video&description_url=http%3A%2F%2Fwallpaperaccess.com&max_ad_duration=60000&videoad_start_delay=0&vpmute=1&vpa=1","vpaid.pubmatic.com\/ads\/video\/vadtag.html?adtype=13&pubId=159175&siteId=741187&adId=3114960&vadFmt=3&vapi=2&vminl=1&vmaxl=100&vh=PLAYER_HEIGHT&vw=PLAYER_WIDTH&placement=INSERT_PLACEMENT_TYPE&vtype=0&vpos=1&vskip=1&vskipdelay=5&vcom=0&vfmt=1+3+4+5+6+7+9+10+11+12&gdpr=&gdpr_consent=& "]},"adx":{"0":["b-v-wallpaperaccess-mid-1"],"5":["b-v-wallpaperaccess-mid-2"],"10":["b-v-wallpaperaccess-mid-3"],"15":["b-v-wallpaperaccess-mid-4"],"20":["b-v-wallpaperaccess-mid-5"],"25":["b-v-wallpaperaccess-mid-6"]},"style":"","s2s":false,"overflow_size":false,"handle_url_change":true});
        });

    }
  }

  function loadScriptSync(src, id) {
    return new Promise(function(resolve, reject) {
        
        if(src.indexOf('ima3.js') > 0 && document.querySelector('script[src*="imasdk.googleapis.com/js/sdkloader/ima3.js"]')) {
            resolve();
            return false;
        }
        var s = document.createElement("script");
        s.id = id;
        var existingScript = document.getElementById(id);
        
        s.async = true;
        s.src = protocol + src;
        document.body.appendChild(s);
        s.onload = resolve;
        s.onerror = reject;
    })
  }


  function inIframe(){try{return self!==top}catch(r){return!0}}var iframe_Burst=inIframe() ? insideSafeFrame() ? false : true : false;



  //#region full_dependencies
  if(typeof window.initVdo !== 'function') {  // Check for existing dependencies
          loadPlayerDiv('_vdo_ads_player_ai_3126','',iframe_Burst);
            Promise.all([
              loadScriptSync(deps + "dependencies_hbv4/vdo.min.js", "_vdo_ads_css_5654_"),
              loadScriptSync("//imasdk.googleapis.com/js/sdkloader/ima3.js", "_vdo_ads_sdk_5654_")
            ]).then(function() {
               callAdframe();
          })
        }
  //#endregion



})(w_vdo, d_vdo, '//a.vdo.ai/core/', 'v-wallpaperaccess');


} catch (e) {


    vdo_analytics('event', 'Err:' + (btoa(e.message).substr(0,10)), { send_to: vdo_analyticsID, value:1, event_category: 'VDOError' });


    var oReq = new XMLHttpRequest();
    oReq.open('get', '//a.vdo.ai/core/logger.php?msg=' + encodeURIComponent(e.stack)+ '&tag=v-wallpaperaccess&code='+btoa(e.message).substr(0,10) + '&url=' + encodeURIComponent(location.href)  + '&func=vdo.ai.js', true);
    oReq.send();
}