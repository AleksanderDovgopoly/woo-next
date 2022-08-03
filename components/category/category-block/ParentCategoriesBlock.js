import React from 'react';
import ParentCategoryBlock from './ParentCategoryBlock';

const ParentCategoriesBlock = ({ productCategories }) => {
    return (
        <div className='product-container row d-flex justify-content-center'>
            {
                productCategories.length ? (
                    productCategories.map(productCategory =>
                        <ParentCategoryBlock
                            key={productCategory.id}
                            category={productCategory}
                        />
                    )
                ) : ''
            }
        </div>
    )
}

export default ParentCategoriesBlock;
