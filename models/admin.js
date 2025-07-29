export default (sequelize, DataTypes) => {
  const Admin = sequelize.define('admins', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    role: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: '0 => org/admin, 1 => superadmin'
    },
    status: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: '0 => block/inactive, 1 => active'
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  }, {
    paranoid: true,
    timestamps: true,
    tableName: 'admins'
  });

  return Admin;
};
