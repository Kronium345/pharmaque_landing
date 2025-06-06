import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Plans = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <span className="navbar-toggler-icon "></span>
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
                                <Link className="nav-link fs-4 darkfont bold " aria-current="page" to="/plans">Plans</Link>
                            </li>
                            <li className="nav-item p-1 px-3">
                                <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-4 lightgrey center">

                <h1 className="h2 fw-bold darkfont">Choose your plan</h1>
                <div className="flex-container align-items-center align-middle mb-4">
                    <img src="images/Image 15.png" className="potion" />
                    <span className="fs-4 darkfont">We've got three potions! Which one will you pick?</span>
                </div>
                <div className="row">
                    <div className="col-sm-4 mb-4">
                        <div className="card mx-auto mb-4 center maxheight" >
                            <div className="card-body p-4 pb-2">
                                <p className="card-text fs-4 darkfont mb-0">Free - 50 Questions</p>
                                <p className="card-text fs-2 darkfont bold mb-1">£0</p>
                                {/* <p className="card-text fs-5 darkfont">(Sneak peek behind the PharmaQue curtain!)</p> */}
                                <div className="leftalign bordertop">

                                    <div className="row py-3">

                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Access to 50 questions.</span>
                                        </div>

                                    </div>

                                    <div className="row py-3">
                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Useful for students to see what the question bank is like.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="center py-2">
                                    <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-4">

                        <div className="card mx-auto mb-4 center maxheight" >
                            <div className="card-body p-4 pb-2">
                                <p className="card-text fs-4 darkfont mb-0">Three Months</p>
                                <p className="card-text fs-2 darkfont bold mb-1">£35</p>
                                <p className="card-text fs-5 darkfont"></p>
                                <div className="leftalign bordertop">

                                    <div className="row py-3">

                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Access to atleast 2,500 questions</span>
                                        </div>

                                    </div>

                                    <div className="row py-3">
                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Comes with one mock exam.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="center py-2">
                                    <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4">

                        <div className="card mx-auto mb-4 center maxheight" >
                            <div className="card-body p-4 pb-2">
                                <p className="card-text fs-3 darkfont mb-0">Nine Months</p>
                                <p className="card-text fs-2 darkfont bold mb-1">£80</p>
                                <p className="card-text fs-5 darkfont"></p>
                                <div className="leftalign bordertop">

                                    <div className="row py-3">

                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Access to atleast 2,500 questions.</span>
                                        </div>

                                    </div>

                                    <div className="row py-3">
                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Comes with two mock exams.</span>
                                        </div>
                                    </div>

                                    <div className="row py-3">
                                        <div className="col-md-2 my-auto ">
                                            <img src="images/Image 6.png" className="feature" />
                                        </div>

                                        <div className="col-md-10 my-auto">
                                            <span className="fs-5">Access to flashcards.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="center py-2">
                                    <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="container-fluid p-4 darkblue center">

                <Link to="/terms" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Terms and Conditions</span></Link>
                <Link to="/privacy" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Privacy Policy</span></Link>
                <a href="mailto:pharmaque23@gmail.com" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Contact Us</span></a>
                <Link to="/about" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">About Us</span></Link>
                <a href="#" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Work For Us</span></a>


                <p className="fs-5 mt-3 mb-2 whitetext">Copyright © PharmaQue 2023. All rights reserved.</p>

            </div>
        </main>
    );
};

export default Plans;