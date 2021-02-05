import React from "react";
import ReactDOM from 'react-dom';

import signup from "../../src/images/signup.svg";
const Signup = () => {
  return (
    <>
    <style jsx>{`
    .navbar{
      display:none;
    }
    #footer{
      display:none;
    }
      .admin-nav{
        display:none;
      }
      .main-sidebar{
        display:none;
      }
    `}</style>
    <section className="section_l_header login_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="index"><img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" className="img-fluid" /></a> 
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 left_side">
              <div className="left_side_content">
                <img src={signup} alt="signup" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 right_side">
              <div className="register_block">
                <h2 className="mb-3">Login using your credential</h2>
                <div className="form_block w-100">
                  <form id="login-form">
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" placeholder="username@domainname.com" />
                        <label id="emaillog" />
                      </div>
                      <div className="form-group col-md-12">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="********" />
                        <label id="passwordlog" />
                      </div>
                    </div>
                    <div className="form-row my-2">
                      <div className="form-group">
                        <a href className="psd"><span className="float-right text-danger">Forget Password</span></a>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-register" id="login_button">
                      Sign In</button>
                    <hr />
                    <p className="dont_h_a mb-0 =">Don't have an account? <a href="signup" className="text-warning">Sign up</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;