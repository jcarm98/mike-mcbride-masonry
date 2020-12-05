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

/*

import head from './head.png';
import mcb from './mcb.png';
import pic1 from './gallery/1.jpg';
import pic2 from './gallery/2.jpg';
import pic3 from './gallery/3.jpg';
import pic4 from './gallery/4.jpg';
import pic5 from './gallery/5.jpg';
import pic6 from './gallery/6.jpg';
import pic7 from './gallery/7.jpg';
import left from './gallery/leftSide.jpg';
import right from './gallery/rightSide.jpg';

 */

function EdgeImage(props) {
    return (
        <div className="col-sm">

            <img src={"./gallery/" + (props.left ? "left" : "right") + "Side.jpg"}
                id={(props.left ? "left" : "right")}
                alt=""
                style={{
                    maxHeight: "100vh",
                    position: "fixed",
                    //left: (props.left ? "0" : "auto"),
                    //right: (props.left ? "auto" : "0"),
                }} />

        </div> 
    );
}

function CarouselItem(props) {
    return (
        <div className={(props.active ? "carousel-item active" : "carousel-item")}>
            <img src={props.path}
                alt=""
                className="d-block w-100"
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                }} />
        </div>
    );
}

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

        const slides = paths.map((path, index) => (
            <CarouselItem
                key={index}
                active={index === this.state.initial}
                path={path1 + (path + 1) + path2}
            />
        ));

        if (this.state.hasButtons)
            return (
                <div id="carousel" className="carousel slide" data-ride="carousel" data-interval={this.state.interval} data-pause="false"
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}>
                    <div id="carousel-inner" className="carousel-inner w-100" role="listbox">
                        {slides}
                    </div>
                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            );
        else
            return (
                <div id="carousel" className="carousel slide" data-ride="carousel" data-interval={this.state.interval} data-pause="false">
                    <div className="carousel-inner" role="listbox">
                        {slides}
                    </div>
                </div>
            );
    }
}

function Header(props) {
    return (
        <div ref={props.header}>

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
                        onClick={() => props.update("Mike McBride Masonry | Gallery")}>
                        Gallery
                    </Link>
                </div>

            </div>

        </div>
    );
}

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
            <div className="py-4"></div>
        </div>
    );
}

class MikeMcBrideMasonry extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.header = React.createRef();
        this.state = {
            updated: false,
        }
    }

    isGallery() {
        return window.location.href.substring(window.location.href.length - 8, window.location.href.length) === "/gallery";
    }

    forceMaxWidth() {
        if (this.container.current.offsetWidth > 576) {
            this.container.current.style.width = "1140px";
        }
        else {
            this.container.current.style.width = "100%";
        }
    }

    componentDidMount() {
        $(".carousel").carousel();
        this.forceMaxWidth();

        if (this.isGallery()) {
            this.setTitle("Mike McBride Masonry | Gallery");
        }

    }

    componentDidUpdate() {
        $(".carousel").carousel();
    }

    setTitle(title) {
        document.title = title;
        this.setState({
            updated: !this.state.updated,
        });
    }

    render() {
        window.addEventListener("resize", () => {
            this.forceMaxWidth();
        });

        return (
            <Router>
                <div className="row no-gutters">

                    <EdgeImage left={true} />

                    <div className="col-auto ">
                        <div ref={this.container} className="container bg-dark content"
                            style={{
                                minHeight: "100vh",
                            }}>

                            <Header className="bg-dark"
                                header={this.header}
                                update={(title) => this.setTitle(title) }/>

                            <Switch style={{
                                width: "100%",
                                maxHeight: "100%"
                            }}>
                                <Route path="/gallery"
                                    className="bg-dark"
                                    style={{

                                    }}>
                                    <Carousel hasButtons={true}
                                        initial={0} />
                                </Route>
                                <Route path="/"
                                    className="bg-dark">
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


//const container = document.querySelector('#mmm');
//ReactDOM.render(<MikeMcBrideMasonry />, container);