import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import { FirebaseConfig } from './.env.dev';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
