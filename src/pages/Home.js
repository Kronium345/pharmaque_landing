import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Home = () => {
  const [text] = useTypewriter({
    words: ['Pharmacy, like you have never learnt before!'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
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
                <Link className="nav-link bold fs-4 darkfont" aria-current="page" to="/">Home</Link>
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

      <div className="container-fluid lightblue p-4">
        <div className="row p-4 align-items-center">
          <div className="col-sm-6 px-4">
            <h1 className="h1 fw-bold darkfont typedtext">{text}</h1>
            {/* <Cursor /> */}
            <p className="fs-4 darkfont">  </p>
            <div>
              <Link to="https://www.pharmaque.co.uk/" className="btn btn-primary fs-4 p-2 px-4 bold">Sign Up</Link>
              <Link className="fs-4 ms-4 darkfont removeunderline align-middle" to="/about">Learn More</Link>
            </div>

          </div>
          <div className="col-sm-6 px-4 center">
            <img src="images/Image 1.png" className="img-fluid d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block" />
          </div>
        </div>
      </div>

      <div className="container-fluid p-4">
        <div className="row p-4 align-items-center">
          <div className="col-sm-7 px-4">
            <img src="images/Image 2.png" className="img-fluid" />
          </div>
          <div className="col-sm-5 px-4">
            <h2 className="h2 fw-bold darkfont pt-4">About PharmaQue</h2>
            <p className="fs-4 darkfont pb-3">PharmaQue combines questions and flashcards to power your learning!</p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4 lightgrey">
        <div className="row p-4 align-items-center">
          <div className="col-sm-6 px-4">
            <h2 className="h2 fw-bold darkfont">Practice makes perfect!</h2>
            <p className="fs-4 darkfont">PharmaQue crafts top-notch, real-deal questions designed to test and identify gaps in your knowledge. Thanks to our spaced repetition algorithm, you'll be holding onto that precious information up to and beyond the date of your exams!</p>
          </div>
          <div className="col-sm-6 px-4">
            <img src="images/Image 3.png" className="img-fluid pb-3" />
          </div>
        </div>
      </div>

      <div className="container-fluid p-4">
        <div className="row p-4 align-items-center">
          <div className="col-sm-7 px-4">
            <img src="images/Image 4.png" className="img-fluid" />
          </div>
          <div className="col-sm-5 px-4">
            <h2 className="h2 fw-bold darkfont pt-4">Written by healthcare professionals, powered by AI</h2>
            <p className="fs-4 darkfont pb-3">PharmaQue combines knowledge from multiple, verified sources used for the pharmacy pre-registration exam.</p>
          </div>
        </div>

        <div className="center p-4">
          <Link to="https://www/pharmaque.co.uk/" className="btn btn-secondary fs-4 p-2 px-4 bold">Try PharmaQue Now!</Link>
        </div>

      </div>

      {/*
          <div className = "container-fluid p-4 pb-5 lightgrey center">
            <h2 className = "h2 fw-bold darkfont pt-4">Customer Reviews</h2>
            <p className = "fs-3 darkfont pb-2 mb-0">Still unsure? Take a look at our awesome reviews!</p>

            <div className = "row p-4">

              <div className = "col-sm-4 px-4">
                <div className="card mx-auto mb-4 leftalign" >
                  <div className="card-body p-4">
                    <img src="images/Image 5.png" className="quote py-3"/>
                    <h3 className="card-title darkfont bold">Customer Name</h3>
                    <p className="card-text fs-4 darkfont">PharmaQue was very useful for me during my Pharmacy exam preparation for Masters level education. I highly recommend it!</p>
                  </div>
                </div>
              </div>

              <div className = "col-sm-4 px-4">
                <div className="card mx-auto mb-4 leftalign">
                  <div className="card-body p-4">
                    <img src="images/Image 5.png" className="quote py-3"/>
                    <h3 className="card-title darkfont bold">Customer Name</h3>
                    <p className="card-text fs-4 darkfont">PharmaQue was very useful for me during my Pharmacy exam preparation for Masters level education. I highly recommend it!</p>
                  </div>
                </div>
              </div>

              <div className = "col-sm-4 px-4">
                <div className="card mx-auto mb-4 leftalign">
                  <div className="card-body p-4">
                    <img src="images/Image 5.png" className="quote py-3"/>
                    <h3 className="card-title darkfont bold">Customer Name</h3>
                    <p className="card-text fs-4 darkfont">PharmaQue was very useful for me during my Pharmacy exam preparation for Masters level education. I highly recommend it!</p>
                  </div>
                </div>
              </div>

            </div>
            
            

          </div>
          */}

      <div className="container-fluid p-4 darkblue center">

        <Link to="/terms" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Terms and Conditions</span></Link>
        <Link to="/privacy" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Privacy Policy</span></Link>
        <a href="mailto:pharmaque23@gmail.com" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Contact Us</span></a>
        <a href="#" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">About Us</span></a>
        <a href="#" className="removeunderline"><span className="fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Work For Us</span></a>


        <p className="fs-5 mt-3 mb-2 whitetext">Copyright © PharmaQue 2023. All rights reserved.</p>

      </div>

    </main>
  )
}

export default Home;