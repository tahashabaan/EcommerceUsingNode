
class apiFeature{

   constructor(queryObject, mongooseQuery){
     this.queryObject = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search() {
    if(queryObject)
     this.mongooseQuery= this.mongooseQuery.find({})
     return this;
   }
}