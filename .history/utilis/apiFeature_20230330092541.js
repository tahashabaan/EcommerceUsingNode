
class apiFeature{

   constructor(queryObject, mongooseQuery){
     this.queryObject = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search(){
    this.mongooseQuery= this.mongooseQuery.find({})
    return 
   }
}