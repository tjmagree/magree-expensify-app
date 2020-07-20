import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //     console.log(expenses)
// // });
    

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });


// // database.ref('expenses').push({
// //     description: 'Groceries',
// //     note: '',
// //     amount: 56,
// //     createdAt: 13444
// // });




// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const name = snapshot.val().name
// //     const jobTitle = snapshot.val().job.title
// //     const company = snapshot.val().job.company
// //     console.log(`${name} is a ${jobTitle} at ${company}`);
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // database.ref().set({
// //     name: 'Tim Magree',
// //     age: 32,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Columbus',
// //         country: 'United States'
// //     },
// // }).then(() => {
// //     console.log('Data is saved!')
// // }).catch((e) => {
// //     console.log('This failed.', e)
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(() => {
// //     console.log('Data is updated!')
// // }).catch((e) => {
// //     console.log('This failed.', e)
// // });;