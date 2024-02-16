module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            required: true
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
        }
    })
    return User
}