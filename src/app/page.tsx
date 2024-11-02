import Image from "next/image";
import Mobiles from "../app/public/mbl.png";
import Watch from "../app/public/watch.png";
import Headphone from "../app/public/headphone.png";
import Gamming from "../app/public/gaming.png";
import Computer from "../app/public/computer.png";
import Camera from "../app/public/camera.png";
import Screen from "../app/public/Screenshot 2024-10-24 183820.png";
import Iphone from "../app/public/Iphone Image.png";
import Iphonefourteen from "../app/public/Iphone 14 pro 1.png";
import Photography from "../app/public/photography.png";
import Applewatch from "../app/public/Iphone 14 pro 1 (1).png";
import Headphonepro from "../app/public/headphonepro.png";
import Normalwatch from "../app/public/Iphone 14 pro 1 (3).png"
import Singlemobile from "../app/public/singlemobile.png"
import Earpods from "../app/public/earbugs.png"
import Tablet from "../app/public/Iphone 14 pro 1 (4).png"
import Mackbook from "../app/public/Macbook 1.png"
import Smartwatch from "../app/public/Group 1.png"
import Secondmobile from "../app/public/image 41.png"
import Ipad from "../app/public/image 64.png"
import Bannertwo from "./public/Banner 2.png"
export default function Main() {
  return (
    <div>
      {/* Info Section */}
      <div className="info">
        <div className="info-text">
          <h3 className="title">Pro.Beyond.</h3>
          <h6 className="iphone">
            I Phone 14 <span>Pro</span>
          </h6>
          <h4 className="change">
            Created to change everything for the better. For everyone.
          </h4>

          {/* Shop Now Button */}
          <div className="total">
            <div className="shop-now"></div>
            <button>Shop Now</button>
          </div>
        </div>
        <Image
          src={Iphone}
          alt="Iphone"
          width={300}
          height={200}
          quality={100}
        />
      </div>

      {/* Banner Section */}
      <div>
        <Image
          className="bannerone"
          src={Screen}
          alt="Iphone"
          width={1400}
          height={1000}
          quality={100}
        />
      </div>

      {/* Category Section */}
      <section className="category-section">
        <div className="category-header">
          <h2>Browse By Category</h2>
          <div className="category-nav">
            <span className="arrow left">&lt;</span>
            <span className="arrow right">&gt;</span>
          </div>
        </div>
        <div className="categories">
          <div className="category-item">
            <Image
              src={Mobiles}
              alt="Phones"
              width={300}
              height={200}
              quality={100}
            />
            <p>Phones</p>
          </div>
          <div className="category-item">
            <Image
              src={Watch}
              alt="Smart Watches"
              width={300}
              height={200}
              quality={100}
            />
            <p>Smart Watches</p>
          </div>
          <div className="category-item">
            <Image
              src={Camera}
              alt="Cameras"
              width={300}
              height={200}
              quality={100}
            />
            <p>Cameras</p>
          </div>
          <div className="category-item">
            <Image
              src={Headphone}
              alt="Headphones"
              width={300}
              height={200}
              quality={100}
            />
            <p>Headphones</p>
          </div>
          <div className="category-item">
            <Image
              src={Computer}
              alt="Computers"
              width={300}
              height={200}
              quality={100}
            />
            <p>Computers</p>
          </div>
          <div className="category-item">
            <Image
              src={Gamming}
              alt="Gaming"
              width={300}
              height={200}
              quality={100}
            />
            <p>Gaming</p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <div className="container">
        <div className="tabs">
          <h4 className="tab">New Arrival</h4>
          <h4 className="tab">Bestseller</h4>
          <h4 className="tab">Featured Products</h4>
        </div>

        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Iphonefourteen}
              alt="iPhone"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple iPhone 14 Pro Max 128GB Deep Purple</h3>
            <p className="price">$900</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Photography}
              alt="Blackmagic Pocket Cinema Camera"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Blackmagic Pocket Cinema Camera 6k</h3>
            <p className="price">$2535</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Applewatch}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Headphonepro}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 5*/}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Normalwatch}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 6*/}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Singlemobile}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 7 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Earpods}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>
          {/* Product 8 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Tablet}
              alt="AirPods Max"
              width={300}
              height={200}
              quality={100}
            />
            <h3>AirPods Max Silver Starlight Aluminium</h3>
            <p className="price">$549</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* part 3 - Updated class names */}
      <div className="unique-product-wrapper">
        <div className="unique-product-card">
          <Image
            src={Smartwatch}
            alt="Earpods"
            width={300}
            height={200}
            quality={100}
          />
          <h3>Popular Products</h3>
          <p className="unique-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa nec eros tempus commodo.</p>
          <button className="unique-shop-now">Shop Now</button>
        </div>

        <div className="unique-product-card">
          <Image
            src={Ipad}
            alt="Earpods"
            width={300}
            height={200}
            quality={100}
          />
          <h3>Ipad Pro</h3>
          <p className="unique-description">Sed sit amet sapien vel nisi sodales malesuada. Nulla facilisi. Suspendisse nec orci quam.</p>
          <button className="unique-shop-now">Shop Now</button>
        </div>

        <div className="unique-product-card">
          <Image
            src={Secondmobile}
            alt="Earpods"
            width={300}
            height={200}
            quality={100}
          />
          <h3>Samsung Galaxy</h3>
          <p className="unique-description">Curabitur lobortis, libero non tempus tincidunt, lectus velit malesuada ex, vel fermentum leo metus sit.</p>
          <button className="unique-shop-now">Shop Now</button>
        </div>

        <div className="unique-product-card">
          <Image
            src={Mackbook}
            alt="Earpods"
            width={300}
            height={200}
            quality={100}
          />
          <h3>Macbook Pro</h3>
          <p className="unique-description">Vivamus efficitur, lectus in mollis fermentum, lacus velit cursus lacus, a suscipit sapien velit eget elit.</p>
          <button className="unique-shop-now">Shop Now</button>
        </div>
      </div>
      <br />

      {/* discount Section */}
      <div className="container">
        <div className="tabs">
          <h4 className="tab">Discounts Up to -50%</h4>

        </div>
        <br />
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Iphonefourteen}
              alt="iPhone"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple iPhone 14 Pro Max 128GB Deep Purple</h3>
            <p className="price">$900</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Photography}
              alt="Blackmagic Pocket Cinema Camera"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Blackmagic Pocket Cinema Camera 6k</h3>
            <p className="price">$2535</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Applewatch}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <div className="heart-icon">♡</div>
            <Image
              src={Headphonepro}
              alt="Apple Watch"
              width={300}
              height={200}
              quality={100}
            />
            <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
            <p className="price">$399</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Banner Section two */}
      <div>
        <Image
          className="bannerone"
          src={Bannertwo}
          alt="Iphone"
          width={1400}
          height={1000}
          quality={100}
        />
      </div>
    </div>
  );
}