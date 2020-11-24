import {field, objectType} from 'graphql-ts'

@objectType
class root{
  @field
  hello():string{
    return "world"
  }
}

//That is the entry point of the schema
graphqlTs.init(new root());