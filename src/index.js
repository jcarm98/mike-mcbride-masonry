import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import $ from "jquery"

import './index.css';

// Takes: left (boolean)
// Returns: Side image for left and right sides
function EdgeImage(props) {
    return (
        <div className="col-sm">

            <img src={"./gallery/" + (props.left ? "left" : "right") + "Side.jpg"}
                id={(props.left ? "left" : "right")}
                alt=""
                style={{
                    maxHeight: "100vh",
                    position: "fixed",
                }} />

        </div> 
    );
}

// Takes: active (boolean), path (string)
// Returns: Single Bootstrap carousel item
function CarouselItem(props) {
    return (
        <div className={(props.active ? "carousel-item active" : "carousel-item")}>

            <img src={props.path}
                alt=""
                className="d-block w-100"
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    // Center horizontally
                    marginLeft: "auto",
                    marginRight: "auto",
                }} />

        </div>
    );
}

// Takes: initial (int), hasButtons (boolean)
// Returns: Bootstrap carousel with every image in gallery named 1.png - 58.png
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: this.props.initial,
            interval: 5000,
            hasButtons: this.props.hasButtons,
            size: 59,
        };
    }

    render() {
        let path1 = "./gallery/";
        let path2 = ".jpg"

        let paths = [...Array(this.state.size).keys()];

        // Construct each carousel item from array
        const slides = paths.map((path, index) => (
            <CarouselItem
                key={index}
                active={index === this.state.initial}
                path={path1 + (path + 1) + path2}
            />
        ));

        // Only use buttons on gallery carousel, where hasButtons is true
        if (this.state.hasButtons)
            return (
                <div id="carousel"
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval={this.state.interval}
                    data-pause="false"
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}>
                    <div id="carousel-inner" className="carousel-inner w-100" role="listbox">
                        {slides}
                    </div>
                    {// Back button
                    }
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    {// Forward button
                    }
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            );
        // Non-gallery carousel, no buttons, hasButtons is undefined
        else
            return (
                <div id="carousel"
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval={this.state.interval}
                    data-pause="false">
                    <div className="carousel-inner" role="listbox">
                        {slides}
                    </div>
                </div>
            );
    }
}

// Takes: update (function: updateTitle)
// Returns: Header section with name, motto, contact info, and navigation
function Header(props) {
    return (
        <div>

            <div className="row">

                <div className="col">

                    <div className="row no-gutters justify-content-start">
                        <h2>Mike McBride Masonry</h2>
                    </div>

                    <div className="row no-gutters justify-content-start">
                        <h4>"Not perfect, but damn close!"</h4>
                    </div>

                </div>

                <div className="col">

                    <div className="row no-gutters justify-content-end text-right">
                        <h4>Serving Coachella Valley Since 1981!</h4>
                    </div>

                    <div className="row no-gutters justify-content-end">
                        <h4>(760) 835-3881</h4>
                    </div>

                </div>

            </div>

            <div className="row no-gutters pb-3">

                <div className="col">
                    <Link to="/"
                        className="btn btn-light"
                        style={{
                            width: "100%",
                        }}
                        // Update title on navigation change
                        onClick={() => props.update("Mike McBride Masonry")}>
                        Home
                    </Link>
                </div>

                <div className="col">
                    <Link to="/gallery"
                        className="btn btn-light"
                        style={{
                            width: "100%",
                        }}
                        // Update title on navigation change
                        onClick={() => props.update("Mike McBride Masonry | Gallery")}>
                        Gallery
                    </Link>
                </div>

            </div>

        </div>
    );
}

// Takes: path (string)
// Returns: Image component with bounded width and height
function Image(props) {
    return (
        <img src={props.path}
            alt=""
            style={{
                maxWidth: "100%",
                maxHeight: "100%",
            }} />
    );
}

// Takes: nothing
// Returns: Row of images underneath carousels
function ImageRow(props) {
    // mcb 285px -> 39.37vw each
    // head 154px -> 21.26vw
    // mcb 105px
    // head 134px
    return (
        <div className="row no-gutters justify-content-center align-items-center py-2">

            <div className="d-flex justify-content-center align-items-center p-0"
                style={{
                    maxWidth: "39.36%",
                    height: "105px",
                }}>
                <Image path="./mcb.png"/>
            </div>
            <div className="d-flex justify-content-center align-items-center p-0"
                style={{
                    maxWidth: "21.26%",
                    height: "134px",
                }}>
                <Image path="./head.png" />
            </div>
            <div className="d-flex justify-content-center align-items-center p-0"
                style={{
                    maxWidth: "39.36%",
                    height: "105px",
                }}>
                <Image path="./mcb.png" />
            </div>

        </div>
    );
}

