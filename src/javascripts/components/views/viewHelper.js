import boardsDom from './boardViews';
import addBoard from './addBoardView';
import addPin from './addPinView';

const viewHelper = (id) => {
  switch (id) {
    case 'all-boards-link':
      return boardsDom.boardsDom();
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'add-pin-link':
      return addPin.addPinsView();
    default:
      return console.warn('nothing is clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
