module.exports = (sequelize, DataTypes) => {
    const AdminLogin = sequelize.define('admin_login', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'admins',
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
        tableName: 'admin_login'
    });

    return AdminLogin;
};