// Takes: nothing
// Returns: Home page section of website, with carousels, the image row,
// the owner's personal statement, and reviews
function Home(props) {
    return (
        <div>

            <div className="row no-gutters">

                <div className="col">
                    <Carousel initial={0} />
                </div>
                <div className="col">
                    <Carousel initial={1} />
                </div>
                <div className="col">
                    <Carousel initial={2} />
                </div>

            </div>

            <ImageRow />

            <div className="text-center px-3">
                Yes, an old-school mason can still be found in the desert... a little dusty but still here.
                Mike McBride Masonry is a 2nd generation family business with a pure approach: one crew, dedicated
                to your job and managed by a life-long mason and his long-time team. To schedule a free
                estimate please call or email me at <a href="mailto:mcb1952@aol.com">mcb1952@aol.com</a> and I
                will get back to you as soon as I can.
            </div>

            <br />

            <div className="px-5">
                "Mike and his crew did our side block walls/retaining walls a couple of years ago. It was a big job, but the
                result was perfect. Hired him again a year later to do a smaller job in the front yard, but once again it
                was smooth and perfect. Highly recommended!"
                <br />
                - Daryl Bergeron, Google Reviews
            </div>

            <br />

            <div className="px-5">
                "The effort and workmanship was amazing. They arrived on time, were professional, finished the project on time and
                within budget. Mikes one of the best subcontractors I've ever worked with."
                <br />
                - Monty Rivers, Google Reviews
            </div>

            {// Adds space to the bottom of the page to add padding to text on phones
            }
            <div className="py-4"></div>

        </div>
    );
}

// Takes: nothing
// Returns: Main website container
class MikeMcBrideMasonry extends React.Component {
    constructor(props) {
        super(props);
        // Used to adjust width
        this.container = React.createRef();
        // Used to update title
        this.state = {
            updated: false,
        }
    }

    isGallery() {
        return window.location.href.substring(window.location.href.length - 8, window.location.href.length) === "/gallery";
    }

    // Adjusts the width of container according to screen size
    // Necessary to scale up images in gallery properly
    forceMaxWidth() {
        if (this.container.current.offsetWidth <= 576) {
            this.container.current.style.width = "100%";
        }
        else {
            this.container.current.style.width = "1140px";
        }
    }

    componentDidMount() {
        // Start carousels manually
        $(".carousel").carousel();

        // Set container width
        this.forceMaxWidth();

        // Update title if started on gallery
        if (this.isGallery()) {
            this.setTitle("Mike McBride Masonry | Gallery");
        }

    }

    componentDidUpdate() {
        // Restart carousels after routing (client-side)
        $(".carousel").carousel();
    }

    // Update title
    setTitle(title) {
        document.title = title;
        this.setState({
            updated: !this.state.updated,
        });
    }

    render() {
        // Adjust container width on window resize
        window.addEventListener("resize", () => {
            this.forceMaxWidth();
        });

        return (
            <Router>
                <div className="row no-gutters">

                    <EdgeImage left={true} />

                    <div className="col-auto">

                        <div ref={this.container} className="container bg-dark content"
                            style={{
                                minHeight: "100vh",
                            }}>

                            <Header update={(title) => this.setTitle(title) }/>

                            <Switch style={{
                                width: "100%",
                                maxHeight: "100%"
                            }}>

                                <Route path="/gallery"
                                    style={{

                                    }}>
                                    <Carousel hasButtons={true}
                                        initial={0} />

                                    {// Adds space to the bottom of the page
                                    }
                                    <div className="py-2"></div>
                                </Route>

                                <Route path="/">
                                    <Home />
                                </Route>

                            </Switch>

                        </div>

                    </div>

                    <EdgeImage left={false}/>

                </div>

            </Router>
        );
    }
}


ReactDOM.render(
    <MikeMcBrideMasonry id="mmm" />,
    document.getElementById('root')
);