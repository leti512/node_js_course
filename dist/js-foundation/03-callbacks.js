"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
function getUserById(id, callback) {
    // users.find( user => user.id === id);
    const user = users.find(function (user) {
        return user.id === id;
    });
    //console.log({ user });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(null, user);
}
exports.getUserById = getUserById;
