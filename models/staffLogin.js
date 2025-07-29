export default (sequelize, DataTypes) => {
    const StaffLogin = sequelize.define('staff_login', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      staff_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'staff',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, { 
        timestamps: true,
        tableName: 'staff_login'
    })

    return StaffLogin;
}