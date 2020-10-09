import pinData from '../helpers/data/pinData';
import boardData from '../helpers/data/boardData';

const addPin = () => {
  $('#pin-form').html(`<h2>Add A Pin</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Example: Music, Clothing, Sports">
    </div>
    <div class="form-group">
      <label for="Image">Image URL</label>
      <input type="text" class="form-control" id="image" placeholder="URL address">
    </div>
    
    <div class="form-group">
      <label for="farmer">User</label>
        <select class="form-control" id="user">
          <option value="">Select a User</option>
        </select>
    </div>
    <button id="add-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Pin</button>
  </form>
  `);

  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.name}</option>`);
    });
  });
  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      useruid: $('#user').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class=alert-danger" role="alert" Please complete all fields</div>');
    } else {
      $('#error-message').html('');
      pinData.addPin(data)
        .then(() => {
          $('#success-message').html('<div class="alert alert-success" role="alert">Your Pin Was Added!</div>');
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
      $('#image').val('');
      $('#name').val('');
      $('#user').val('');
    }
  });
};

export default { addPin };
