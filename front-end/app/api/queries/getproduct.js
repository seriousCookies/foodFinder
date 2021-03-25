import { gql } from "@apollo/client";

export const DATA_QUERY = gql`
  query products($search: String) {
    getProduct(search: $search) {
      title
      subtitle
      shoppingListGroupName
      shoppingListGroupName1
      ingredients
      weight
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
