export const checkProductData = async (req, res, next) => {
    const {title , price, description, category, image } = req.body;
    const errors = [];

    if(!title){
        errors.push(" Please add product title")
    }
     if(!price){
            errors.push(" Please add product title")
        }
         if(!description){
                errors.push(" Please add product title")
            }
      if(!category){
                     errors.push(" Please add product title")
                 }

      if(!image){
                     errors.push(" Please add product title")
                 }

     for  (const key in req.body){
        if(!req.body[key]){
            errors.push(`please add product ${key}.`)
        }
     }
     if(errors.length > 0)
        return res.status(401).json({msg: errors});

     next();
}