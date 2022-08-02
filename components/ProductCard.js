import Link from "next/link";
import AddToCartButton from "./cart/AddToCartButton";

const ProductCard = ({ data }) => {
    // console.log(data);
    const { name, price, image, slug } = data;

    return (
        <div className="card mb-3 mr-4">
            <h3 className="card-header text-center">{name}</h3>
            <Link href={`/product/${slug}`}>
                <a >
                    <img
                        src={image.sourceUrl}
                        alt="Product image"
                    />
                </a>
            </Link>
            <div className="card-body text-center">
                <h6 className="card-subtitle text-center">
                    {price}
                </h6>
                <AddToCartButton product={data} />
            </div>
        </div>
    );
}

export default ProductCard;