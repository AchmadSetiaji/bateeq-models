'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class PromoCriteria extends BaseModel {
    constructor(source) {
        super('promo-criteria', '1.0.0');
   
        this.type = '';
        this.criterions = [];
        
        this.copy(source);
    }
}