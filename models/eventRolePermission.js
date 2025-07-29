module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('event_role_permissions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          event_role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'event_roles',
              key: 'id'
            },
          },
          permission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'permissions',
              key: 'id'
            },
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
        tableName: 'event_role_permissions'
    })

    return RolePermission;
}