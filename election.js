$(document).ready(function() {

/* Number 1 and two */

$.ajax({    

  console.log('loaded');

  url:'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'json',
}).done(function(data) {

     for (var i=0; i < data.candidates.length; i++) {
       candidate = data.candidates[i]
       var can=candidate.name + ' has ' + candidate.votes + ' votes.';
       var item = $('<li>').html(can);
       $('#attach-data').append(item);
     }
 });
});
