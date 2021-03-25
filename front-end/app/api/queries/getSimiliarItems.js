import { gql } from "@apollo/client";

export const SIMILARITEMS_QUERY = gql`
  query getSimilarItems($search: String) {
    getSimilarItems(search: $search) {
      title
      subtitle
      ean
      shoppingListGroupName1
      nutritionalContent {
        displayName
        amount
        unit
        name
      }
      allergen {
        name
        displayName
        code
      }
    }
  }
`;
