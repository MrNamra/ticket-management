module.exports =(sequelize, DataTypes) => {
    const StaffRole = sequelize.define('staff_role_handlers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        staff_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'staff',
                key: 'id'
            },
        },
        event_role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event_roles',
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
        tableName: 'staff_role_handlers'
    })

    return StaffRole;
}