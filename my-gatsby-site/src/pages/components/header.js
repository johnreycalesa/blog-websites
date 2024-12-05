import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold"> My Blog Site </Link>

                {/* Navigation Links */}
                <div className="flex flex-row gap-4">
                    <Link to="/" className="hover:text-gray-200"> Home </Link>
                    <Link to="/blog" className="hover:text-gray-200"> Blogs </Link>
                    <Link to="/about" className="hover:text-gray-200"> About </Link>
                    <Link to="/contact" className="hover:text-gray-200"> Contact </Link>
                    <Link to="/blog" className="hover:text-gray-200"> Blog </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;

export const Head = () => <title>Header</title>