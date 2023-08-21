import sequelize from '../config/sequelize';
import UserModelInit from './user';

const UserModel = UserModelInit(sequelize);

export {UserModel};
