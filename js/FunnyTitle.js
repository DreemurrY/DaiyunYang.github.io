var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = 'QwQ怎么不看我了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = `啊你回来了!o(*////▽////*)q${OriginTitle}`;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });