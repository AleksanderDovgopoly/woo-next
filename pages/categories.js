import React from 'react';
import gql from 'graphql-tag';
import client from '../components/ApolloClient';
import Layout from '../components/Layout';
import ParentCategoriesBlock from '../components/category/category-block/ParentCategoriesBlock';

const CATERGORIES_QUERY = gql` query {
    productCategories(first: 3) {
        nodes {
            id
            name
            slug
            image {
                sourceUrl
            }
        }
    }
}`;

const Categories = ({ productCategories }) => {
    return (
        <Layout>
            {/* Categories */}
            <div className='text-center mt-5'>
                <h2>Categories</h2>
                <ParentCategoriesBlock
                    productCategories={productCategories}
                />
            </div>
        </Layout>
    )
}

Categories.getInitialProps = async () => {
    const result = await client.query({
        query: CATERGORIES_QUERY
    });

    return {
        productCategories: result.data.productCategories.nodes
    }
};

export default Categories;
