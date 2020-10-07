import boardData from '../../helpers/data/boardData';
import boardMaker from '../cards/Boards';

const boardsDom = () => {
  $('#app').html('');
  boardData.getBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(boardMaker.boardMaker(item));
      });
    } else {
      $('#app').html('<h1 class="no-boards"> NO BOARDS!</h1>');
    }
  });
};

export default { boardsDom };
