$(document).ready(function () {
  var util = {
    mobileMenu() {
      $("#nav").toggleClass("nav-visible");
    },
    windowResize() {
      if ($(window).width() > 800) {
        $("#nav").removeClass("nav-visible");
      }
    },
    scrollEvent() {
      var scrollPosition = $(document).scrollTop();

      $.each(util.scrollMenuIds, function (i) {
        var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;

        if (
          scrollPosition < containerBottom - 20 &&
          scrollPosition >= containerOffset - 20
        ) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });

      // Aggiornare l'attributo href del link dinamico in base all'ultimo link attivo
      var activeLink = $("a.nav-link.active");
      var activeLinkId = activeLink.attr("href");
      var currentPath = window.location.pathname;
      var newPath = "";

      if (currentPath.includes("/en/")) {
        newPath = currentPath.replace("/en/", "/it/");
      } else if (currentPath.includes("/it/")) {
        newPath = currentPath.replace("/it/", "/en/");
      }

      var dynamicLinkHref = newPath + activeLinkId;
      $("#dynamicLink").attr("href", dynamicLinkHref);
    }
  };

  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
  $(document).ready(util.scrollEvent);
});
