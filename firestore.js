const admin = require('firebase-admin');


const db = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://test-db-fa228.firebaseio.com"
});
console.log('connecting');
console.log(db.name);  // '[DEFAULT]'

// Retrieve services via the db variable...
var auth = db.auth();
var firestore = db.database();

setTimeout(async () => {
    const object = {
        nombre: 'ricardo',
        apellido: 'romo'
    }
    db.collection('users').doc().set(object)
    console.log('connected');
}, 100)

