/*

    Responzer.js

*/

function responzer(selector) {
    "use strict";
    jQuery(selector).each(function () {
        var container = jQuery(this),
            ratio = 5,
            content = container.children(),
            containerw = container.width(),
            containerh = containerw / ratio;
        container.css({'min-height': containerh + 'px', 'width': containerw + 'px'});
        content.css({'height': containerh + 'px', 'width': containerw + 'px'});
        content.attr({'height': containerh + 'px', 'width': containerw + 'px'});    // needed if content is iframe
    });
}

jQuery(document).ready(function () {
    "use strict";
    responzer('.responzer');
});
jQuery(window).resize(function () {
    "use strict";
    responzer('.responzer');
});