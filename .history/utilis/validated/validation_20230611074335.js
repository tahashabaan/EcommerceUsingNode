const {validationResult} = require('express-validator');

module.exports = validationMidllware( validations =>  // array of validad[check('name).notEmpty, check]
 async (req, res, next) => {
  // eslint-disable-next-line no-restricted-syntax
  for(const validation of validations){
    // eslint-disable-next-line no-await-in-loop
    const result = await validation.run(req);
    if(result.errors.length) break;
  }

}
) 