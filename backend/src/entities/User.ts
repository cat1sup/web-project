import db from "../dbConfig";
import Sequelize from "sequelize";

export interface UserAttributes {
    UserId: Number,
    UserFirstName: String,
    UserLastName: String,
    UserType: String,
    UserConference: Number
};

export interface UserCreateAttributes extends UserAttributes { };

const User = db.define("User", {
    UserId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    UserFirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserLastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserConference: {
        type: Sequelize.INTEGER
    }
});

export default User;