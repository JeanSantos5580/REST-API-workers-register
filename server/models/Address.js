const User = require('../models/User.js')

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Adress', {
        street: {
            type: DataTypes.STRING,
            required: true
        },
        number: {
            type: DataTypes.STRING,
            required: true
        },
        city: {
            type: DataTypes.STRING,
            required: true
        },
    })

    Address.associate = models => {
        Address.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Address
}