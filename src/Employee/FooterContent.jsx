import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Dazzlogo from '../Employee/images/Dazz2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MDBFooter style={{backgroundColor: "rgb(2, 1, 43)", color:'white'}} bgColor='none' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       

        <div>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="google" />
          </Link>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-white text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Dazzlogo}/>
                DAZZ SOFTWARE SOLUTIONS
              </h6>
              <p>
              Where innovation meets excellence in the world of software solutions.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <Link to='#!' className='text-reset'>
                  Dazz
                </Link>
              </p>
              <p>
                <Link to='/home' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='/profile' className='text-reset'>
                  Profile
                </Link>
              </p>
              <p>
                <Link to='/announcements' className='text-reset'>
                  Announcements
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/leaderboard' className='text-reset'>
                  Leaderboard
                </Link>
              </p>
              <p>
                <Link to='dashboard' className='text-reset'>
                  Dashboard
                </Link>
              </p>
              <p>
                <Link to='settings' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p>
                <Link to='/help' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Coimbatore, Tamilnadu, India, 641038
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dazzsoftwaresolutions@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <Link className='text-reset fw-bold' to='/home'>
          Dazz Software Solutions
        </Link>
      </div>
    </MDBFooter>
  );
}