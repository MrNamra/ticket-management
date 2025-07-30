'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feedbacks', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'events',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      stars: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      review: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feedbacks');
  }
};
