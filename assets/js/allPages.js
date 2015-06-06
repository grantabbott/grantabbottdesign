$(document).foundation();


var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 250);
    $(".icon-menu").hide();

  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 250);

    $(".icon-menu").show();
  });
};


$(document).ready(main);
