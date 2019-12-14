const database = require('.')

let serviceAccount = require('./testDatabase-d9ad68e4276d.json')
async function connect() {
    return await new database.firebase({serviceAccount})
}

async function createUser() {
    const firebase = await connect()
    const newuser = await firebase.create({
        firstname: 'Ricardo',
        age: Date.now(),
        admin: true
    }, user)
    console.log(newuser);
}
async function getUsers() {
    const firebase = await connect()
    const newuser = await firebase.get({}, 'check', { limit: 0 })
    console.log(newuser);
    
}
async function getOneUser() {
    const firebase = await connect()
    setTimeout(async () => {
        const newuser = await firebase.get(123, user, {})
        console.log(newuser);
    }, 2000)
}
async function updateUser() {
    const firebase = await connect()
    setTimeout(async () => {
        const object = {
            query: { '_id': '5defb8782741827983a31fdd' },
            options: { firstname: 'camilo2' }
        }
        const newuser = await firebase.update(object, user)        
        if (newuser.error) {
            console.log(newuser.message);
        } else {
            console.log(newuser);
        }
    }, 2000)
}
async function deleteUser() {
    const firebase = await connect()
    setTimeout(async () => {
        const newuser = await firebase.delete({ '_id': '5defb144c07f7364e35ca745' }, user)
        console.log(newuser);
    }, 2000)
}

getUsers()