import { gql } from "@apollo/client";

export const GET_ALL_QUERIES = gql`
query {
    qraftstores {
      data {
        id
        attributes {
          title
          size
          material
          price
          file {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
