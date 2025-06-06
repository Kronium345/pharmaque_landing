import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
            <nav className="navbar navbar-expand-lg lightblue">
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
                                <Link className="nav-link fs-4 darkfont" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item p-1 px-3">
                                <Link className="nav-link bold fs-4 darkfont" to="/about">About</Link>
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

            <div className="container-fluid lightblue p-4">
                <div className="row p-4 align-items-center">

                    <div className="col-sm-4 px-4">
                        <img src="images/Image 7.png" className="img-fluid" />
                    </div>

                    <div className="col-sm-8 px-4">

                        <h1 className="fs-3 normaltext darkfont">Hi there 👋, <span className="bold">welcome to PharmaQue</span> - your personalised and comprehensive platform designed to help you effectively succeed in your pre-registration exam.</h1>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4">
                <div className="row p-4 align-items-center">

                    <div className="col-sm-5 px-4">
                        <p className="fs-4 darkfont pb-3">We've made over <span className="bold">2,500 questions</span>🤯 covering all the major areas of the <span className="bold">GPhC assessment</span> to ensure that you have enough good quality content to test your knowledge and understanding ✅</p>
                    </div>

                    <div className="col-sm-7 px-4">
                        <img src="images/Image 8.png" className="img-fluid" />
                    </div>

                </div>
            </div>

            <div className="container-fluid p-4 lightgrey">
                <div className="row p-4 align-items-center">

                    <div className="col-sm-7 px-4 mb-3">
                        <img src="images/Image 9.png" className="img-fluid" />
                    </div>

                    <div className="col-sm-5 px-4">
                        <p className="fs-4 darkfont pb-3">Each of our questions is accompanied with a <span className="bold">detailed explanation</span>, 📜 <span className="bold">links</span>, <span className="bold">resources</span> and <span className="bold">options to flag questions</span> ⛳ to make sure you can review questions whenever you want.
                            <br /> <br />

                            We know that learning from your peers is effective, and so we've created a <span className="bold">discussion board</span>💬 under every question for you to <span className="bold">ask further questions</span> and <span className="bold">share knowledge</span> with other budding pharmacists 🧪

                            <br /> <br />

                            We use an <span className="bold">evidence based spaced repetition algorithm</span> to consistently test you on your weak topics 📊</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-4">
                <div className="row p-4 align-items-center">

                    <div className="col-sm-5 px-4">
                        <p className="fs-4 darkfont pb-3">Our designers have created a <span className="bold">personal dashboard</span> for you which gives you detailed information about your performance across different chapters you'll be tested on in the real exam.</p>
                    </div>

                    <div className="col-sm-7 px-4">
                        <img src="images/Image 2.png" className="img-fluid" />
                    </div>

                </div>
            </div>

            <div className="container-fluid p-4 lightgrey">
                <div className="row p-4 align-items-center">

                    <p className="fs-4 darkfont center m-0">If you're still unsure about giving us a go, here's a summary of our <span className="bold">five big reasons</span> we think you'll <span className="bold">love</span> PharmaQue
                    </p>

                </div>

                <div className="row p-4 align-items-center">

                    <div className="col-sm-6">
                        <div className="card mx-auto mb-4 leftalign" >
                            <div className="card-body px-2 py-1">
                                <div className="row">
                                    <div className="col-md-4 px-4 py-2">
                                        <img src="images/Image 10.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 my-auto p-4">
                                        <p className="card-text fs-5 darkfont bold">Over 2,500 questions to help you practise your knowledge</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-sm-6">
                        <div className="card mx-auto mb-4 leftalign" >
                            <div className="card-body px-2 py-1">
                                <div className="row">
                                    <div className="col-md-4 px-4 py-2">
                                        <img src="images/Image 11.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 my-auto p-4">
                                        <p className="card-text fs-5 darkfont bold">Detailed dashboard and tasks to fill knowledge gaps</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-6">
                        <div className="card mx-auto mb-4 leftalign" >
                            <div className="card-body px-2 py-1">
                                <div className="row">
                                    <div className="col-md-4 px-4 py-2">
                                        <img src="images/Image 12.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 my-auto p-4">
                                        <p className="card-text fs-5 darkfont bold">Detailed explanations for each question</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card mx-auto mb-4 leftalign" >
                            <div className="card-body px-2 py-1">
                                <div className="row">
                                    <div className="col-md-4 px-4 py-2">
                                        <img src="images/Image 13.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 my-auto p-4">
                                        <p className="card-text fs-5 darkfont bold">Similar structure to the real exam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">

                    </div>

                    <div className="col-sm-6">
                        <div className="card mx-auto mb-4 leftalign" >
                            <div className="card-body px-2 py-1">
                                <div className="row">
                                    <div className="col-md-4 px-4 py-2">
                                        <img src="images/Image 14.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 my-auto p-4">
                                        <p className="card-text fs-5 darkfont bold">Reduced anxiety on exam day</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-3">

                    </div>

                </div>

                <div className="row pb-4 px-4 align-items-center">

                    <p className="fs-4 darkfont center m-0">And this is just the start, the PharmaQue team is hard at work creating <span className="bold">new</span> concepts to help your learning. including <span className="bold">flashcards</span> and <span className="bold">clinically oriented cases!!</span></p>

                </div>


            </div>


            <div className="container-fluid p-4 pb-5 center">

                <p className="fs-4 darkfont p-4 mb-0">Still have a dying question? Drop us a message <span className="bold">below</span> and we will reply within 24 hours!</p>

                <div className="px-4">

                    <form action="https://formsubmit.co/pharmaque23@gmail.com" method="POST">

                        <input type="email" name="email" className="form-control mb-3 p-3" id="exampleFormControlInput1" placeholder="youremail@example.com" required />

                        <textarea className="form-control mb-4 p-3" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message" required></textarea>

                        <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />

                        <button type="submit" className="btn btn-secondary fs-4 p-2 px-4 bold">Submit Message</button>

                    </form>

                </div>

                <p className="fs-5 darkfont pt-5 mb-0 bold">*PharmaQue is not in any way affiliated with the GPhC.</p>

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

export default About;