const reviewModal = require('../modlas/reviewModal');

const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById } =require('./handle/handlersFactory')

// @desc       create user modal  from database
// @route      post api/v1/review
// @access     private
exports.createReview = createDocument(reviewModal);

exports.getReviews = getDocuments(reviewModal)

exports.getReviewById = getDocumentById(reviewModal);

exports.updateReview = updataDocumentById(reviewModal);

exports.delReview = deleteDocumentById(reviewModal)
