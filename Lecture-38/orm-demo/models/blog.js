const {DataTypes } = require('sequelize');

const Blog = sequelize.define('Blog', {
   
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    author: {
        type:DataTypes.STRING
    },
    content: {
        type:DataTypes.TEXT
    },
    img: {
        type:DataTypes.STRING
    }

});

Blog.sync()
    .then(() => console.log("Table Created"))
    .catch((err) => console.log(err));


module.exports = Blog;