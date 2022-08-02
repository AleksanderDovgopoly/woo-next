import React from 'react';
import gql from 'graphql-tag';

import client from '../../components/ApolloClient';
import Layout from '../../components/Layout';

const ProductPage = ({ product }) => {
    // console.log('Product data: ', product);

    return (
        <Layout>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                </div>
            ) : 'Product data is empty!'}
        </Layout>
    )
}

ProductPage.getInitialProps = async function (context) {
    let { query: { slug } } = context;

    const { data, errors } = await client.query({
        query: gql` query Product($slug: ID!) {
                product(id: $slug, idType: SLUG) {
                id
                productId: databaseId
                averageRating
                slug
                description
                galleryImages {
                    nodes {
                        id
                        title
                        altText
                        mediaItemUrl
                    }
                }
                image {
                    id
                    uri
                    title
                    srcSet
                    sourceUrl
                }
                name
                ... on SimpleProduct {
                    price
                    id
                    regularPrice
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
        `,
        variables: { slug },
        errorPolicy: 'all'
    });

    return {
        product: data.product,
        errors
    }
};

export default ProductPage
