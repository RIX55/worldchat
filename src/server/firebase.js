import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  //INITIALIZE FIREBASE API HERE
};


  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;