const reviewModal = require('../modlas/reviewModal');

const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById } =require('./handle/handlersFactory')

// @desc       create review from database
// @route      post api/v1/review
// @access     private
exports.createReview = createDocument(reviewModal);

// @desc       get reviews from database
// @route      post api/v1/reviews
// @access     public
exports.getReviews = getDocuments(reviewModal)

// @desc       get review from database
// @route      post api/v1/reviews
// @access     public
exports.getReviewById = getDocumentById(reviewModal);

// @desc       get review from database
// @route      post api/v1/reviews
// @access     p
exports.updateReview = updataDocumentById(reviewModal);

// @desc       get review from database
// @route      post api/v1/reviews
// @access     p
exports.delReview = deleteDocumentById(reviewModal)
