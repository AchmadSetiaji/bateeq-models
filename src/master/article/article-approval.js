'use strict';

var BaseModel = require('model-toolkit').BaseModel;

var Article = require('./article');

module.exports = class ArticleApproval extends BaseModel {
    constructor(source) {
        super('article-approval', '1.0.0');

        // Define properties.
        this.code = ''; 
        this.version = '1.0';
        this.date = new Date();
        
        this.articleId = {};
        this.article = new Article();
        
        this.remark = '';
        this.approved = false;
        this.rejected = false;
        this.locked = false;
        
        this.copy(source);
    }
}