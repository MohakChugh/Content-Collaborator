const Blog = require('../model/blog')

const insertBlog = async content => {
    try {
        let blog = new Blog({ Content: content })
        console.log(`Blog: ${blog}`)
        return await blog.save();
    } catch (err) {
        console.log(err);
        return err;
    }
}

const getAllBlogs = async () => {
    try {
        let blogs = await Blog.find()
        return blogs;
    } catch (err) {
        console.log(err)
        return err;
    }
}

exports.insertBlog = insertBlog
exports.getAllBlogs = getAllBlogs