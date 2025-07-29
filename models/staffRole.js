export default (sequelize, DataTypes) => {
    const StaffRole = sequelize.define('staff_role_handlers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        staff_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'staff',
                key: 'id'
            },
        },
        event_role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'event_roles',
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
        tableName: 'staff_role_handlers'
    })

    return StaffRole;
}