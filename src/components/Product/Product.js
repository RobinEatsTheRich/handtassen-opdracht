function Product ({ labelText, imgSource, imgAlt, productName, productPrice, children }){
    return(
        <article>
            <span>
                {labelText}
            </span>
            <img
                src={imgSource}
                alt={imgAlt}
            />
            <p>
                {productName}
            </p>
            {children}
            <h4>
                {productPrice}
            </h4>
        </article>
    );
}
export default Product;