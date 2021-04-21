
$(document).ready(function () {
  //select the humming about text area (I only have one text area, but Compass said be specific, so I've choosen a detailed selector)
  $("section.new-tweet > form textarea").on('input', function () {

    //calculate the number of characters remaining
    const counterNumber = 140 - $(this).val().length;
    //create convenience variable that corresponds to selecting the output element with class counter
    const counter = $(this).parent().find("output.counter")

    //if the counter goes below 0, add the class "limit" to it to turn the color red. If user deletes text to bring character count back above zero, remove the "limit" class so the color goes back to black
    counter.html(counterNumber);
    if (counterNumber < 0) {
      counter.addClass('limit');
    } else {
      counter.removeClass('limit');
    }
  });

});