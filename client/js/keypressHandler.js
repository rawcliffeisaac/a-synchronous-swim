
  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  const ajaxGetRequest = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: () => console.log('successful GET request!')
    });
  };


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
    ajaxGetRequest();
  }
});

console.log('Client is running in the browser!');
