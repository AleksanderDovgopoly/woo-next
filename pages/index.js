import gql from 'graphql-tag';

import client from '../components/ApolloClient';
import Layout from "../components/Layout";
import ProductCard from '../components/ProductCard';

const PRODUCTS_QUERY = gql`query {
    products(first: 50) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        regularPrice
        id
      }
      ... on VariableProduct {
        price
        id
        regularPrice
      }
      ... on ExternalProduct {
        price
        id
        regularPrice
      }
    }
  }
}`;

const Index = (props) => {
    const { products } = props;

    return (
        <Layout>
            <div className='product-container'>
                {products.length ? (
                    products.map((product, index) =>
                        <ProductCard key={index} data={product} />
                    )
                ) : 'Empty products'}
            </div>

        </Layout>
    )
}

Index.getInitialProps = async () => {
    const result = await client.query({ query: PRODUCTS_QUERY });

    // console.log(result);
    return {
        products: result.data.products.nodes
    }
};

export default Index;