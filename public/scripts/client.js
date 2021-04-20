/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  timeago.render(document.querySelectorAll(".time-ago-formatted"));
  // timeago.format($(".time-ago-formatted").html());
  // $("time-ago-formatted").timeago();

});