// models/QuizResult.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./User.js";
import Quiz from "./Quiz.js";

const QuizResult = db.define(
  "QuizResult",
  {
    result_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: "quiz_id",
      },
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "completed_at",
    updatedAt: false,
  }
);

User.hasMany(QuizResult, { foreignKey: "user_id" });
QuizResult.belongsTo(User, { foreignKey: "user_id" });

Quiz.hasMany(QuizResult, { foreignKey: "quiz_id" });
QuizResult.belongsTo(Quiz, { foreignKey: "quiz_id" });

export default QuizResult;