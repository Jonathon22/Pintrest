import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      myNavbar.myNavbar(currentUser);
      $('#app').html('');
      // viewHelper.viewListener();
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
