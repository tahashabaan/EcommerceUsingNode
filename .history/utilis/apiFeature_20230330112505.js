
class apiFeature{

   constructor( , mongooseQuery){
     this.queryObject = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search() {
    if(this.queryObject.title || this.queryObject.description ) {

        this.mongooseQuery= this.mongooseQuery.find({})

    }
     return this;
   }
}