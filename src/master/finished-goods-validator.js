require("should");
var validateItemWithComponent = require('./item-w-component-validator');

module.exports = function (data) {
    validateItemWithComponent(data);

    data.should.have.property('articleId');
    data.articleId.should.instanceof(Object);

    data.should.have.property('article');
    data.article.should.instanceof(Object);

    data.should.have.property('size');
    data.size.should.instanceof(String);

    data.should.have.property('imagePath');
    data.imagePath.should.instanceof(String);

    data.should.have.property('motifPath');
    data.motifPath.should.instanceof(String);

    data.should.have.property('colorCode');
    data.colorCode.should.instanceof(String);

    data.should.have.property('colorDoc');
    data.colorDoc.should.instanceof(Object);

    data.should.have.property('motifDoc');
    data.motifDoc.should.instanceof(Object);

    // data.should.have.property('realizationOrderName');
    // data.realizationOrderName.should.instanceof(String);

    data.should.have.property('processDoc');
    data.processDoc.should.instanceof(Object);

    data.should.have.property('materialDoc');
    data.materialDoc.should.instanceof(Object);

    data.should.have.property('materialCompositionDoc');
    data.materialCompositionDoc.should.instanceof(Object);

    data.should.have.property('collectionDoc');
    data.collectionDoc.should.instanceof(Object);

    data.should.have.property('seasonDoc');
    data.seasonDoc.should.instanceof(Object);

    data.should.have.property('counterDoc');
    data.counterDoc.should.instanceof(Object);

    data.should.have.property('styleDoc');
    data.styleDoc.should.instanceof(Object);

    data.should.have.property('domesticCOGS');
    data.domesticCOGS.should.be.Number();

    data.should.have.property('domesticWholesale');
    data.domesticWholesale.should.be.Number();

    data.should.have.property('domesticRetail');
    data.domesticRetail.should.be.Number();

    data.should.have.property('domesticSale');
    data.domesticSale.should.be.Number();

    data.should.have.property('internationalCOGS');
    data.internationalCOGS.should.be.Number();

    data.should.have.property('internationalWholesale');
    data.internationalWholesale.should.be.Number();

    data.should.have.property('internationalRetail');
    data.internationalRetail.should.be.Number();

    data.should.have.property('internationalSale');
    data.internationalSale.should.be.Number();

};