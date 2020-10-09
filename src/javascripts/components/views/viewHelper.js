import boardsDom from './boardViews';
import addBoard from './addBoardView';

const viewHelper = (id) => {
  switch (id) {
    case 'all-boards-link':
      return boardsDom.boardsDom();
    case 'add-board-link':
      return addBoard.addBoardView();
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
