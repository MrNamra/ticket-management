export default (sequelize, DataTypes) => {
    const TicketType = sequelize.define('ticket_types', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        event_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'events',
                key: 'id',
            },
            onUpdate: Sequelize.literal('CASCADE'),
            onDelete: Sequelize.literal('CASCADE')
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        entry_count: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 1
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
        tableName: 'ticket_types'
    })

    return TicketTypes;
}