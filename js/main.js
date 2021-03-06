!(function (e, i) {
  i(window).scroll(function () {
    i(".site-header").outerHeight() <= i(window).scrollTop()
      ? i(".site-header").addClass("shrink")
      : i(".site-header").removeClass("shrink");
  }),
    i(window).on("load resize", function () {
      var e = i(".site-header"),
        s = 0,
        o = 0;
      "fixed" === e.css("position") && (s = e.outerHeight()),
        "fixed" === e.css("position") &&
          i("body").hasClass("admin-bar") &&
          (o = i("#wpadminbar").outerHeight()),
        i(".site-inner").css("margin-top", s),
        e.css("margin-top", o);
    }),
    i(".site-header .search-form").append(
      '<a href="javascript:document.getElementsByName("s").focus()" class="search-toggle"></a>'
    ),
    i(".site-header .search-toggle").on("click", function () {
      i(this).toggleClass("active"),
        i(".nav-primary .menu-item").fadeToggle(),
        i('.site-header .search-form input[type="search"]').fadeToggle();
    }),
    i(".site-footer .enews form").append('<span class="send-icon"></span>'),
    i(window)
      .on("resize", function () {
        window.innerWidth < 896
          ? i(".before-header").appendTo(".nav-primary .menu")
          : (i(".before-header").prependTo(".site-header"),
            i(".nav-primary .menu .before-header").remove());
      })
      .resize(),
    jQuery(e).ready(function (o) {
      Modernizr.objectfit ||
        o(".front-page-9").each(function () {
          var e = o(this),
            s = e.find("img").prop("src");
          s &&
            e
              .css("backgroundImage", "url(" + s + ")")
              .addClass("no-object-fit"),
            e.find("img").css("display", "none");
        });
    }),
    jQuery(e).ready(function (e) {
      e(".front-page-2 .gallery").slick({
        dots: !1,
        infinite: !0,
        speed: 1e3,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 5e3,
        fade: !1,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: !0,
        responsive: [
          { breakpoint: 384, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 4 } },
          { breakpoint: 896, settings: { slidesToShow: 5 } },
          { breakpoint: 1152, settings: { slidesToShow: 6 } },
        ],
      });
    }),
    i('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .not('[href*="#tab-"]')
      .click(function (e) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var s = i(this.hash);
          (s = s.length ? s : i("[name=" + this.hash.slice(1) + "]")).length &&
            (e.preventDefault(),
            i("html, body").animate(
              { scrollTop: s.offset().top },
              1e3,
              function () {
                var e = i(s);
                if ((e.focus(), e.is(":focus"))) return !1;
                e.attr("tabindex", "-1"), e.focus();
              }
            ));
        }
      });
})(document, jQuery);
