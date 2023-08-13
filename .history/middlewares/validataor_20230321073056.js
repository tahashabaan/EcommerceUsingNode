const validatorMiddlware = (req, res, next) => {

    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
       }  
     next();

}

<i class="fa fa-mars-double" aria-hidden="true"></i>