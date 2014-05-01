
$(function(){

    var getJsonFromUrl = function () {
        var query = location.search.substr(1);
        var data = query.split("&");
        var result = {};
        for (var i=0; i<data.length; i++) {
            var item = data[i].split("=");
            result[item[0]] = decodeURIComponent( item[1] );
        }
            return result;
    }

    var options = getJsonFromUrl(),
        demoURL = "http://github.com/christopherdebeer/github-embed/blob/master/README.md"
    
    var githubURL = options.url || demoURL,
        height = options.height || 'auto',
        ext = githubURL.match( /.(\w+)$/ )[1].toUpperCase(),
        rawURL = githubURL.replace( /(https?:\/\/github\.com\/)/, '//rawgit.com/').replace('/blob/', '/')

    var $footer = $('<p class="footer" />').html('<span class="left">Check out the <a target="_blank" href="' + githubURL + '">source on github.com</a></span><span class="right"><a href="http://github.com/christopherdebeer/github-embed">github-embed</a> is not allifiated with github.com</span>'),
        $placeholder = $('<div class="placeholder">Loading <a href="#failed_to_parse_url">content</a> from GitHub...</div>'),
        $el = $('<div class="github-embed"/>')
        $('body').append( $el )

    $placeholder.attr( 'href', githubURL )
    $el.append( $placeholder )

    $.get( rawURL, function(data) {
        $placeholder.remove()
        if (ext === 'MD' || ext === 'MARKDOWN') {
            $el.append( $('<div class="markdown"/>').html( markdown.toHTML( data ) ) )
            $el.find( 'pre' ).each(function(i,el){ hljs.highlightBlock( el ) })
        } else {
            $code = $("<code><pre>" + data + "</pre></code>")
            $el.append( $code )
            hljs.highlightBlock( $code[0] )
        }
        $el.append( $footer )
    })  
    
})