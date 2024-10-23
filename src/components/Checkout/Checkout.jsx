import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        email: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [couponCode, setCouponCode] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleApplyCoupon = () => {
        console.log('Applying Coupon:', couponCode);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/; // Assuming a valid phone number has exactly 10 digits
        return phoneRegex.test(phone);
    };

    const handlePlaceOrder = () => {
        const { firstName, lastName, streetAddress, city, phoneNumber, email } = billingDetails;

        // Reset error messages
        setEmailError('');
        setPhoneError('');
        setGeneralError('');

        // General Validation Logic
        if (!firstName || !lastName || !streetAddress || !city) {
            setGeneralError('Please fill out all required fields.');
            return;
        }

        // Specific Validation Logic
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
        }

        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneError('Please enter a valid phone number (10 digits).');
        }

        // If there are any errors, do not proceed
        if (emailError || phoneError) {
            return;
        }

        // All validations passed
        console.log('Placing Order with:', billingDetails, paymentMethod);
    };

    return (
        <div className="checkout-container">
            <div className="billing-details">
                <h1>Billing Details</h1>
                <form>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name*" 
                        value={billingDetails.firstName}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name*" 
                        value={billingDetails.lastName}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="streetAddress" 
                        placeholder="Street Address*" 
                        value={billingDetails.streetAddress}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="apartment" 
                        placeholder="Apartment, floor, etc. (optional)" 
                        value={billingDetails.apartment}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="Town/City*" 
                        value={billingDetails.city}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        placeholder="Phone Number*" 
                        value={billingDetails.phoneNumber}
                        onChange={handleInputChange}
                    />
                    {phoneError && <p className="error-message">{phoneError}</p>} {/* Display phone number error */}
                    
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address*" 
                        value={billingDetails.email}
                        onChange={handleInputChange}
                    />
                    {emailError && <p className="error-message">{emailError}</p>} {/* Display email error */}
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="saveInfo" 
                        /> Save this information for faster checkout next time
                    </label>
                    {generalError && <p className="error-message">{generalError}</p>} {/* Display general error */}
                </form>
            </div>

            <div className="order-summary">
                <h2>Your Order</h2>
                <div className="order-item">
                    <span>Chocolate</span>
                    <span>$650</span>
                </div>
                <div className="order-item">
                    <span>Chocolate</span>
                    <span>$110</span>
                </div>
                <div className="order-total">
                    <span>Subtotal:</span>
                    <span>$760</span>
                </div>
                <div className="order-shipping">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="order-total">
                    <span>Total:</span>
                    <span>$760</span>
                </div>

                <div className="payment-options">
                    <h3>Payment Method</h3>
                    <label>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="bank"
                            checked={paymentMethod === 'bank'}
                            onChange={handlePaymentMethodChange}
                        /> Bank
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={handlePaymentMethodChange}
                        /> Cash on Delivery
                    </label>
                    <div className="payment-icons">
                        <i className="visa-icon"></i>
                        <i className="mastercard-icon"></i>
                        <i className="amex-icon"></i>
                    </div>
                </div>

                <div className="coupon-section">
                    <input 
                        type="text" 
                        placeholder="Coupon Code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button className="apply-coupon-btn" onClick={handleApplyCoupon}>Apply Coupon</button>
                </div>

                <button className="place-order-btn" onClick={handlePlaceOrder}>
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;
