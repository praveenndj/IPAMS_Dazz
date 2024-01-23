import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MDBFooter style={{backgroundColor: "rgb(2, 1, 43)", color:'white'}} bgColor='none' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       

        <div>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-white text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                DAZZ SOFTWARE SOLUTIONS
              </h6>
              <p>
              Where innovation meets excellence in the world of software solutions.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dazz
                </a>
              </p>
              <p>
                <a href='/home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/profile' className='text-reset'>
                  Profile
                </a>
              </p>
              <p>
                <a href='/announcements' className='text-reset'>
                  Announcements
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/leaderboard' className='text-reset'>
                  Leaderboard
                </a>
              </p>
              <p>
                <a href='dashboard' className='text-reset'>
                  Dashboard
                </a>
              </p>
              <p>
                <a href='settings' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='/help' className='text-reset'>
                  Help
                </a>
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
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Dazz Software Solutions
        </a>
      </div>
    </MDBFooter>
  );
}