
class apiFeature{

   constructor(queryString, mongooseQuery){
     this.queryString = queryString;
     this.mongooseQuery = mongooseQuery;
   } 

   filter() {
    let queryObject = {...this.queryString};

    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.foreach(item => delete queryObject[item]);
    let queryStr  = JSON.stringify(queryObject);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    queryObject = JSON.parse(queryStr)
   
    this.mongooseQuery = this.mongooseQuery.find(queryObject); 

   }

   paginate(){
    const page = this.queryString.page * 1||1; 
    const limit = this.queryString.limit * 1|| 50;
    const skip = (page-1) * limit;
    this.mongooseQuery =  this.mongooseQuery.find(this.queryString)
    .skip(skip)
    .limit(limit)
    .populate('catagory');
   }

   sort() {
    if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.mongooseQuery = this.mongooseQuery.sort(sortBy); 
    } else
    return this;
   }

   search() {
    if(this.queryString.title || this.queryString.description ) {

        this.queryString.title = new RegExp(this.queryString.title, 'i');
        this.queryString.description = new RegExp(this.queryString.description, 'i');

        this.mongooseQuery= this.mongooseQuery.find({...this.queryString})

    }
     return this;
   }

   fileds(){
    if(this.queryString.fields) 
    {
        const fileds =this.queryString.fields.split(',').join(' ');
        this.mongooseQuery = this.mongooseQuery.select(fileds); 
       }

   }
}