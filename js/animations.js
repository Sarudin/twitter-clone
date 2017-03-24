$(document).ready(function() {
  $('.tweet-compose').on('click', function() {
    $('#tweet-controls').show();
  });

  $('.tweet-compose').keypress(function() {
    $('#char-count').text(139 - $(this).val().length);

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
      $('#char-count').css('color', 'gray');
    }
  });
});
