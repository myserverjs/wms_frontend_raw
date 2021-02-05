import React from "react";
import { Component } from "react";
import $ from 'jquery';

var createReactClass = require('create-react-class');

class Portfolio extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data1: [],
          data2: [],
          data3: [],
          data4: [],
          data5: [],
        };
      }
      changeApplicant = (e) =>{
        var sel = e.target.value;
        $.ajax({
            url: "/api/getpan",
            type: "GET",
            data:{name:sel},
             success: function (res4) {
              this.setState({ data4: res4 });
            }.bind(this),
            error: function(jqXHR) {
              console.log(jqXHR);         
            }
          });     
        $.ajax({
          url: "/api/getportfolio",
          type: "GET",
          data:{name:sel},
           success: function (res3) {
            this.setState({ data3: res3 });
          }.bind(this),
          error: function(jqXHR) {
            console.log(jqXHR);         
          }
        });   
    }
  componentDidMount(){
    document.title = "WMS | Folio Detail"
    $.ajax({
        url: "/api/getapplicant",
        type: "GET",
         success: function (res1) {
          this.setState({ data1: res1 });
        }.bind(this),
        error: function(jqXHR) {
          console.log(jqXHR);          
        }
      });
      $.ajax({
        url: "/api/getschemetype",
        type: "GET",
         success: function (res2) {
          this.setState({ data2: res2 });
        }.bind(this),
        error: function(jqXHR) {
          console.log(jqXHR);          
        }
      });
  }
  render(){
  return (  
    <>
    <style jsx>
      {`
      .list-group-item{
        border:none!important;
      }
      .list-group-item:hover{
        border:none!important;
      }
      `}
      </style>
    <div className="content-wrapper">
     <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Portfolio Report</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Portfolio Report</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">


                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="form-group">
                                        <label>Applicant :</label>
                                        <select className="form-control" id="applicant" onChange={this.changeApplicant}>
                                            <option value>Select Applicant</option>
                                {this.state.data1.map((item, index) => (
                                    <option value={item}>{item}</option>
                                  
                                ))}
                                </select>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="form-group">
                                        <label>Category :</label>
                                        <select className="form-control">
                                            <option value="">All</option>
                                            {this.state.data2.map((item, index) => (
                                    <option value={item}>{item}</option>
                                  
                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table id="example2" class="table table-bordered table-hover table-responsive">
                                <thead>
                                    <tr className="bg-primary">
                                        <th>Scheme/Company</th>
                                        <th>Folio</th>
                                        <th>Purchase</th>
                                        <th>Switch In</th>
                                        <th>Div. Reinv.</th>
                                        <th>Sell</th>
                                        <th>Switch Out</th>
                                        <th>Nav</th>
                                        <th>Balance Unit/No</th>
                                        <th>Current Value</th>
                                        <th>Div. Paid/Interest</th>
                                        <th>Gain</th>
                                        <th>Absolute Return%</th>
                                        <th>XIRR(%)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>{this.state.data4.map((item, index) => (
                                                <b>{item.INV_NAME} [Pan: {item.PAN}]</b>
                                                ))}
                                                </td>
                                        </tr>
                                        </tbody>  
                                {this.state.data3.map((item, index) => (
                                      <tbody>
                                          <tr><td><span className="text-primary">{item._id.SCHEME_TYPE}</span></td></tr>
                                          <tr><td>{item._id.SCHEME}</td>
                                              <td>{item._id.FOLIO_NO}</td>
                                              <td>{item.AMOUNT}</td>
                                              <td>{item._id.SCHEMEISIN}</td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td>{item._id.cnav[0]}</td>
                                              <td>{item.UNITS}</td>
                                              <td>{item.UNITS * item._id.cnav[0]}</td>
                                              <td></td>
                                              <td></td>
                                              </tr>
                                         </tbody>
                                     ))}                              
                                <tfoot>
                                    <tr className="bg-gray">
                                        <th>Total</th>
                                        <th></th>
                                        <th>9,100</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>9,747</th>
                                        <th></th>
                                        <th>377</th>
                                        <th>4.14</th>
                                        <th>50.41</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                       
                        



                    </div>

              </div>
              {/*/.col (left) */}
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
      </div>
    </>
  );
 }
};

export default Portfolio;

