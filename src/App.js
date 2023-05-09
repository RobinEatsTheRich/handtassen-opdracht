import React from 'react';

import './App.css';
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Button from "./components/Button/Button";
import Product from "./components/Product/Product";
import Tile from "./components/Tile/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonType="Button"
                    isDisabled={false}
                >To the collection
                </Button>

                <Button
                    buttonType="Button"
                    isDisabled={false}
                >Shop all bags
                </Button>

                <Button
                    buttonType="Button"
                    isDisabled={false}
                >Pre-orders
                </Button>
            </nav>
            <main>
                <Product
                    labelText="Best Seller"
                    imgSource={bag1}
                    imgAlt="A fabulous soft pink handbag"
                    productName="The handy bag"
                    productPrice="€400,-"
                ></Product>
                <Product
                    labelText="Best Seller"
                    imgSource={bag2}
                    imgAlt="A nifty leathery purse"
                    productName="The stylish bag"
                    productPrice="€250,-"
                ></Product>
                <Product
                    labelText="New collection"
                    imgSource={bag3}
                    imgAlt="A chique olive handbag"
                    productName="The simple bag"
                    productPrice="€300,-"
                ></Product>
                <Product
                    labelText="New collection"
                    imgSource={bag4}
                    imgAlt="A gorgeous golden purse"
                    productName="The trendy bag"
                    productPrice="€150,-"
                ></Product>
            </main>
            <footer>
                <Tile
                    titleText="The Brand"
                    bodyText="lorum ipsum whatever"
                >
                </Tile>
                <Tile
                    imgSource={brand}
                    imgAlt="A sleek box with the logo displayed"
                >
                </Tile>
                <Tile
                    imgSource={ourStory}
                    imgAlt="Two girlbosses posing in a hug"
                >
                </Tile>
                <Tile
                    titleText="Our Story"
                    bodyText="lorum ipsum whatever"
                >
                </Tile>
            </footer>
        </>
    );
}

export default App;



