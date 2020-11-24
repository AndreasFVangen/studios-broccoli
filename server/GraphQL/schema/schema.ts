import {graphqlTs, field, objectType} from 'graphql-ts'


@objectType
class root{
  @field
  hello():string{
   return "world"
  }
}
graphqlTs.init(new root());

var queryString = '{ hello }';
graphqlTs.query(queryString).then(result => {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);

});