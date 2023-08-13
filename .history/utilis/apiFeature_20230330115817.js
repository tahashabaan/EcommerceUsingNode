
class apiFeature{

   constructor(queryString, mongooseQuery){
     this.queryString = queryString;
     this.mongooseQuery = mongooseQuery;
   } 

   filtration() {
    let queryObject = {...this.queryString};

    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.foreach(item => delete queryObject[item]);
    let queryString  = JSON.stringify(queryObject);
    queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    queryObject = JSON.parse(queryString)
   
    this.mongooseQuery = this.mongooseQuery.find(queryObject); 

   }

   paginate(){
    const page = this.queryString.page * 1||1; 
    const limit = this.queryString.limit * 1|| 50;
    const skip = (page-1) * limit;
    this.mongooseQuery =  this.mongooseQuery.find(queryObject)
    .skip(skip)
    .limit(limit)
    .populate('catagory');
   }

   sort() {
    if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.mongooseQuery = this.mongooseQuery.sort(sortBy); 
    }
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
}