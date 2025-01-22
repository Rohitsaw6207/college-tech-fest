import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0I9Y6ez8DMOXhxZlPQ3h7cWBb-hEulXQ",
    authDomain: "quiz-531fa.firebaseapp.com",
    databaseURL: "https://quiz-531fa-default-rtdb.firebaseio.com",
    projectId: "quiz-531fa",
    storageBucket: "quiz-531fa.appspot.com",
    messagingSenderId: "582965786537",
    appId: "1:582965786537:web:9ad07c6af076847295b6b8",
    measurementId: "G-JEYZTMY29M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
    
    onAuthStateChanged(auth, (user) => {
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        if (user && loggedInUserId) {
            console.log(user);
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        updateDOMWithUserData(userData);
                    } else {
                        console.log("No document found matching ID");
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });
        } else {
            console.log("User not logged in or User ID not found in Local Storage");
            window.location.href = 'redirect'; // Redirect to the page with the sign-in/sign-up button
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
            .then(() => {
                window.location.href = 'login-register';
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    });
});



function updateDOMWithUserData(userData) {
    const elementsToUpdate = {
        loggedUserFName: userData.firstName,
        loggedUserFname: userData.firstName,
        loggedUserfname: userData.firstName,
        loggedUserEmail: userData.email,
        loggedUserLName: userData.lastName,
        loggedUserLname: userData.lastName,
        loggedUserGender: userData.gender,
        loggedUserAchivement: userData.achivement,
        loggedUserTotalPoints: userData.totalPoints,
        loggedUserGithub: userData.github,
        loggedUserLinkedIn: userData.linkedin,
        loggedUserInstagram: userData.instagram,
        loggedUserCity: userData.city,
        loggedUserCountry: userData.country,
        loggedUserDob: userData.bod,
        loggedUserUsername: userData.username,
        loggedUserPhone: userData.phone,
        loggedUserGrank: userData.grank,
        loggedUserLevel: userData.level,
    };

    for (const [id, value] of Object.entries(elementsToUpdate)) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = value;
            } else {
                element.innerText = value;
            }
        } else {
            console.warn(`Element with ID '${id}' not found in the DOM.`);
        }
    }

   

    // Update specific input fields with retrieved data
    // const userNameInput = document.getElementById('username');
    // const userContactInput = document.getElementById('contact');
    
    // if (userNameInput && userData.username) {
    //     userNameInput.value = userData.username;
    // }
    
    // if (userContactInput && userData.phone) {
    //     userContactInput.value = userData.phone;
    // }
}
