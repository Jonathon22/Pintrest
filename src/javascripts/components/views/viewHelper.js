import boardsDom from './boardViews';
import addBoard from './addBoardView';
import addPin from './addPinView';
import updatePins from './updatePinsView';
import pinView from './pinsView';

const viewHelper = (id, user, arg) => {
  $('#app').html('');
  switch (id) {
    case 'all-boards-link':
      return boardsDom.boardsDom();
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'see-pins':
      return pinView.pinView();
    case 'add-pin-link':
      return addPin.addPinsView(user);
    case 'update-pins-link':
      return updatePins.updatePinsView(arg);
    default:
      return console.warn('nothing is clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-pin', (e) => {
    const pinFirebaseKey = e.currentTarget.id;
    viewHelper('update-pins-link', pinFirebaseKey);
  });
  $('body').on('click', '.see-pins', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
