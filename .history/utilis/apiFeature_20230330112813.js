
class apiFeature{

   constructor(queryObject, mongooseQuery){
     this.queryS = queryObject;
     this.mongooseQuery = mongooseQuery;
   } 

   search() {
    if(this.queryObject.title || this.queryObject.description ) {

        this.queryObject.title = new RegExp(this.queryObject.title, 'i');
        this.queryObject.description = new RegExp(this.queryObject.description, 'i');

        this.mongooseQuery= this.mongooseQuery.find({})

    }
     return this;
   }
}