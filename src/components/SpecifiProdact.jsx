import { useParams } from "react-router-dom";
import "./SpecifiProdact.css"; // קובץ CSS לעיצוב
function SpecifiProdact() {
    const { name, maker, price, img, discraption } = useParams();
    return (
        <div className="product-container">
        <img src={`/Images/${img}`} alt={name} />
        <div className="product-text">
            <h1>{name}</h1>
            <p><h3>Description:</h3> {discraption}</p>
            <p><h3>Size:</h3> {maker}</p>
            <div className="price-container">
                <p><h3>Price:</h3> {price} ₪</p>
                <button className="buy-button">Add to Cart</button> {/* הכפתור ליד המחיר */}
            </div>
        </div>
    </div>
    
    );
}

export default SpecifiProdact;
