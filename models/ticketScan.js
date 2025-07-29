export default (sequelize, DataTypes) => {
    const TicketScans = sequelize.define('ticket_scans', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        ticket_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tickes',
                key: 'id'
            },
            onUpdate: Sequelize.literal('CASCADE'),
            onDelete: Sequelize.literal('CASCADE')
        },
        scan_by: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'staff',
                key: 'id'
            },
            onUpdate: Sequelize.literal('CASCADE'),
            onDelete: Sequelize.literal('CASCADE')
        },
        notes: {
            type: Sequelize.STRING,
            allowNull: true
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
        tableName: 'ticket_scans'
    })

    return TicketScans;
}