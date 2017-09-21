(function ($, root, undefined) {
  $(window).load(function () {
    /* *****************************
     * FULL HEIGHT
     * *****************************
     */
    function fullHeight(){
      //   debugger;
        var totalHeight = parseInt($(window).height());
        var fullHeight = totalHeight;
        $('.full-height').css('min-height',fullHeight);
    };
    fullHeight();

    function heroHeight(){
      //   debugger;
        var totalHeight = parseInt($(window).height());
        var heroHeight = totalHeight;
        $('.landing-container').css('min-height',heroHeight);
    };
    heroHeight();

    function internalHeroHeight(){
      //   debugger;
        var heroHeight = $('.hero').outerHeight();
        $('.hero img').css('height',heroHeight);
    };
    internalHeroHeight();

    $('.nav-trigger').on('click', mobileNav);

    function mobileNav() {
      event.preventDefault();
      $(this).toggleClass('active');
      $('.nav').toggleClass('mobile-nav-active');
    }

    // function mobileNav() {
    //   $('.nav-trigger')this().toggleClass('active');
    // }

    /* *****************************
     * RESIZE FUNCTION
     * *****************************
     */
    $(window).resize(function () {
        fullHeight();
        heroHeight();
        internalHeroHeight();

        if ($(window).width() >= 769) {
          $('.nav-trigger').removeClass('active');
          $('.nav').removeClass('mobile-nav-active');
        }
    });
  });
})(jQuery, this);
