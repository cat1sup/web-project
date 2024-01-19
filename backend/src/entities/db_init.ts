import mysql from 'mysql2/promise.js'
import env from 'dotenv';
import User from './User';
import Conference from './Conference';
import { Reviewers } from './dbConst';

env.config();

function createDatabase() {
    mysql.createConnection({
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }).then((connection) => {
        return connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`)
    }).catch((error) => {
        console.warn(error.stack)
    })
}

function fkConfig() {
    Conference.hasMany(User, { as: Reviewers, foreignKey: 'ConferenceId' });
    User.belongsTo(Conference, { foreignKey: 'UserConference' });
}

function db_init() {
    createDatabase();
    fkConfig();
}

export default db_init;