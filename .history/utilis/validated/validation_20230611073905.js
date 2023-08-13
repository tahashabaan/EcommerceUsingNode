const {validationResult} = require('express-validator');

module.exports = validationMidllware( validations =>  // array of validad
 async (req, res, next) => {
  for(let validation of validations)

}
) 