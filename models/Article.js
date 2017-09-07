// Require mongoose
const mongoose = require("mongoose");

// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const ArticleSchema = new Schema({
    // title: a string
    title: {
        type: String
    },
    // body: a string
    web_url: {
        type: String
    },
    pub_date:{
        type: Date
    }
});

// Make a Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Export the Note model
module.exports = Article;