import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { ToastContainer, toast } from 'react-toastify';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

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

        if (!phoneNumber || phoneNumber.length !== 13) {
            setPhoneError('Please enter a valid phone number (10 digits after country code).');
        }

        // If there are any errors, do not proceed
        if (emailError || phoneError) {
            return;
        }

        // All validations passed
        console.log('Placing Order with:', billingDetails, paymentMethod);

        // Show success toast and redirect after 3 seconds
        toast.success("Order placed successfully! 😊", {
            onClose: () => navigate('/'), // Redirect to home after toast closes
            autoClose: 3000,
        });
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

                    <PhoneInput
                        international
                        defaultCountry="IN"
                        countryCallingCodeEditable={false}
                        placeholder="Phone Number"
                        value={billingDetails.phoneNumber}
                        onChange={(value) => setBillingDetails({ ...billingDetails, phoneNumber: value })}
                        className="form-input phone-input"
                    />
                    {phoneError && <p className="error-message">{phoneError}</p>}

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address*" 
                        value={billingDetails.email}
                        onChange={handleInputChange}
                    />
                    {emailError && <p className="error-message">{emailError}</p>}
                    
                    {generalError && <p className="error-message">{generalError}</p>}
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
                </div>

                <button className="place-order-btn" onClick={handlePlaceOrder}>
                    Place Order
                </button>
            </div>

            {/* Toast container for displaying toast messages */}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Checkout;
