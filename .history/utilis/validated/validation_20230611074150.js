const {validationResult} = require('express-validator');

module.exports = validationMidllware( validations =>  // array of validad[]
 async (req, res, next) => {
  for(const validation of validations){
    const result = await validation.run(req);
    if(result.errors.length) break;
  }

}
) 