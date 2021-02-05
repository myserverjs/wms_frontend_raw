import React from "react";
import { Component } from "react";
// import '../../public/plugins/bootstrap/js/bootstrap.js';
// import '../../public/plugins/fontawesome-free/css/all.min.css';
// import '../../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
// import '../../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
// import '../../public/plugins/jqvmap/jqvmap.min.css';
// import '../../public/dist/css/adminlte.min.css';
// import '../../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
// import '../../public/plugins/daterangepicker/daterangepicker.css';
// import '../../public/plugins/summernote/summernote-bs4.css';
// import '../../public/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';
// import '../../public/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
// import '../../public/plugins/jquery/jquery.min.js';
// import '../../public/plugins/jquery-ui/jquery-ui.min.js';
// import '../../public/plugins/bootstrap/js/bootstrap.bundle.min.js';
// import '../../public/plugins/chart.js/Chart.min.js';
// import '../../public/plugins/sparklines/sparkline.js';
// import '../../public/plugins/jqvmap/jquery.vmap.min.js';
// import '../../public/plugins/jqvmap/maps/jquery.vmap.usa.js';
// import '../../public/plugins/jquery-knob/jquery.knob.min.js';
// import '../../public/plugins/moment/moment.min.js';
// import '../../public/plugins/daterangepicker/daterangepicker.js';
// import '../../public/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';
// import '../../public/plugins/summernote/summernote-bs4.min.js';
// import '../../public/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
// import '../../public/dist/js/adminlte.js';
// import '../../public/dist/js/pages/dashboard.js';
// import '../../public/dist/js/demo.js';
// import '../../public/plugins/datatables/jquery.dataTables.min.js';
// import '../../public/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
// import '../../public/plugins/datatables-responsive/js/dataTables.responsive.min.js';
// import '../../public/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';

var createReactClass = require('create-react-class');

class Home extends Component { 
  componentDidMount(){
    document.title = "WMS | Dashboard"
  }
  render(){
  return (  
    <>
    
    <style jsx>{`
      .admin-nav{
        display:block!important;
      }
    `}</style>
   {/* Content Wrapper. Contains page content */}
   <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>53<sup style={{fontSize: '20px'}}>%</sup></h3>
                    <p>All Books</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Authors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Sold Books</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
             
             
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </>
  );
 }
};

export default Home;
