/*
 * jQuery Plugin: rotateClass
 * http://github.com/shibu/jquery_plugin/
 * 
 * Copyright (c) 2009, Shibukawa Yoshiki
 * Dual licensed under the MIT licenses.
 *
 * $Date$
 * $Revision$
 */

$.fn.rotateClass = function() {
    var states = arguments;
    return this.each(function() {
        var next_index = -1;
        var has_null = false;
        this_elem = $(this);
        for (var i=0;i<states.length;++i) {
            state = states[i];
            if (state == null) {
                has_null = true;
            } else if (this_elem.hasClass(state)) {
                next_index = (i + 1) % states.length;
                this_elem.removeClass(state);
            }
        }
        if (next_index == -1) {
            if (has_null == true) {
                next_index = 1;
            } else {
                next_index = 0;
            }
        }
        next_class = states[next_index];
        if (next_class != null) {
            this_elem.addClass(next_class);
        }
    });
};
