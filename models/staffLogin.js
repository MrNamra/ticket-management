module.exports =(sequelize, DataTypes) => {
    const StaffLogin = sequelize.define('staff_login', {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'staff',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, { 
        timestamps: true,
        tableName: 'staff_login'
    })

    return StaffLogin;
}