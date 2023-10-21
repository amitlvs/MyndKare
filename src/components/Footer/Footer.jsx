import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 align-item-center'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src="https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png" className="h-32 mr-3" alt="Myndkre_logo" />

                            </h6>

                        </MDBCol>

                        <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
                            <h5 className='text-lowercase mb-4'>additional sources</h5>
                            <p>
                                <NavLink to='/faq' className='text-reset'>
                                    FAQ
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/privacy-and-refund-policy" className='text-reset'>
                                    PRIVACY & REFUND POLICY
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/terms-and-condition' className='text-reset'>
                                    TERMS & CONDITIONS
                                </NavLink>
                            </p>

                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Reach Out To Us</h6>

                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                myndkare@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> +91 85273 67628
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='#'>
                    MYNDKARE. All Rights Reserved.
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;