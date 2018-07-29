$(function() {
  const $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {
    const $bgobj = $(this);
    $window.scroll(() => {
      let yPos = -($window.scrollTop() / $bgobj.data('speed'));
      let coords = `50% ${yPos}px`;
      $bgobj.css({ backgroundPosition: coords });
    });
  });
});