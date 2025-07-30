'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: { 
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ticket_type_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ticket_types',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sell_by: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
      },
      entry_count: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      wallet_url: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      paymnet_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'payments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};
