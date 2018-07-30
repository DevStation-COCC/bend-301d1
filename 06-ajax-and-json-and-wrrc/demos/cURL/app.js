$(function() {
  let url = 'https://pokeapi.co/api/v2/pokemon/7/';

  let log = function(){
    $('#url').text('url: ' + url);
    $('#status').text('status: ' + response.status).addClass('success');
    $('#statusText').text('statusText: ' + response.statusText);
    $('#content').text(JSON.stringify(response.responseText));
  };

  let logFailure = function(){
    $('#url').text('url: ' + url);
    $('#status').text('status: ' + response.status).addClass('fail');
    $('#statusText').text('statusText: ' + response.statusText);
  };

  let response = $.get(url, log)
                  .fail(logFailure)
                  .done(function(){
                    alert('done!');
                  })
                  .always(function(){
                    alert('you are done either way!');
                  });

});