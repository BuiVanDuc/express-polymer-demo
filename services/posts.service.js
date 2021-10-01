var db = require('../models')

function create(input_title, input_content) {
    return db.posts.create({
        title: input_title,
        content: input_content,
    });
}


function getAll() {
    return db.posts.findAll().then(function (posts){
        return posts.map(function(post){
            return {
                title: post.title,
                content: post.content,
            };
        })
    })
}

module.exports ={
    create,
    getAll
}
