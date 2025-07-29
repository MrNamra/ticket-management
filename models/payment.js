export default (sequelize, DataTypes) => {
    const Payment = sequelize.define('payments', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        event_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'events',
                key: 'id'
            },
            onUpdate: Sequelize.literal('CASCADE'),
            onDelete: Sequelize.literal('CASCADE')
        },
        email: {
            type: Sequelize.email,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        payment_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        trangaction_id: {
            type: Sequelize.STRING,
            allowNull: false
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
        tableName: 'payments'
    })

    return Payment;
}