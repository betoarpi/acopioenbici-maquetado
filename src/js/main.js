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
        $('.landing-container').css('min-height',heroHeight - 304);
    };
    heroHeight();

    /* *****************************
     * RESIZE FUNCTION
     * *****************************
     */
    $(window).resize(function () {
        fullHeight();
        heroHeight();
    });
  });
})(jQuery, this);
