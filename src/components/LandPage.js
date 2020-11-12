import React, { Component } from 'react';

class LandPage extends Component {
    render() {
        return (
            <>
            <div class="jumbotron text-center">
                <h1>Welcome To Job Finder</h1>
                <p>The best place to find and bid on government contracts.</p>
                </div>

                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <h3>About Us</h3>
                    <p>We are a website that hold government contracts for many local, state, and federal government.
                        <br></br>
                        <br></br>
                           <strong>As a Goverment User you can</strong> 
                        <ul>
                            <li>View Jobs That You previously create</li>
                            <li>Edit a pre-existing job</li>
                            <li>Create a new job</li>
                            <li>Delete a job</li>
                            <li>* Award contracts to Non-Goverment users *</li>
                        </ul>
                        <br></br>
                        <br></br>
                           <strong>As a Non-Government User you can</strong> 
                        <ul>
                            <li>View Jobs That were created by government</li>
                            <li>View your bids placed on jobs</li>
                            <li>* Place a bid *</li>
                            <li>* Edit a placed bid *</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <small>* * denotes upcoming features HAHA you thought it'd work</small> 
                    </p>
                    </div>
                    <div class="col-sm-4">
                    <h3>Contact Us</h3>
                    <p>This site is pretty self explanitory but if you have some issues you can feel free to 
                        contact us by email, which we don't check, or by phone, which we don't answer, we're here for you
                        </p>
                        <iframe src="https://giphy.com/embed/da75JuW2HHuBNqOHHE" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-da75JuW2HHuBNqOHHE"></a></p>
                        <strong>Email: wasteOfTime@ohWell.com</strong>
                        <br></br>
                        <br></br>
                        <strong>Phone: (555) 555-5543</strong>
                    </div>
                    <div class="col-sm-4">
                    <h3>Success Stories</h3>
                    <p>There goes a happy guy! He must have used our site. &#128540;</p>
                    <iframe className="giffy" src="https://giphy.com/embed/a0h7sAqON67nO" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/borat-great-success-a0h7sAqON67nO"></a></p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default LandPage;
