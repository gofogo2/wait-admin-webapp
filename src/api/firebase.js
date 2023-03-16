import { initializeApp } from "firebase/app";
import { v4 as uuid } from 'uuid';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, update, onChildAdded, query, orderByChild, onChildChanged, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
const userRef = ref(database, "user");
const userQuery = query(userRef, orderByChild("phone"));


export function onUserChildAdded(callback) {
    onChildAdded(userQuery, async (user) => {
        callback(user.val());
    });
}

export function onUserChildChanged(callback) {
    onChildChanged(userQuery, async (user) => {
        callback(user.val());
    });
}

export function onUserValueChanged(callback) {
    onValue(userQuery, async (user) => {
        callback(user.val());
    });
}


export async function addUser(user) {
    const id = uuid();
    // console.log(id);
    return set(ref(database, `user/${id}`), {
        ...user,
        id,
        region: 'korea',
        phone: user.region + user.phone,
        state: 0,
        zone: 0,
        time:`${new Date().getHours()}:${new Date().getMinutes()}`        
    });
}
