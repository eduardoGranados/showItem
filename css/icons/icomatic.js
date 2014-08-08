var IcomaticUtils = (function() {
return {
fallbacks: [{ from: 'roundedrectangleoutline', 'to': '\ue044' },{ from: 'rectangleoutline', 'to': '\ue041' },{ from: 'circleoutline', 'to': '\ue016' },{ from: 'imageoutline', 'to': '\ue02c' },{ from: 'hipstamatic', 'to': '\ue02a' },{ from: 'videocamera', 'to': '\ue053' },{ from: 'arrowright', 'to': '\ue004' },{ from: 'attachment', 'to': '\ue006' },{ from: 'githubtext', 'to': '\ue026' },{ from: 'googleplus', 'to': '\ue028' },{ from: 'arrowdown', 'to': '\ue002' },{ from: 'arrowleft', 'to': '\ue003' },{ from: 'backlight', 'to': '\ue009' },{ from: 'checkmark', 'to': '\ue015' },{ from: 'nextlight', 'to': '\ue034' },{ from: 'pinterest', 'to': '\ue03b' },{ from: 'wordpress', 'to': '\ue057' },{ from: 'audiooff', 'to': '\ue007' },{ from: 'bookmark', 'to': '\ue00c' },{ from: 'calendar', 'to': '\ue00f' },{ from: 'collapse', 'to': '\ue018' },{ from: 'computer', 'to': '\ue01a' },{ from: 'download', 'to': '\ue01c' },{ from: 'dribbble', 'to': '\ue01d' },{ from: 'facebook', 'to': '\ue021' },{ from: 'favorite', 'to': '\ue022' },{ from: 'feedback', 'to': '\ue023' },{ from: 'linkedin', 'to': '\ue02f' },{ from: 'listview', 'to': '\ue030' },{ from: 'location', 'to': '\ue031' },{ from: 'question', 'to': '\ue040' },{ from: 'settings', 'to': '\ue048' },{ from: 'tileview', 'to': '\ue04c' },{ from: 'arrowup', 'to': '\ue005' },{ from: 'behance', 'to': '\ue00b' },{ from: 'comment', 'to': '\ue019' },{ from: 'preview', 'to': '\ue03e' },{ from: 'refresh', 'to': '\ue042' },{ from: 'retweet', 'to': '\ue043' },{ from: 'twitter', 'to': '\ue04f' },{ from: 'camera', 'to': '\ue011' },{ from: 'cancel', 'to': '\ue012' },{ from: 'delete', 'to': '\ue01b' },{ from: 'expand', 'to': '\ue020' },{ from: 'flickr', 'to': '\ue024' },{ from: 'folder', 'to': '\ue025' },{ from: 'github', 'to': '\ue027' },{ from: 'pencil', 'to': '\ue038' },{ from: 'picasa', 'to': '\ue03a' },{ from: 'plugin', 'to': '\ue03c' },{ from: 'search', 'to': '\ue047' },{ from: 'tablet', 'to': '\ue04a' },{ from: 'tumblr', 'to': '\ue04e' },{ from: 'unlock', 'to': '\ue050' },{ from: 'upload', 'to': '\ue051' },{ from: 'alert', 'to': '\ue001' },{ from: 'audio', 'to': '\ue008' },{ from: 'brush', 'to': '\ue00d' },{ from: 'build', 'to': '\ue00e' },{ from: 'cloud', 'to': '\ue017' },{ from: 'email', 'to': '\ue01e' },{ from: 'error', 'to': '\ue01f' },{ from: 'group', 'to': '\ue029' },{ from: 'image', 'to': '\ue02d' },{ from: 'minus', 'to': '\ue033' },{ from: 'phone', 'to': '\ue039' },{ from: 'print', 'to': '\ue03f' },{ from: 'share', 'to': '\ue049' },{ from: 'vimeo', 'to': '\ue055' },{ from: 'back', 'to': '\ue00a' },{ from: 'call', 'to': '\ue010' },{ from: 'cart', 'to': '\ue013' },{ from: 'chat', 'to': '\ue014' },{ from: 'home', 'to': '\ue02b' },{ from: 'like', 'to': '\ue02e' },{ from: 'lock', 'to': '\ue032' },{ from: 'next', 'to': '\ue035' },{ from: 'page', 'to': '\ue036' },{ from: 'path', 'to': '\ue037' },{ from: 'plus', 'to': '\ue03d' },{ from: 'save', 'to': '\ue046' },{ from: 'soup', 'to': '\ue000' },{ from: 'text', 'to': '\ue04b' },{ from: 'time', 'to': '\ue04d' },{ from: 'user', 'to': '\ue052' },{ from: 'view', 'to': '\ue054' },{ from: 'wifi', 'to': '\ue056' },{ from: 'rss', 'to': '\ue045' }],
substitute: function(el) {
    var curr = el.firstChild;
    var next, alt;
    var content;
    while (curr) {
        next = curr.nextSibling;
        if (curr.nodeType === Node.TEXT_NODE) {
            content = curr.nodeValue;
            for (var i = 0; i < IcomaticUtils.fallbacks.length; i++) {
                content = content.replace( IcomaticUtils.fallbacks[i].from, function(match) {
                    alt = document.createElement('span');
                    alt.setAttribute('class', 'icomatic-alt');
                    alt.innerHTML = match;
                    el.insertBefore(alt, curr);
                    return IcomaticUtils.fallbacks[i].to;
                });
            }
            alt = document.createTextNode(content);
            el.replaceChild(alt, curr);
        }
        curr = next;
    }
},
run: function(force) {
    force = typeof force !== 'undefined' ? force : false;
    var s = getComputedStyle(document.body);
    if (('WebkitFontFeatureSettings' in s)
        || ('MozFontFeatureSettings' in s)
        || ('MsFontFeatureSettings' in s)
        || ('OFontFeatureSettings' in s)
        || ('fontFeatureSettings' in s))
        if (!force)
            return;
    var els = document.querySelectorAll('.icomatic');
    for (var i = 0; i < els.length; i++)
        IcomaticUtils.substitute(els[i]);
}
} // end of object
} // end of fn
)()