### Pinterest


## Motivation
This project was created to showcase the ability to makr CRUD applications, CRUD stands for Create, Read, Update, Delete. We also used firebase to deploy this project, rather than using netlify.  

## Technology Used
Javascript, Sass, Google Firebase, NodeJS, JQuery, bootstrap, HTML 

## Deployment
Coming Soon!

## Code Snippet

``` javascript
import boardData from '../../helpers/data/boardData';
import form from '../../forms/updatePinsForm';

const updatePinsView = (uid) => {
  $('#app').html('<div class="forms" id="update-pins-form"></div>');
  boardData.getSingleBoard(uid).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updatePinsView };

```

