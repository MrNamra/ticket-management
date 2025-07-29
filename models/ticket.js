export default (sequelize, DataTypes) => {
    const Ticket = sequelize.define('tickets', {
        id: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          ticket_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'ticket_types',
              key: 'id'
            },
            onUpdate: Sequelize.literal('CASCADE'),
            onDelete: Sequelize.literal('CASCADE')
          },
          sell_by: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          status: {
            type: Sequelize.TINYINT,
            allowNull: false,
            defaultValue: 1
          },
          entry_count: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false
          },
          wallet_url: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          paymnet_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'paymnets',
              key: 'id'
            }
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
        tableName: 'tickets'
    })

    return Tickets;
}