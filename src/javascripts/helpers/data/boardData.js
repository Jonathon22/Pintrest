import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Boards.json`).then((response) => {
    const thoseBoards = response.data;
    const boards = [];
    if (thoseBoards) {
      Object.keys(thoseBoards).forEach((boardId) => {
        boards.push(thoseBoards[boardId]);
      });
    }
    console.warn(boards);
    resolve(boards);
  }).catch((error) => reject(error));
});

const deleteBoard = (firebaseKey) => axios.delete(`${baseUrl}/Boards/${firebaseKey}.json`);

const getSingleBoard = (boardUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/Boards.json?orderBy="uid"&equalTo="${boardUid}"`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisBoard = board[0];
      resolve(thisBoard);
    })
    .catch((error) => reject(error));
});

const addBoard = (data) => axios.post(`${baseUrl}/Boards.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/Boards/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default {
  getBoards,
  deleteBoard,
  getSingleBoard,
  addBoard,
};
