const Blog = require('./models/blog');



const blogs = [
    {
        author: 'John',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    },
    {
        author: 'Mayank',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    },
    {
        author: 'Prince',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    },
    {
        author: 'Himanshu',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    },
    {
        author: 'Aqib',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    },
    {
        author: 'Aman',
        title: "First Blog",
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
    }
];


const seedDB = async () => {
    await Blog.bulkCreate(blogs);
    console.log("DB SEEDED!");
}

module.exports = seedDB;






