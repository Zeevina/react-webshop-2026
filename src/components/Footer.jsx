export default function Footer() {
    return(
        <footer className="footer">

            <div className="footer-container">
                
                <div className="footer-section-about">
                    <h3>About Us</h3>
                    <p>MyWebshop is your trusted online store for quality products.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping Info</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 MyWebshop. All rights reserved.</p>
            </div>
        </footer>
    )
}