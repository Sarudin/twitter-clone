$(document).ready(function() {
  $('.tweet-compose').on('click', function() {
    $('.tweet-compose').css('height', '5em')
    $('#tweet-controls').show();
  });

  $('.tweet-compose').keyup(function(e) {
    var count = 0

    if (e.keyCode === 8 && $(this).val().length > 0) {
      count--;
      $('#char-count').text(139 - $(this).val().length - count);
    }
    else {
      count++;
      $('#char-count').text(139 - $(this).val().length + count);
    }





    if ($(this).val().length - 1 >= 139) {
      $('#tweet-submit').prop('disabled', true);
    }

    if ($(this).val().length <= 139) {
      $('#tweet-submit').prop('disabled', false);
    }

    if($(this).val().length >= 129) {
      $('#char-count').css('color', 'red');
    }

    if($(this).val().length < 129) {
      $('#char-count').css('color', '#999');
    }
  });

  $('.tweet').hover(function() {
    $(this).find('.tweet-actions').show() },
    function() {
      $(this).find('.tweet-actions').hide()
  });
});
