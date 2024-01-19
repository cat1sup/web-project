import db from "../dbConfig";
import Sequelize, { ModelDefined } from "sequelize";
import { UserAttributes } from "./User";

export interface ConferenceAttributes {
    ConferenceId: number,
    Reviewers: UserAttributes[]
};

export interface ConferenceCreationAttributes extends ConferenceAttributes { };

const Conference: ModelDefined<ConferenceAttributes, ConferenceCreationAttributes> = db.define("Conference", {
    ConferenceId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

export default Conference;