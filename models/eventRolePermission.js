export default (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('event_role_permissions', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          event_role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'event_roles',
              key: 'id'
            },
          },
          permission_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'permissions',
              key: 'id'
            },
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
        tableName: 'event_role_permissions'
    })

    return RolePermission;
}