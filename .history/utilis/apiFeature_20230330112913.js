
class apiFeature{

   constructor(queryString, mongooseQuery){
     this.queryString = queryString;
     this.mongooseQuery = mongooseQuery;
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