/* jshint esversion:6 */
$(document).ready(function() {
  // preloader
  $(".preload")
    .delay(500)
    .fadeOut();
  // todo list
  $(".todolist ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });
  $(".todolist ul").on("click", "span", function(event) {
    $(this)
      .parent()
      .fadeOut(500, function() {
        $(this).remove();
      });
    event.stopPropagation();
  });

  // start clock
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Feb 19, 2021 07:00:00").getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}
    }, second);
  // end clock
});
