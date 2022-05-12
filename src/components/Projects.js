import React, { useState } from 'react';
import icon1 from '../icons/img/portfolio/cabin.png'
import icon2 from '../icons/img/portfolio/cake.png'
import icon3 from '../icons/img/portfolio/circus.png'
import icon4 from '../icons/img/portfolio/game.png'
import icon5 from '../icons/img/portfolio/submarine.png'
import icon6 from '../icons/img/portfolio/safe.png'
import test from '../icons/Capture.PNG'
import mourakibon from '../icons/mourakibonPNG.PNG'
import hobo from '../icons/hobo_tunisie.PNG'
import dash from '../icons/admindash_login.PNG'
import chat from '../icons/chat_message.PNG'
import chatgif from '../icons/ezgif.com-video-to-gif.gif'
import Model from './model';


const Projects = () => {
    const [idblock, setIdblock] = useState('')
    const handlClick = (e) => {
        console.log(e.target);
    }

    return (
        <div className="projects">
            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <h2
                        className="page-section-heading text-center text-uppercase text-secondary mb-0"
                    >
                        Projects
        </h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">

                        <div onClick={() => { setIdblock('portfolioModal1') }} className="col-md-6 col-lg-4 mb-5">
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal1"
                            >
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                                >
                                    <div
                                        className="portfolio-item-caption-content text-center text-white"
                                    >
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img
                                    className="img-fluid"
                                    src={test}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div key='2' onClick={() => { setIdblock('portfolioModal2') }} className="col-md-6 col-lg-4 mb-5">
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal2"
                            >
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                                >
                                    <div
                                        className="portfolio-item-caption-content text-center text-white"
                                    >
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img
                                    className="img-fluid"
                                    src={mourakibon}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal3"
                            >
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                                >
                                    <div
                                        className="portfolio-item-caption-content text-center text-white"
                                    >
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img
                                    className="img-fluid"
                                    src={hobo}
                                    alt=""
                                />
                            </div>
                        </div>



                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal5"
                            >
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                                >
                                    <div
                                        className="portfolio-item-caption-content text-center text-white"
                                    >
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img
                                    className="img-fluid"
                                    src={dash}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal6"
                            >
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                                >
                                    <div
                                        className="portfolio-item-caption-content text-center text-white"
                                    >
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img
                                    className="img-fluid"
                                    src={chat}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Model idblock={idblock} /> */}

            <div
                className="portfolio-modal modal fade"
                id="portfolioModal1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2
                                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                                            id="portfolioModal1Label"
                                        >
                                            Corse Platform
                  </h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img
                                            className="img-fluid rounded mb-5"
                                            src={test}
                                            alt=""
                                        />

                                        <p className="mb-5">

                                            dynamic web application for the management of training, students and teachers.
                                            with the possibility of purchasing training, in addition to the possibility of making discussion forums
                  </p>
                                        <button onClick={() => { window.open('https://github.com/skanderHarrabi/course-platform/', "_blank") }} className="btn btn-primary mr-2">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-code fa-fw mr-2"></i>
                                            Code
                                        </button>
                                        <button onClick={() => { window.open('https://streamable.com/etyrjx', "_blank") }} className="btn btn-primary">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-video fa-fw mr-2"></i>
                                            Demo Video
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="portfolio-modal modal fade"
                id="portfolioModal2"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2
                                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                                            id="portfolioModal1Label"
                                        >
                                            Mourakibon
                  </h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img
                                            className="img-fluid rounded mb-5"
                                            src={mourakibon}
                                            alt=""
                                        />

                                        <p className="mb-5">

                                            dynamic web application for an Electoral association, the application was made with laravel / laravel Nova and reactjs
                  </p>
                                        <button onClick={() => { window.open('https://github.com/skanderHarrabi/mourakiboun/', "_blank") }} className="btn btn-primary">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-code fa-fw mr-2"></i>
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="portfolio-modal modal fade"
                id="portfolioModal3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2
                                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                                            id="portfolioModal1Label"
                                        >
                                            Hobo Tunisie
                  </h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img
                                            className="img-fluid rounded mb-5"
                                            src={hobo}
                                            alt=""
                                        />

                                        <p className="mb-5">

                                            Application for a customer (restaurant) to make promotions on products on Valentine's Day
                  </p>
                                        <button onClick={() => { window.open('https://github.com/skanderHarrabi/hobo/', "_blank") }} className="btn btn-primary">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-code fa-fw mr-2"></i>
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="portfolio-modal modal fade"
                id="portfolioModal5"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2
                                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                                            id="portfolioModal1Label"
                                        >
                                            Admin-Dash
                  </h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img
                                            className="img-fluid rounded mb-5"
                                            src={dash}
                                            alt=""
                                        />

                                        <p className="mb-5">

                                            Application for admins to manage reservation of products, also to manage clients and providers its also allow providers to manage there products
                  </p>
                                        <button onClick={() => { window.open('https://github.com/skanderHarrabi/AdminDash', "_blank") }} className="btn btn-primary">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-code fa-fw mr-2"></i>
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="portfolio-modal modal fade"
                id="portfolioModal6"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2
                                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                                            id="portfolioModal1Label"
                                        >
                                            Admin-Dash
                  </h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img
                                            className="img-fluid rounded mb-5"
                                            src={chatgif}
                                            alt=""
                                        />

                                        <p className="mb-5">

                                            Application allow users to chat in real time and to create rooms, this application was made using socketio and reactjs
                  </p>
                                        <button onClick={() => { window.open('https://github.com/skanderHarrabi/real-time-chat', "_blank") }} className="btn btn-primary">
                                            {/* <Link to='https://github.com/skanderHarrabi/course-platform/' > */}
                                            <i className="fas fa-code fa-fw mr-2"></i>
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};


Projects.propTypes = {

};


export default Projects;
