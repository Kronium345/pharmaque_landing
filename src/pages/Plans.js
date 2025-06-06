import React from "react";
import { Link } from "react-router-dom";

class Plans extends React.Component{
    render()
    {
        return(
        <main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                <nav class="navbar navbar-expand-lg lightgrey">
                <div class = "container-fluid p-3 px-4">
                    <a class="navbar-brand" href="/">
                    <img src="images/Logo.png" alt="PharmaQue Logo" class="logo img-fluid"/>
                    <span class = "fs-3 fw-bold darkfont">PharmaQue</span>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item p-1 px-3">
                        <Link class="nav-link fs-4 darkfont" to="/">Home</Link>
                        </li>
                        <li class="nav-item p-1 px-3">
                        <Link class="nav-link fs-4 darkfont" to="/about">About</Link>
                        </li>
                        <li class="nav-item p-1 px-3">
                        <Link class="nav-link fs-4 darkfont bold " aria-current="page" to="/plans">Plans</Link>
                        </li>
                        <li class="nav-item p-1 px-3">
                        <Link to="https://www.pharmaque.co.uk/" className = "btn btn-primary fs-4 p-2 px-4 bold">Sign In</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

                <div class = "container-fluid p-4 lightgrey center">

                <h1 class = "h2 fw-bold darkfont">Choose your plan</h1>
                <div class = "flex-container align-items-center align-middle mb-4">
                    <img src = "images/Image 15.png" class="potion"/>
                    <span class = "fs-4 darkfont">We’ve got three potions! Which one will you pick?</span>
                </div> 
                <div class = "row">
                    <div class = "col-sm-4 mb-4">
                    <div class="card mx-auto mb-4 center maxheight" >
                        <div class="card-body p-4 pb-2">
                        <p class="card-text fs-4 darkfont mb-0">Free - 50 Questions</p>
                        <p class="card-text fs-2 darkfont bold mb-1">£0</p>
                        {/* <p class="card-text fs-5 darkfont">(Sneak peek behind the PharmaQue curtain!)</p> */}
                        <div class = "leftalign bordertop">

                            <div class = "row py-3">

                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>

                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Access to 50 questions.</span>
                            </div>

                            </div>
                            
                            <div class = "row py-3">
                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>
            
                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Useful for students to see what the question bank is like.</span>
                            </div>
                            </div>
                        </div>
                        
                        <div class = "center py-2">
                            <Link to="https://www.pharmaque.co.uk/" class = "btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    <div class = "col-sm-4 mb-4">

                    <div class="card mx-auto mb-4 center maxheight" >
                        <div class="card-body p-4 pb-2">
                        <p class="card-text fs-4 darkfont mb-0">Three Months</p>
                        <p class="card-text fs-2 darkfont bold mb-1">£35</p>
                        <p class="card-text fs-5 darkfont"></p>
                        <div class = "leftalign bordertop">

                            <div class = "row py-3">

                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>

                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Access to atleast 2,500 questions</span>
                            </div>

                            </div>
                            
                            <div class = "row py-3">
                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>
            
                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Comes with one mock exam.</span>
                            </div>
                            </div>
                        </div>
                        
                        <div class = "center py-2">
                            <Link to="https://www.pharmaque.co.uk/" class = "btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                        </div>
                        
                        </div>
                    </div>
                    </div>

                    <div class = "col-sm-4 mb-4">

                    <div class="card mx-auto mb-4 center maxheight" >
                        <div class="card-body p-4 pb-2">
                        <p class="card-text fs-3 darkfont mb-0">Six Months</p>
                        <p class="card-text fs-2 darkfont bold mb-1">£80</p>
                        <p class="card-text fs-5 darkfont"></p>
                        <div class = "leftalign bordertop">

                            <div class = "row py-3">

                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>

                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Access to atleast 2,500 questions.</span>
                            </div>

                            </div>
                            
                            <div class = "row py-3">
                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>
            
                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Comes with two mock exams.</span>
                            </div>
                            </div>

                            <div class = "row py-3">
                            <div class = "col-md-2 my-auto ">
                                <img src="images/Image 6.png" class="feature"/>
                            </div>
            
                            <div class = "col-md-10 my-auto">
                                <span class = "fs-5">Access to flashcards.</span>
                            </div>
                            </div>
                        </div>
                        
                        <div class = "center py-2">
                            <Link to="https://www.pharmaque.co.uk/" class = "btn btn-primary fs-4 p-2 px-4 bold">Choose Plan</Link>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>



                </div>

                <div class = "container-fluid p-4 darkblue center">

                    <a href = "#" class = "removeunderline"><span class = "fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Terms and Conditions</span></a>
                    <a href = "#" class = "removeunderline"><span class = "fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Cookies Policy</span></a>
                    <a href = "#" class = "removeunderline"><span class = "fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Contact Us</span></a>
                    <a href = "#" class = "removeunderline"><span class = "fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">About Us</span></a>
                    <a href = "#" class = "removeunderline"><span class = "fs-5 whitetext mt-2 mb-1 mx-4 bold inlineblock removeunderline">Work For Us</span></a>
                

                <p class = "fs-5 mt-3 mb-2 whitetext">Copyright © PharmaQue 2023. All rights reserved.</p>

                </div>
        </main>
        )
    }
}
export default Plans;