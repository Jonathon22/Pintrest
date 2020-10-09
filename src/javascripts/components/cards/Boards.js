import deleteBoard from '../../helpers/data/boardData';

const boardMaker = (board) => {
  const domString = `<div class="card card-cascade narrower" id="${board.uid}">

  <div class="view view-cascade overlay">
    <img class="card-img-top" src="${board.image}"
      alt="Card image cap">
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body card-body-cascade">

    <!-- Label -->
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
    <!-- Title -->
    <h4 class="font-weight-bold card-title">${board.name}</h4>
    <!-- Text -->
    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi.</p>
    <!-- Button -->
     <div class="board-body">
     <a href="#" id="${board.uid}" class="btn btn-info pin-btn see-pins board-buttons"><i id="pin-icon" class="fas fa-map-pin"></i> Pins</a>
    <button id="${board.uid}" class="btn btn-dark delete-board board-buttons"><i class="far fa-trash-alt"></i> Delete Board </button>
    </div>
  </div>

</div>`;
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    deleteBoard.deleteBoard(firebaseKey);
  });

  return domString;
};

export default { boardMaker };
