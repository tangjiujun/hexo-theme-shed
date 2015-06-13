$(document).ready(function() {
  // Load swiftype
  $(".st-default-search-input").one('click', function(){
    (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
    (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
    e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
    })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

    _st('install','swiftype_key','2.0.0');
  })

  // Load Comment
  $('.ds-thread a').one('click', function(){
    $('.ds-thread').html("");
    (function() {
      var ds = document.createElement('script');
      ds.type = 'text/javascript';ds.async = true;
      ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0]
       || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
  })

  // Highlight code
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
