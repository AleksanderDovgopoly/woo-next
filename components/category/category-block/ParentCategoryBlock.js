import Link from 'next/link';
import React from 'react';

const ParentCategoryBlock = ({ category }) => {
    console.log(category);
    return (
        <div className='woo-category-block col-lg-3 col-md-6 col-sm-12'>
            <h1 className='bg-gray-100 card-header text-center'>{category.name}</h1>
            <Link href={`/category/${category.slug}`}>
                <a>
                    <img src={null !== category.image ? category.image.sourceUrl : ''} />
                </a>
            </Link>
        </div>
    )
}

export default ParentCategoryBlock;
