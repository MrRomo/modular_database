const admin = require('firebase-admin');

class firebase {

    constructor(env) {
        admin.initializeApp({
            credential: admin.credential.cert(env.serviceAccount),
            databaseURL: "https://testdatabase-96.firebaseio.com"
        });

        console.log('Connecting db...', admin.app().name);
        this.firestore = admin.firestore()
        console.log('DB Connected...', admin.app().name);
    }

    async sendError(error) {
        if (error.message) {
            return { data: null, message: `Error: ${error.message}`, error }
        } else {
            return { data: null, error }
        }
    }

    async get(query, collection, { sort, limit }) {
        try {
            let collectionRef = this.firestore.collection('check');
            let data = await collectionRef.doc().get()
            return { data }
        } catch (error) {
            return this.sendError(error)
        }
    }
    async create(object, collection) {
        try {
            let docRef = db.collection(colection)

            let setAda = docRef.set(object);
            return { data: saveData, message: 'Object Created' }
        } catch (error) {
            return this.sendError(error)
        }
    }
    async update({ query, options, array }, Schema) {
        try {
            const update = await Schema.updateOne(query, options, array || {})
            console.log(update);
            let data = await this.get(query, Schema, {})
            return { data: data.data, message: 'Object updated' }

        } catch (error) {
            return this.sendError(error)
        }
    }
    async delete(query, Schema) {
        try {
            await Schema.deleteMany(query)
            return { message: 'All documents were deleted' }
        } catch (error) {
            return this.sendError(error)
        }
    }
}

module.exports = firebase
