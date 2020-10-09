import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Pins.json?orderBy="boardUid"&equalTo="${boardUid}"`).then((response) => {
    const thosePins = response.data;
    const pins = [];
    if (thosePins) {
      Object.keys(thosePins).forEach((item) => {
        pins.push(thosePins[item]);
      });
    }
    resolve(pins);
  }).catch((error) => reject(error));
});
const deletePin = (pinUid) => axios.delete(`${baseUrl}/Pins/${pinUid}.json`);

const addPin = (data) => axios.post(`${baseUrl}/Pins.json`, data).then((response) => {
  const update = { uid: response.data.name };

  axios.patch(`${baseUrl}/Pins/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});
const getSinglePin = (pinUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Pins/${pinUid}.json`).then((response) => {
    const thisPin = response.data;
    resolve(thisPin);
  }).catch((error) => reject(error));
});
export default {
  getPins,
  addPin,
  getSinglePin,
  deletePin
};
