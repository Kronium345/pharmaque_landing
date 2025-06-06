import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
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
                            <h1 className="h2 fw-bold darkfont">Official Terms and Conditions - PharmaQue</h1>
                            <p className="fs-4 darkfont">Please read the following Terms and Conditions related to your use of pharmaque.com</p>
                            <p className="fs-5 darkfont fw-bold"></p>
                        </div>

                        <div className="p-4">
                            <p className="fs-5 darkfont mb-4">Welcome to PharmaQue, operated by StudyQue Ltd. By purchasing or using our services, you agree to the following terms and conditions.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">1. Service Overview</h3>
                            <p className="fs-5 darkfont mb-3">PharmaQue provides an online question bank for students preparing for the pharmacy pre-registration exam. We offer both free demo access and paid subscriptions. The following options are available:</p>
                            <ul className="fs-5 darkfont mb-4">
                                <li>Free access to a demo version.</li>
                                <li>Paid access for a duration of 3 months or 9 months.</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">2. Payment and Subscription</h3>
                            <p className="fs-5 darkfont mb-3">All purchases are final and non-refundable. Upon purchasing, users will have access to PharmaQue for the selected period (3 months or 9 months).</p>
                            <p className="fs-5 darkfont mb-4">We will send a renewal reminder via email 7 days before the subscription expires. Users can choose to renew their subscription, but renewal is not automatic.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">3. Usage Restrictions</h3>
                            <p className="fs-5 darkfont mb-3">Users are strictly prohibited from downloading, screenshotting, sharing, or reproducing any part of the question bank.</p>
                            <p className="fs-5 darkfont mb-4">Any violation of these terms may result in the suspension or termination of access without refund.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">4. Data Collection</h3>
                            <p className="fs-5 darkfont mb-3">We collect usernames, email addresses, and other personal information necessary to create your account.</p>
                            <p className="fs-5 darkfont mb-3">Payment information, including your name, bank details, and billing address, will be collected and processed securely by Stripe Payments.</p>
                            <p className="fs-5 darkfont mb-4">All data collected is stored online, and we strive to take appropriate measures to protect user information.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">5. Content Ownership</h3>
                            <p className="fs-5 darkfont mb-3">All content, including but not limited to the questions, answers, and explanations, is the intellectual property of PharmaQue, a service under StudyQue Ltd.</p>
                            <p className="fs-5 darkfont mb-4">Users may not use the content for any commercial purposes or share it with others without express permission.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">6. Liability Disclaimer</h3>
                            <ul className="fs-5 darkfont mb-4">
                                <li><strong>Accuracy of Content:</strong> PharmaQue provides practice questions to assist users in exam preparation, but does not guarantee success in any exams. The use of our materials is at the user's own discretion.</li>
                                <li><strong>Service Availability:</strong> We strive to ensure the availability of the site but are not responsible for any downtime due to maintenance or unexpected technical issues.</li>
                                <li><strong>Data Security:</strong> While we take reasonable measures to protect user data, StudyQue Ltd will not be held liable for any breaches beyond our control.</li>
                            </ul>

                            <h3 className="h4 fw-bold darkfont mb-3">7. Governing Law</h3>
                            <p className="fs-5 darkfont mb-4">These terms are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from these terms will be subject to the jurisdiction of UK courts.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">8. Updating these terms and conditions</h3>
                            <p className="fs-5 darkfont mb-4">We may update these terms and conditions from time to time. If we make changes, we will notify users by updating the date at the top of the terms. It is the user's responsibility to check for updates.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">9. Violation of terms and conditions</h3>
                            <p className="fs-5 darkfont mb-4">We reserve the right to suspend or terminate any user's access to the site for violation of these terms without notice or refund.</p>

                            <h3 className="h4 fw-bold darkfont mb-3">10. Contacting PharmaQue</h3>
                            <p className="fs-5 darkfont">If you have any questions about these terms and conditions, please contact us at <a href="mailto:pharmaque23@gmail.com" className="text-primary">pharmaque23@gmail.com</a>.</p>
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

export default Terms; 