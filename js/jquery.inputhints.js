﻿// jQuery Input Hints plugin
// Copyright (c) Rob Volk
// https://github.com/robvolk/jQuery.InputHints
// http://robvolk.com/jquery-form-input-hints-plugin

(function ($) { // alias the $ function for use with jquery in no-conflict mode
    $.fn.inputHints = function () {
        function showHints(el) {
            if ($(el).val() == '') {
                $(el).val($(el).attr('title')).addClass('hint');
                if ($(el).attr('type') == 'password') {
                    $(el).attr('old-type','password');
                    $(el).attr('type','text');
		}
            }
        };

        function hideHints(el) {
            if ($(el).val() == $(el).attr('title')) {
                if ($(el).attr('old-type') == 'password') {
                    $(el).attr('type','password');
		}
                $(el).val('')
                    .removeClass('hint');
	    }
        };

        // hides the input display text stored in the placeholder on focus
        // and sets it on blur if the user hasn't changed it.

        var el = $(this);

        // show the display text on empty elements
        el.each(function () {
            showHints(this);
        });

        // clear the hints on form submit
        el.closest('form').submit(function () {
            el.each(function () {
                hideHints(this);
            });
            return true;
        });

        // hook up the blur & focus
        return el.focus(function () {
            hideHints(this);
        }).blur(function () {
            showHints(this);
        });
    };
})(jQuery);
