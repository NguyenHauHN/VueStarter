import gql from 'graphql-tag'

const QUERY = {
  users: gql` 
    query users(
      $where: UserWhere,
      $order: [String],    
      $limit: Int,
      $offset: Int
    ){
        users(
          where: $where,
          order: $order,        
          limit: $limit,        
          offset: $offset      
        ){
            total
            results{          
              _id
            }
        }
    }`,
}

const MUTATION = {

}

const SUBSCRIPTION = {

}

export {
  QUERY,
  MUTATION,
  SUBSCRIPTION
}
