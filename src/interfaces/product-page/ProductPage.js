/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Gallery from "react-grid-gallery";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/cartSlice";
import "./productPage.scss";

function ProductPage() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const IMAGES = [
    {
      src: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
  ];

  const style = () => ({
    borderRadius: "13px",
    width: "70px",
    background: "white",
  });

  return (
    <div className="productPage">
      <div className="product_images">
        <img
          className="selected_image"
          src="/images/image-product-1.jpg"
          alt=""
        />
        <Gallery
          images={IMAGES}
          enableImageSelection={false}
          showLightboxThumbnails
          showImageCount={false}
          thumbnailStyle={style}
          tileViewportStyle={style}
          margin={10}
        />
      </div>
      <div className="product_content">
        <div className="product_company">
          <h4>SNEAKER COMPANY</h4>
        </div>
        <div className="product_name">
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="product_description">
          <p>
            These low-profile sneakers are you perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price">
          <div className="product_price">
            <p>$125.00</p>
            <span>50%</span>
          </div>
          <div className="product_oldPrice">
            <strike>$250.00</strike>
          </div>
        </div>
        <div className="button">
          <div className="button_number">
            <button
              className="button_decrement but"
              onClick={() => number > 0 && setNumber(number - 1)}
              type="button"
            >
              -
            </button>
            <p className="number">{number}</p>
            <button
              onClick={() => setNumber(number + 1)}
              className="button_increment but"
              type="button"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              dispatch(
                addProduct({
                  image: "/images/image-product-1.jpg",
                  name: "Fall Limited Edition Sneakers",
                  number,
                  price: 125,
                })
              );
              setNumber(0);
            }}
            className="button_addToCart"
            type="button"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
