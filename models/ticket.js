module.exports =(sequelize, DataTypes) => {
    const Ticket = sequelize.define('tickets', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          ticket_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'ticket_types',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          sell_by: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1
          },
          entry_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
          },
          wallet_url: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          paymnet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'payments',
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
        tableName: 'tickets'
    })

    return Ticket;
}