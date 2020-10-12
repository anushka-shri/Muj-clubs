 upInteractive = false;

  function autoToggle() {
    $('.arrow').toggleClass('auto');
  }

  $('.arrow').hover(function () {
    upInteractive = true;
    $('.arrow').removeClass('auto');
  });

  setInterval(function () {

    console.log(upInteractive);

    if (upInteractive === false) {
      autoToggle();
    }

  }, 2000);