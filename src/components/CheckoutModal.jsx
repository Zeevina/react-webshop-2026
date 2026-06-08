function CheckoutModal({ showModal, orderData, onClose }) {
    
    return showModal ? (
        <div className="modal-overlay">
            <div className="checkout-modal">
                <div className="checkout-modal-container">
                    <h2>Order Complete!</h2>

                    {orderData && (
                        <p><strong>Order ID:</strong> {orderData.orderId}</p>
                    )}

                    <button className="checkout-modal-button" onClick={onClose}>Confirm</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default CheckoutModal;