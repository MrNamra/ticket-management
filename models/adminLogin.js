export default (sequelize, DataTypes) => {
    const AdminLogin = sequelize.define('admin_login', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        },
        admin_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'admins',
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
        tableName: 'admin_login'
    });

    return AdminLogin;
};
