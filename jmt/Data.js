const API_KEY =
  "tSmCWfqzpKOoTFbjKnZdt%2BhrOLxUIM1L4H9pC6sl1E1mCz4SsW4kkTbSMD8deZYJdRQkHXpXmk6Az2are2xSrg%3D%3D";
const stationId = 228000710;
const URL = `http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station?serviceKey=${API_KEY}&stationId=${stationId}`;
var parseString = require("react-native-xml2js").parseString;

function fetchData() {
  return fetch(URL)
    .then(response => response.text())
    .then(data => {
      parseString(data, function(err, result) {
        JSON.parse(JSON.stringify(result));
        var info = result.response.msgBody[0].busArrivalList;
        console.log(info[0].predictTime1[0]);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export default { fetchData: fetchData };
