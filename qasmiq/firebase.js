
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import {} from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

export function init() {
    const firebase = initFirebase();
    //initAuth();
    initFirestore(firebase);
    initAuthUI(firebase);
}

function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCY70CZPWKxkOO5L5BRBrOmyH5eB4oKdF4",
        authDomain: "qasmiq.firebaseapp.com",
        projectId: "qasmiq",
        storageBucket: "qasmiq.appspot.com",
        messagingSenderId: "548352322126",
        appId: "1:548352322126:web:075578ba126fe91e57711f"
    };

    return initializeApp(firebaseConfig);
}

function initAuthUI(firebase) {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
    });
}

function initFirestore(firebase) {
    console.log('oops lol forgot to init firestore');
}
