import shopifyFetch from "./shopify";

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
});
};

export default getProduct;
