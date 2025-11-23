const { NOT_AUTHORIZED } = require('../constants/ErrorMessageConstants');
const logger = require('./../logger');

const INTERNAL_API_AUTHENTICATION_STRING = 'JOBHAI-INTERNAL-a3f1c8e9b6d4f9a0e7c3b2a5f8d6a9b1' ;

const FILE_NAME = 'isInternalApiRequest.js';

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
    if (!req.headers || !req.headers.authorization) {
        console.error('No Authorization header found');
        logger.error('No Authorization header found', FILE_NAME, 'isInternalApiRequest');

        return res.sendLogoutResponse(NOT_AUTHORIZED);
    }
    if (req.headers.authorization !== INTERNAL_API_AUTHENTICATION_STRING) {
        console.error('Invalid Authorization header found');
        logger.error('Invalid Authorization header found', FILE_NAME, 'isInternalApiRequest');
        return res.sendLogoutResponse(NOT_AUTHORIZED);
    }
    next();
};
