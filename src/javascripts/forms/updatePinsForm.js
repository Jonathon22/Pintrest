import userData from '../helpers/data/userData';
import boardData from '../helpers/data/boardData';

const updatePinsForm = (boardObject) => {
  $('#update-pins-form').html(`<h2>Update Current Board</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" value="${boardObject.name}"placeholder="Example: Basketball">
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="image" value="${boardObject.image}" placeholder="URL">
    </div>
    <div class="form-group">
      <label for="user">User</label>
        <select class="form-control" id="user">
          <option value="">Select a User</option>
        </select>
    </div>
    <button id="update-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Board</button>
  </form>
  `);

  userData.getAllUsers().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}" ${
        boardObject.useruid === item.uid ? "selected ='selected'" : ''
      }>${item.name}</option>`);
    });
  });
  $('#update-board-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      useruid: $('#user').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      boardData.updateBoard(boardObject.uid, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Pins Was Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#succes-message').html('');
      }, 3000);
      $('#image').val('');
      $('#name').val('');
      $('#user').val('');
    }
  });
};

export default { updatePinsForm };
