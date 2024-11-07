import shopifyFetch from "./shopifyFetch";

const getProduct = async (id) => {
  return shopifyFetch({
    query: `
   query getProduct($id: ID!) {
     product(id: $id) {
       id
       title
       description
       priceRange {
         minVariantPrice {
           amount
           currencyCode
         }
       }
       featuredImage {
         url
         altText
       }
     }
   }
 `,
 variables: { id }
});
};

export default getProduct;
