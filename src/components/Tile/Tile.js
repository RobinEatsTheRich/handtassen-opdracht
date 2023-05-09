function Tile ({ imgSource, imgAlt, titleText, bodyText, children }){
    return(
        <section>
            <img
                src={imgSource}
                alt={imgAlt}
            />
            {children}
            <h2>
                {titleText}
            </h2>
            <p>
                {bodyText}
            </p>
            {children}
        </section>
    );
}
export default Tile;