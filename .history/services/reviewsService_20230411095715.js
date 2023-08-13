const reviewModal = require('../modlas/reviewModal');

const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById } =require('./handle/handlersFactory')


exports.createReview = createDocument(reviewModal);

exports.getReviews = getDocuments(reviewModal)

exports.getReviewById = getDocumentById(reviewModal);

exports.delReview = deleteDocumentById()
