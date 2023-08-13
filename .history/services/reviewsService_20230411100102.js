const reviewModal = require('../modlas/reviewModal');

const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById } =require('./handle/handlersFactory')

// @desc       create review from database
// @route      post api/v1/review
// @access     public
exports.createReview = createDocument(reviewModal);

// @desc       get reviews from database
// @route      post api/v1/review
// @access     public
exports.getReviews = getDocuments(reviewModal)

exports.getReviewById = getDocumentById(reviewModal);

exports.updateReview = updataDocumentById(reviewModal);

exports.delReview = deleteDocumentById(reviewModal)
