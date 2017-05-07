$(document).ready(function() {

  $(document).ready(function () {

    /* Number 1 and two */

    $('#step12').on('click', function() {
      console.log('Before .ajax');

      $.ajax({
        url:'https://bb-election-api.herokuapp.com/',
        method: 'GET',
        dataType: 'json',
      }).done(function(data) {
      $('#step3456').append(data);
      console.log('Got: ' + data)
      
      });
    });
    console.log('After .ajax');
  });

});
