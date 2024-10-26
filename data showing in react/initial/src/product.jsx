import "./Product.css";
import Price from "./Price";
import Button from "./button";
function Product({ title, idx }) {

    let oldPrices = ["1,000", "1,500", "3,200", "2,500"];
    let newPrices = ["900", "1,200", "3,000", "2,200"];
    let descriptions = [
        ["8,000 DPI", "5 Progammable Button"],
        ["Intuitive Surface", "Designed for iPads"],
        ["Designed for iPads Pro", "Intuitive Surface"],
        ["Pro", "Wireless"]];
    return (
        <>
            <div className="Product" >

                <h4>{title}</h4>
                <p>{descriptions[idx][0]}</p>
                <p>{descriptions[idx][1]}</p>
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            <Button />
            </div>
        </>

    );
}

export default Product;
