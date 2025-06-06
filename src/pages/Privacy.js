import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
            <nav className="navbar navbar-expand-lg lightgrey">
                <div className="container-fluid p-3 px-4">
                    <Link className="navbar-brand" to="/">
                        <img src="images/Logo.png" alt="PharmaQue Logo" className="logo img-fluid" />
                        <span className="fs-3 fw-bold darkfont">PharmaQue</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item p-1 px-3">
                                <Link className="nav-link fs-4 darkfont" to="/">Home</Link>
                            </li>
                            <li className="nav-item p-1 px-3">
                                <Link className="nav-link fs-4 darkfont" to="/about">About</Link>
                            </li>
                            <li className="nav-item p-1 px-3">
                                <Link className="nav-link fs-4 darkfont" to="/plans">Plans</Link>
                            </li>
                            <li className="nav-item p-1 px-3">
                                <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-4 lightgrey">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="center mb-4">
                            <h1 className="h2 fw-bold darkfont">Official Privacy Policy - PharmaQue</h1>
                            <p className="fs-5 darkfont fw-bold">Effective Date: 1st November, 2024</p>
                        </div>

                        <div className="p-4">
                            <p className="fs-5 darkfont mb-4">StudyQue Ltd ("we", "us", or "our") operates PharmaQue (the "Service"). This privacy policy explains how we collect, use, share, and protect personal information in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).</p>

                            <h3 className="h4 fw-bold darkfont mb-3">1. Information We Collect</h3>
                            <p className="fs-5 darkfont mb-3">When you use PharmaQue, we may collect the following personal information:</p>
                            <ul className="fs-5 darkfont mb-4">
                                <li><strong>Account Information:</strong> Email address, username, and other details provided during sign-up.</li>
                                <li><strong>Payment Information:</strong> Payment details (e.g., name, billing address, bank details) are collected and processed by our payment partner, Stripe.</li>
                                <li><strong>Usage Data:</strong> Information on how you interact with the Service (e.g., access times, page views).</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">2. How We Use Your Information</h3>
                            <p className="fs-5 darkfont mb-3">We collect and use your data for the following purposes:</p>
                            <ul className="fs-5 darkfont mb-4">
                                <li>To provide access to the question bank and related services.</li>
                                <li>To process payments via Stripe.</li>
                                <li>To send reminders and notifications, such as subscription renewal reminders.</li>
                                <li>To improve our Service and ensure the best user experience.</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">3. Data Sharing</h3>
                            <p className="fs-5 darkfont mb-3">We may share your personal information with:</p>
                            <ul className="fs-5 darkfont mb-4">
                                <li>Stripe for payment processing.</li>
                                <li>Service providers who assist us with website hosting, email delivery, and analytics. We will never sell or share your personal information for commercial purposes without your consent.</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">4. Data Retention</h3>
                            <p className="fs-5 darkfont mb-4">We will retain your data for as long as your account remains active or as necessary to provide you with our services. You can request the deletion of your account and personal data at any time by contacting us.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">5. Data Security</h3>
                            <p className="fs-5 darkfont mb-4">We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">6. Your Rights</h3>
                            <p className="fs-5 darkfont mb-3">Under GDPR, you have the following rights regarding your data:</p>
                            <ul className="fs-5 darkfont mb-4">
                                <li>The right to access your personal data.</li>
                                <li>The right to request correction or deletion of your data.</li>
                                <li>The right to withdraw consent at any time.</li>
                                <li>The right to data portability. To exercise any of these rights, please contact us at <a href="mailto:pharmaque23@gmail.com" className="text-primary">pharmaque23@gmail.com</a>.</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">7. Changes to This Privacy Policy</h3>
                            <p className="fs-5 darkfont mb-4">We may update this privacy policy from time to time. If we make significant changes, we will notify you via email or through an update on our website.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">8. Contact Us</h3>
                            <p className="fs-5 darkfont mb-3">If you have any questions about this privacy policy or your personal data, please contact us at:</p>
                            <p className="fs-5 darkfont"><strong>Email:</strong> <a href="mailto:pharmaque23@gmail.com" className="text-primary">pharmaque23@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 darkblue center">
                <Link to="/terms" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Terms and Conditions</span></Link>
                <Link to="/privacy" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Privacy Policy</span></Link>
                <a href="mailto:pharmaque23@gmail.com" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Contact Us</span></a>
                <a href="#" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">About Us</span></a>
                <a href="#" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Work For Us</span></a>

                <p className="fs-5 mt-3 mb-2 whitetext">Copyright © PharmaQue 2023. All rights reserved.</p>
            </div>
        </main>
    );
};

export default Privacy; 