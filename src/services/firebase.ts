import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD_ZDU67bPPh7d0afHY6Slw-NVf5U2CqGY",
    authDomain: "instacool-f9451.firebaseapp.com",
    databaseURL: "https://instacool-f9451.firebaseio.com",
    projectId: "instacool-f9451",
    storageBucket: "instacool-f9451.appspot.com",
    messagingSenderId: "129226507808",
    appId: "1:129226507808:web:44f8cddf06bd1c8b22de45",
    measurementId: "G-9LV2FEC4E6"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
