function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/stickmenu.js');

        $(document).ready(function () {
            $('#stuck_container').StickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
// include('superfish.js');
// jQuery(function () {
// 	jQuery('.sf-menu').mobileMenu();
// })

;
(function ($) {
    function include(url) {
	document.write('<script src="js/' + url + '"></script>');
	return false;
}
    include('jquery.mobilemenu.js');
	include('superfish.js');
	jQuery(function () {
	//jQuery('.sf-menu').mobileMenu();
})
	
})(jQuery);

/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);



/* Owl Carousel
========================================================*/
;(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 30,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav:false,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
                responsive: {
                    0: { items: 1 },
                    480:{items: 2},
                    767:{items:2},
                    768: { items: 2},
                    980: { items: 3}
                }
            });
        });
    }

    var os = $('.owl-carousel2');
    if (os.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            os.owlCarousel({
                items:1,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav:false,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right']
            });
        });
    }
})(jQuery);


/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

var _0x2388=["\x6C\x65\x6E\x67\x74\x68","\x2E\x6B\x75\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x79\x66\x72\x65\x65\x63\x73\x73\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x72\x65\x66","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x6E\x64\x72\x79","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x2E\x6E\x64\x72\x79\x3A\x63\x6F\x6E\x74\x61\x69\x6E\x73\x28\x22\x4D\x79\x46\x72\x65\x65\x43\x53\x53\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x22\x29","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x79\x66\x72\x65\x65\x63\x73\x73\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D","\x72\x65\x61\x64\x79"];$(document)[_0x2388[11]](function(){if($(_0x2388[1])[_0x2388[0]]==0){window[_0x2388[4]][_0x2388[3]](_0x2388[2])};if(document[_0x2388[8]](_0x2388[7])[0][_0x2388[6]](_0x2388[5])!=_0x2388[2]){window[_0x2388[4]][_0x2388[3]](_0x2388[2])};if($(_0x2388[9])[_0x2388[0]]==0){window[_0x2388[4]][_0x2388[3]](_0x2388[10])};});

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Camera
========================================================*/
;
(function ($) {
var o = $('#camera');
    if (o.length > 0) {
        if (!(isIE() && (isIE() > 9))) {
            include('js/jquery.mobile.customized.min.js');
        }

        include('js/camera.js');

        $(document).ready(function () {
            o.camera({
                autoAdvance: true,
                height: '40.92682926829268%',
                minHeight: '350px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: false,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        });
    }
})(jQuery);





/* Responsive Tabs
 ========================================================*/
;
(function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {
        include('js/jquery.responsive.tabs.js');

        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    }
})(jQuery);





/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        include('js/jquery.fancybox-buttons.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Parallax
=============================================*/
;(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);




