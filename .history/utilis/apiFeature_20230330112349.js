
class apiFeature{

   constructor(queryObject, mongooseQuery){
     this.queryObject = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search() {
    if(this.queryObject.){
        this.mongooseQuery= this.mongooseQuery.find({})

    }
     return this;
   }
}