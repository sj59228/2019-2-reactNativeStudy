import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Bus from "./Bus";
import Axios from "axios";

const API_KEY =
  "tSmCWfqzpKOoTFbjKnZdt%2BhrOLxUIM1L4H9pC6sl1E1mCz4SsW4kkTbSMD8deZYJdRQkHXpXmk6Az2are2xSrg%3D%3D";
const stationId = 228000710;
const URL = `http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station?serviceKey=${API_KEY}&stationId=${stationId}`;
var parseString = require("react-native-xml2js").parseString;

export default class extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    return fetch(URL)
      .then(response => response.text())
      .then(data => {
        parseString(data, function(err, result) {
          info = JSON.parse(JSON.stringify(result));
        });
        this.setState({
          isLoading: false,
          info: info.response.msgBody[0].busArrivalList
        });
      })
      .catch(error => {
        Alert.alert("Can't bring Bus Information.", "Please try again");
      });
  }
  render() {
    const { isLoading, info } = this.state;
    return isLoading ? <Loading /> : <Bus info={info} />;
  }
}
