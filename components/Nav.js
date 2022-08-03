import Link from 'next/link';
import CartIcon from './cart/CartIcon';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link href="/" >
                    <a className="navbar-brand">WooNext</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/shop">
                                <a className="nav-link">Shop</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categories">
                                <a className="nav-link">Categories</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cart">
                                <a className="nav-link">Cart</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <CartIcon />
                </div>
            </div>
        </nav>
    );
}

export default Nav;