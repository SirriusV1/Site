// Javascript Code:
function foo(p) {
    console.log("foo");
    return 10;
}

("use strict");
var sheHeader;

(function () {
    sheHeader = (function () {
        return {
            init: function () {
                this.header();
            },
        };
    })();
})(jQuery);

jQuery(document).ready(function () {
    if (!jQuery("body").hasClass("elementor-editor-active")) {
        sheHeader.init();
    }
});

// Make sure you run this code under Elementor.
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/global",
        function () {
            if (jQuery("body").hasClass("elementor-editor-active")) {
                sheHeader.init();
            }
        }
    );
});

// Header
(function ($) {
    sheHeader.header = function () {
        var $body = $("body"),
            header = $(".she-header-yes"),
            data_settings = header.data("settings");

        // Header Effects.
        var headerEffects = function () {
            var container = $(
                    ".she-header-yes .elementor-container, .she-header-yes.e-container, .she-header-yes.e-con"
                ),
                header_elementor = $(".elementor-edit-mode .she-header-yes"),
                header_logo = $(
                    ".she-header-yes .elementor-widget-theme-site-logo img:not(.elementor-widget-n-menu img), .she-header-yes .elementor-widget-image img:not(.elementor-widget-n-menu img)"
                ),
                header_logo_div = $(
                    ".she-header-yes .elementor-widget-theme-site-logo a::after, .she-header-yes .elementor-widget-image a::after"
                );

            if (typeof data_settings != "undefined") {
                var responsive_settings = data_settings["transparent_on"],
                    width = $(window).width(),
                    header_height = header.height(),
                    logo_width = header_logo.width(),
                    logo_height = header_logo.height();
            }

            // Check responsive is enabled
            if (typeof width != "undefined" && width) {
                if (width >= 1025) {
                    var enabled = "desktop";
                } else if (width > 767 && width < 1025) {
                    var enabled = "tablet";
                } else if (width <= 767) {
                    var enabled = "mobile";
                }
            }

            if ($.inArray(enabled, responsive_settings) != "-1") {
                var scroll_distance = data_settings["scroll_distance"],
                    transparent_header = data_settings["transparent_header"],
                    background = data_settings["background"],
                    custom_background = data_settings["custom_background"];

                var bottom_border_color =
                        data_settings["custom_bottom_border_color"],
                    bottom_border_view = data_settings["bottom_border"],
                    bottom_border_width =
                        data_settings["custom_bottom_border_width"];

                var shrink_header = data_settings["shrink_header"],
                    data_height = data_settings["custom_height_header"],
                    data_height_tablet =
                        data_settings["custom_height_header_tablet"],
                    data_height_mobile =
                        data_settings["custom_height_header_mobile"];

                var shrink_logo = data_settings["shrink_header_logo"],
                    data_logo_height =
                        data_settings["custom_height_header_logo"],
                    data_logo_height_tablet =
                        data_settings["custom_height_header_logo_tablet"],
                    data_logo_height_mobile =
                        data_settings["custom_height_header_logo_mobile"];

                var change_logo_color = data_settings["change_logo_color"];

                var blur_bg = data_settings["blur_bg"];

                var scroll_distance_hide_header =
                    data_settings["scroll_distance_hide_header"];

                // add transparent class
                if (transparent_header == "yes") {
                    header.addClass("she-header-transparent-yes");
                }

                // header height shrink
                if (typeof data_height != "undefined" && data_height) {
                    if (width >= 1025) {
                        var shrink_height = data_height["size"];
                    } else if (width > 767 && width < 1025) {
                        var shrink_height = data_height_tablet["size"];
                        if (shrink_height == "") {
                            shrink_height = data_height["size"];
                        }
                    } else if (width <= 767) {
                        var shrink_height = data_height_mobile["size"];
                        if (shrink_height == "") {
                            shrink_height = data_height["size"];
                        }
                    }
                }

                // Logo height shrink
                if (
                    typeof data_logo_height != "undefined" &&
                    data_logo_height
                ) {
                    if (width >= 1025) {
                        var shrink_logo_height = data_logo_height["size"];
                    } else if (width > 767 && width < 1025) {
                        var shrink_logo_height =
                            data_logo_height_tablet["size"];
                    } else if (width <= 767) {
                        var shrink_logo_height =
                            data_logo_height_mobile["size"];
                    }

                    //Calc New width and height
                    if (shrink_logo_height == "") {
                        //Get logo shrink settings from desktop
                        shrink_logo_height = data_logo_height["size"];

                        if (shrink_logo_height == "") {
                            // Shrink same settings from height shrink option
                            shrink_logo_height = shrink_height;

                            var percent =
                                    parseInt(shrink_logo_height) /
                                    parseInt(header_height),
                                width_l = logo_width * percent,
                                height_l = logo_height * percent;
                        } else {
                            var width_l =
                                    (logo_width * shrink_logo_height) / 100,
                                height_l =
                                    (logo_height * shrink_logo_height) / 100;
                        }
                    } else {
                        //Get logo shrink settings from the responsive option
                        var width_l = (logo_width * shrink_logo_height) / 100,
                            height_l = (logo_height * shrink_logo_height) / 100;
                    }
                }

                // border bottom
                if (
                    typeof bottom_border_width != "undefined" &&
                    bottom_border_width
                ) {
                    var bottom_border =
                        bottom_border_width["size"] +
                        "px solid " +
                        bottom_border_color;
                }

                // hide header on scroll
                if (
                    typeof scroll_distance_hide_header != "undefined" &&
                    scroll_distance_hide_header
                ) {
                    var mywindow = $(window),
                        mypos = mywindow.scrollTop();

                    mywindow.scroll(function () {
                        var sd_hh_s = scroll_distance_hide_header["size"],
                            sd_hh_u = scroll_distance_hide_header["unit"],
                            sd_hh_tablet =
                                data_settings[
                                    "scroll_distance_hide_header_tablet"
                                ],
                            sd_hh_tablet_s = sd_hh_tablet["size"],
                            sd_hh_tablet_u = sd_hh_tablet["unit"],
                            sd_hh_mobile =
                                data_settings[
                                    "scroll_distance_hide_header_mobile"
                                ],
                            sd_hh_mobile_s = sd_hh_mobile["size"],
                            sd_hh_mobile_u = sd_hh_mobile["unit"];

                        // get responsive view
                        if (
                            typeof scroll_distance_hide_header != "undefined" &&
                            scroll_distance_hide_header
                        ) {
                            if (width >= 1025) {
                                var sd_hh = sd_hh_s,
                                    sd_hh_u = sd_hh_u;
                                // calc sise for vh unit
                                if (sd_hh_u == "vh") {
                                    sd_hh = window.innerHeight * (sd_hh / 100);
                                }
                            } else if (width > 767 && width < 1025) {
                                var sd_hh = sd_hh_tablet_s,
                                    sd_hh_u = sd_hh_tablet_u;

                                if (sd_hh == "") {
                                    sd_hh = sd_hh_s;
                                }
                                // calc sise for vh unit
                                if (sd_hh_u == "vh") {
                                    sd_hh = window.innerHeight * (sd_hh / 100);
                                }
                            } else if (width <= 767) {
                                var sd_hh = sd_hh_mobile_s,
                                    sd_hh_u = sd_hh_mobile_u;

                                if (sd_hh == "") {
                                    sd_hh = sd_hh_s;
                                }
                                // calc sise for vh unit
                                if (sd_hh_u == "vh") {
                                    sd_hh = window.innerHeight * (sd_hh / 100);
                                }
                            }
                        }

                        // added option for vh unit
                        //if(sd_hh_u == 'px'){
                        //	sd_hh  = sd_hh_s;
                        //} else {
                        //	sd_hh  = (window.innerHeight)*(sd_hh_s/100);
                        //}

                        if (mypos > sd_hh) {
                            if (mywindow.scrollTop() > mypos) {
                                header.addClass("headerup");
                            } else {
                                header.removeClass("headerup");
                            }
                        }
                        mypos = mywindow.scrollTop();
                    });
                }

                // scroll function
                $(window).on("load scroll", function (e) {
                    var scroll = $(window).scrollTop();

                    if (header_elementor) {
                        header_elementor.css("position", "relative");
                    }

                    var sd_s = scroll_distance["size"],
                        sd_u = scroll_distance["unit"],
                        sd_tablet = data_settings["scroll_distance_tablet"],
                        sd_tablet_s = sd_tablet["size"],
                        sd_tablet_u = sd_tablet["unit"],
                        sd_mobile = data_settings["scroll_distance_mobile"],
                        sd_mobile_s = sd_mobile["size"],
                        sd_mobile_u = sd_mobile["unit"];

                    // get responsive view
                    if (
                        typeof scroll_distance != "undefined" &&
                        scroll_distance
                    ) {
                        if (width >= 1025) {
                            var sd = sd_s,
                                sd_u = sd_u;
                            // calc sise for vh unit
                            if (sd_u == "vh") {
                                sd = window.innerHeight * (sd / 100);
                            }
                        } else if (width > 767 && width < 1025) {
                            var sd = sd_tablet_s,
                                sd_u = sd_tablet_u;

                            if (sd == "") {
                                sd = sd_s;
                            }
                            // calc sise for vh unit
                            if (sd_u == "vh") {
                                sd = window.innerHeight * (sd / 100);
                            }
                        } else if (width <= 767) {
                            var sd = sd_mobile_s,
                                sd_u = sd_mobile_u;

                            if (sd == "") {
                                sd = sd_s;
                            }
                            // calc sise for vh unit
                            if (sd_u == "vh") {
                                sd = window.innerHeight * (sd / 100);
                            }
                        }
                    }

                    //console.log(sd_s );
                    //console.log(sd_u );
                    //console.log(window.innerHeight );
                    //console.log(sd );
                    //console.log(scroll );
                    //console.log(bottom_shadow);

                    if (scroll >= sd) {
                        header.removeClass("header").addClass("she-header");
                        header.css("background-color", background);
                        header.css("border-bottom", bottom_border);

                        //----------------- BG BLUR SETTINGS
                        if (blur_bg == "yes") {
                            header.css({
                                "backdrop-filter": "saturate(180%) blur(20px)",
                                "-webkit-backdrop-filter":
                                    "saturate(180%) blur(20px)",
                            });
                        }

                        //----------------- TRANSPARENT HEADER
                        if (transparent_header == "yes") {
                            header.removeClass("she-header-transparent-yes");
                        }

                        // ---------------------------------- BACKGROUND GRADIENT
                        if (custom_background == "yes") {
                            header.addClass("she-custom-background");
                        }

                        if (shrink_header == "yes") {
                            header.css({
                                "padding-top": "0",
                                "padding-bottom": "0",
                                "margin-top": "0",
                                "margin-bottom": "0",
                            });
                            container.css({
                                "min-height": shrink_height,
                                transition: "all 0.4s ease-in-out",
                                "-webkit-transition": "all 0.4s ease-in-out",
                                "-moz-transition": "all 0.4s ease-in-out",
                            });
                        }

                        // ---------------------------------- SHRINK LOGO
                        if (shrink_logo == "yes") {
                            header_logo.css({
                                width: width_l,
                                transition: "all 0.4s ease-in-out",
                                "-webkit-transition": "all 0.4s ease-in-out",
                                "-moz-transition": "all 0.4s ease-in-out",
                            });
                        }

                        // ---------------------------------- CHANGE LOGO COLOR
                        if (change_logo_color == "yes") {
                            header_logo.addClass("change-logo-color");
                        }
                    } else {
                        header.removeClass("she-header").addClass("header");
                        header.css("background-color", "");
                        header.css("border-bottom", "");

                        //----------------- BG BLUR SETTINGS
                        if (blur_bg == "yes") {
                            header.css({
                                "backdrop-filter": "",
                                "-webkit-backdrop-filter": "",
                            });
                        }

                        //----------------- TRANSPARENT HEADER
                        if (transparent_header == "yes") {
                            header.addClass("she-header-transparent-yes");
                        }

                        // ---------------------------------- BACKGROUND GRADIENT
                        if (custom_background == "yes") {
                            header.removeClass("she-custom-background");
                        }

                        // ---------------------------------- SHRINK HEADER
                        if (shrink_header == "yes") {
                            header.css({
                                "padding-top": "",
                                "padding-bottom": "",
                                "margin-top": "",
                                "margin-bottom": "",
                            });
                            container.css("min-height", "");
                        }

                        // ---------------------------------- SHRINK LOGO
                        if (shrink_logo == "yes") {
                            header_logo.css({ height: "", width: "" });
                        }

                        // ---------------------------------- CHANGE LOGO COLOR
                        if (change_logo_color == "yes") {
                            header_logo.removeClass("change-logo-color");
                        }
                    }
                });
            }
        };

        // Header Menu.
        var headerMenu = function () {
            if (typeof data_settings != "undefined") {
                var menu_toggle = data_settings["mobile_menu_toggle_animation"],
                    menu_toggle_type =
                        "she-custom-hamburger-menu--type-" +
                        data_settings["menu_toggle_type"],
                    menu_toggle_style =
                        "she-custom-hamburger-menu--style-" +
                        data_settings["menu_toggle_style"];
            }

            if (menu_toggle != "yes") {
                return;
            }
        };

        var events = function () {
            headerEffects();
            headerMenu();
        };

        events();
    };
})(jQuery);
