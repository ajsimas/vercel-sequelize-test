import {Sequelize, DataTypes} from 'sequelize';

export default function UserModel(sequelize: Sequelize) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    uuid: DataTypes.STRING,
  });

  return User;
}
