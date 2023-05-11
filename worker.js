

function myAPIData() {
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=d7a46599-4fa9-47c3-8eed-118105027bac&offset=0")
    .then(y=>y.json()).then(y=>postMessage(y.data));

    
    setTimeout("myAPIData()",1000);
  }
  
  myAPIData();