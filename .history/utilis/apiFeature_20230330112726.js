
class apiFeature{

   constructor(queryObject, mongooseQuery){
     this.queryObject = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search() {
    if(this.queryObject.title || this.queryObject.description ) {
        this.queryObject.title = new Re
        this.mongooseQuery= this.mongooseQuery.find({})

    }
     return this;
   }
}