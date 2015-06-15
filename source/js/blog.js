function loadSwiftype(swiftype_key){
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
    (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
    e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
    })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

    _st('install', swiftype_key,'2.0.0');
}

function loadDuoshuo(){
  $('.ds-thread').html("");
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0]
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
}

$(document).ready(function() {
  // Ajax load swiftype
  var swiftype_key = $('#swiftype-key').val();
  var swiftypeTimeoutId = setTimeout(function(){
    loadSwiftype(swiftype_key);
    $(".st-default-search-input").unbind('click');
  }, 1000);
  $(".st-default-search-input").one('click', function(){
    loadSwiftype(swiftype_key);
    clearTimeout(swiftypeTimeoutId);
  })

  // Ajax load DuoShuo Comment
  var duoshuoTimeoutId = setTimeout(function(){
    if ($('.ds-thread a').length > 0) {loadDuoshuo();};
    $('.ds-thread a').unbind('click');
  }, 5000)
  $('.ds-thread a').one('click', function(){
    loadDuoshuo();
    clearTimeout(duoshuoTimeoutId);
  })

  // Highlight code
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
