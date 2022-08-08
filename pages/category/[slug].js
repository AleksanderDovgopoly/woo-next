import React from 'react';
import client from '../../components/ApolloClient';
import gql from 'graphql-tag';

import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';


export const PRODUCT_BY_CATEGORY_SLUG = gql` query PRODUCT_BY_CATEGORY_SLUG($slug: ID!) {
	productCategory(id: $slug, idType: SLUG) {
	  id
	  name
	  products(first: 50) {
		nodes {
		  id
		  productId: databaseId
		  averageRating
		  slug
		  description
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
			regularPrice
			id
		  }
		  ... on VariableProduct {
			price
			regularPrice
			id
		  }
		  ... on ExternalProduct {
			price
			id
			regularPrice
		  }
		}
	  }
	}
  }
  `;

const CategoryPage = ({ categoryName, products }) => {
    console.log(products);
    return (
        <Layout>
            <div className='container'>
                {
                    categoryName
                        ? <h1 className='mt-5 text-center'>{categoryName}</h1>
                        : ''
                }
                <div className="product-container row">
                    {undefined !== products && products?.length ? (
                        products.map(product => <ProductCard key={product?.id} data={product} />)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
}

CategoryPage.getInitialProps = async function (context) {
    let { query: { slug } } = context;

    const { data } = await client.query(({
        query: PRODUCT_BY_CATEGORY_SLUG,
        variables: { slug }
    }));

    return {
        categoryName: data?.productCategory?.name ?? '',
        products: data?.productCategory?.products?.nodes ?? []
    }

};

export default CategoryPage
