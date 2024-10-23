import React, { useState } from 'react';
import './EditProfile.css';
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const EditProfile = () => {
    const [profileDetails, setProfileDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({
            ...profileDetails,
            [name]: value
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!profileDetails.firstName.trim()) {
            formErrors.firstName = "First name is required";
        }
        if (!profileDetails.lastName.trim()) {
            formErrors.lastName = "Last name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!profileDetails.email || !emailRegex.test(profileDetails.email)) {
            formErrors.email = "Valid email is required";
        }
        if (!profileDetails.address.trim()) {
            formErrors.address = "Address is required";
        }
        if (profileDetails.newPassword !== profileDetails.confirmPassword) {
            formErrors.password = "Passwords do not match";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSaveChanges = () => {
        if (validateForm()) {
            console.log('Profile updated with:', profileDetails);
            // Implement save logic here
        } else {
            console.log("Form validation failed");
        }
    };

    const handleCancel = () => {
        console.log('Changes canceled');
    };

    return (
        <>
          <Banner />
          <Navbar />
          <div className="edit-profile-container">
            <div className="sidebar">
                <h3>Manage My Account</h3>
                <ul>
                    <li>My Profile</li>
                    <li>Address Book</li>
                    <li>My Payment Options</li>
                </ul>
                <h3>My Orders</h3>
                <ul>
                    <li>My Returns</li>
                    <li>My Cancellations</li>
                </ul>
                <h3>My Wishlist</h3>
            </div>

            <div className="profile-edit-form">
                <h1 className='edit'>Edit Your Profile</h1>
                <form>
                    <div className="form-row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={profileDetails.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={profileDetails.lastName}
                            onChange={handleInputChange}
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>

                    <div className="form-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={profileDetails.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={profileDetails.address}
                            onChange={handleInputChange}
                        />
                        {errors.address && <span className="error">{errors.address}</span>}
                    </div>

                    <h3>Password Changes</h3>
                    <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={profileDetails.currentPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={profileDetails.newPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={profileDetails.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type="button" className="save-btn" onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
          </div>
          <Footer />
        </>
    );
};

export default EditProfile;
