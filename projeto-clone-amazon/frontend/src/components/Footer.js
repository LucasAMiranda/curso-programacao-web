import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="footer1">
                <h4>Back to top</h4>
            </div>
            <div className="footer-middle">
                <div className="footer-row">
                    <h3>GET to Know US</h3>
                    <h5>About Us</h5>
                    <h5>Careers</h5>
                    <h5>Press Release</h5>
                    <h5>Amazon Cities</h5>
                    <h5>Gift a Smile</h5>
                </div>
                <div className="footer-row">
                    <h3>Connect with Us</h3>
                    <h5>Facebook</h5>
                    <h5>Twitter</h5>
                    <h5>Instagram</h5>
                </div>
                <div className="footer-row">
                    <h3>Make Money with Us</h3>
                    <h5>Sell on Amazon</h5>
                    <h5>Sell under Amazon Accelerator</h5>
                    <h5>Advertise Your Products</h5>
                    <h5>Amazon Pau on Merchants</h5>
                </div>
                <div className="footer-bootom">
                    <img src="./amazon-logo-main.png" className="footer-logo" alt="imagem-logo-amazon"/>
                    <div className="footer-bottom-two">
                        <h6>Australia</h6>
                        <h6>Brazil</h6>
                        <h6>Canada</h6>
                        <h6>China</h6>
                        <h6>France</h6>
                        <h6>Germany</h6>
                        <h6>Italy</h6>
                        <h6>Japan</h6>
                        <h6>Mexico</h6>
                        <h6>Netherlands</h6>
                        <h6>Singapore</h6>
                        <h6>Spain</h6>
                        <h6>United Arab Emirates</h6>
                        <h6>United Kingdom</h6>
                        <h6>United States</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;