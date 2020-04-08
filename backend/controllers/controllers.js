const blogFunctions = require('../database/function/blogFunctions')

const html = async (req, res) => {
    try {
        let { html } = req.body
        let result = await blogFunctions.insertBlog(html);
        res.json({
            error: false,
            success: true,
            message: result
        });
    } catch (err) {
        console.log(err)
        res.json({
            error: true,
            success: false,
            message: err
        })
    }

}

const feed = async (req, res) => {
    try {
        let result = await blogFunctions.getAllBlogs()
        res.json({
            error: false,
            success: true,
            message: result
        })
    } catch (err) {
        console.log(err)
        res.json({
            error: true,
            success: false,
            message: err
        })
    }
}

exports.html = html;
exports.feed = feed;