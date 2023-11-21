
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDCvVF_mq3he2y0pm7O9-H1lhO7WreaoPQ",
    authDomain: "hairrepo-424be.firebaseapp.com",
    projectId: "hairrepo-424be",
    storageBucket: "hairrepo-424be.appspot.com",
    messagingSenderId: "948405769036",
    appId: "1:948405769036:web:0b3a0f54fc7474188a75e9",
    measurementId: "G-X43WVFDZ7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);