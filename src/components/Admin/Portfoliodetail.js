import React from "react";
import { Component } from "react";
import $ from 'jquery';

var createReactClass = require('create-react-class');

class Portfolio extends Component { 
   
  componentDidMount(){
    document.title = "WMS | Folio Detail"
    
    
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
      .normal-table .table td, .normal-table .table th {
        padding: .30rem;
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
        <section className="content">
          <div className="container-fluid">
          <div className="card card-primary card-outline pl-5 pr-5 normal-table">
             <table className="table">
               <tr>
                 <th>Name</th>
                 <td>Ravi Krishna Choudhary</td>
                 <th></th>
                 <td></td>
                 <th>Folio Number</th>
                 <td>87456321</td>
                </tr>

                <tr>
                <th>Scheme Name</th>
                 <td>Axis - Bluechip Fund (G)</td>
                 <th></th>
                 <td></td>
                 <th>MOH</th>
                 <td>IND</td>
                </tr>

                <tr>
                <th>Joint 1</th>
                 <td></td>
                 <th></th>
                 <td></td>
                 <th>Joint 2</th>
                 <td></td>
                </tr>

                <tr>
                 <th>Nominee</th>
                 <td>Ravi Krishna Choudhary 2</td>
                 <th></th>
                 <td></td>
                 <th>Bank</th>
                 <td>State Bank Of India [SAV] 35247922719</td>
                </tr>
             </table>
             </div>
            
          <div className="card card-primary card-outline mt-5">
        <div className="card-header">
          <h3 className="card-title">DataTable with default features</h3>
        </div>
       
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead className="bg-primary">
              <tr>
                <th>Date</th>
                <th>Nature</th>
                <th>Amount</th>
                <th>NAV/Rate</th>
                <th>Units/Nos</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>17/11/2020</td>
                <td>Sys Investment Plan</td>
                <td>1500</td>
                <td>35300</td>
                <td>42.697</td>
                <td>42.697</td>
              </tr>
              <tr>
                <td>17/11/2020</td>
                <td>Sys Investment Plan</td>
                <td>1500</td>
                <td>35300</td>
                <td>42.697</td>
                <td>42.697</td>
              </tr>
              <tr>
                <td>17/11/2020</td>
                <td>Sys Investment Plan</td>
                <td>1500</td>
                <td>35300</td>
                <td>15</td>
                <td>visg.697</td>
              </tr>
            </tbody>
            <tfoot className="bg-primary">
              <tr>
                <th></th>
                <th>Current Value</th>
                <th>4,436</th>
                <th>36.4700</th>
                <th>121.640</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        
      </div>
   
 
          </div>{/* /.container-fluid */}
        </section>
      </div>
    </>
  );
 }
};

export default Portfolio;

