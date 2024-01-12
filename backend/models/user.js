import {Sequelize } from 'sequelize';
import db from '../config/database.js';

const user = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
        allowNull: false,
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	usertype: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

export default user;
