import pin from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div class=“card pin” style=“width: 18rem;” id=“${pinObject.firebaseKey}“>
  <a href=“” target=“_blank”><img src=“${pinObject.image}” class=“card-img-top” alt=““></a>
  <div class=“card-body”>
    <h5 class=“card-title”>${pinObject.name}</h5>
    <a href=“#” id=“” class=“btn btn-primary update-pin"><i class=“far fa-edit”></i>Update Pin</a>
    <a href=“#” id=“” class=“btn btn-danger delete-pin”>Delete</a>
  </div>
</div>`;
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    pin.deletePin(firebaseKey);
  });

  return domString;
};

export default { pinMaker };
