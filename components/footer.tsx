import Image from "next/image"
import Secondlogo from "../src/app/public/secondlogo.png"
export default function Footer (){
    return (
        <div>
         <div className="footer">
  <div className="footer-container">
   
    <div className="footer-section">
    <Image className="logo" src={Secondlogo} alt="Logo" width={100} height={50} />
      <p className="description">
        We are a residential interior design firm located in Portland. Our boutique-studio offers more than
      </p>
    </div>

    <div className="footer-section">
      <h1 className="footer-heading">Services</h1>
      <ul className="footer-list">
        <li>Bonus program</li>
        <li>Gift cards</li>
        <li>Credit and payment</li>
        <li>Service contracts</li>
        <li>Non-cash account</li>
        <li>Payment program</li>
      </ul>
    </div>

  
    <div className="footer-section">
      <h1 className="footer-heading">Assistance to the buyer</h1>
      <ul className="footer-list">
        <li>Find an order</li>
        <li>Terms of delivery</li>
        <li>Exchange and return of goods</li>
        <li>Guarantee</li>
        <li>Frequently asked questions</li>
        <li>Terms of use of site</li>
      </ul>
    </div>
  </div>

  </div>
        </div>
    )
}