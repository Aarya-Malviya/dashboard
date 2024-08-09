import React from 'react';
import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback';
import './plugins/fontawesome-free/css/all.min.css';
import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
import './plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import './plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import './plugins/jqvmap/jqvmap.min.css';
import './dist/css/adminlte.min.css';
import './plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import './plugins/daterangepicker/daterangepicker.css';
import './plugins/summernote/summernote-bs4.min.css';

// // #############################
// import './plugins/jquery/jquery.js';
// import './plugins/jquery-ui/jquery-ui.min.js';
import './plugins/bootstrap/js/bootstrap.bundle.min.js';
import './plugins/chart.js/Chart.min.js';
import './plugins/sparklines/sparkline.js';
import './plugins/jqvmap/jquery.vmap.min.js';
import './plugins/jqvmap/maps/jquery.vmap.usa.js';
import './plugins/jquery-knob/jquery.knob.min.js';
import './plugins/moment/moment.min.js';
import './plugins/daterangepicker/daterangepicker.js';
import './plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';
import './plugins/summernote/summernote-bs4.min.js';
import './plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import './dist/js/adminlte.js';
import './dist/js/demo.js';
import './dist/js/pages/dashboard.js';
function Dashboard() {
  return (
    <>
    <div>
    <div className="wrapper">

<div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__shake" src="" alt="AdminLTELogo" height="60" width="60"/>
</div>

<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>

  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search"></i>
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-comments"></i>
        <span className="badge badge-danger navbar-badge">3</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" className="dropdown-item">
         
          <div className="media">
            <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Brad Diesel
                <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">Call me whenever you can...</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
         
          <div className="media">
            <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
            <div className="media-body">
              <h3 className="dropdown-item-title">
                John Pierce
                <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">I got your message bro</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>

        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <div className="media">
            <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Nora Silvester
                <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
              </h3>
              <p className="text-sm">The subject goes here</p>
              <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>

        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-bell"></i>
        <span className="badge badge-warning navbar-badge">15</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">15 Notifications</span>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-envelope mr-2"></i> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-users mr-2"></i> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-file mr-2"></i> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i className="fas fa-th-large"></i>
      </a>
    </li>
  </ul>
</nav>

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>

    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Dashboard
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy"></i>
            <p>
              Layout Options
              <i className="fas fa-angle-left right"></i>
              <span className="badge badge-info right">6</span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Top Navigation</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Top Navigation + Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/boxed.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Boxed</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Fixed Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Fixed Sidebar <small>+ Custom Area</small></p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-topnav.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Fixed Navbar</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/fixed-footer.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Fixed Footer</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Collapsed Sidebar</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie"></i>
            <p>
              Charts
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/charts/chartjs.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>ChartJS</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/flot.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/uplot.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>uPlot</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tree"></i>
            <p>
              UI Elements
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/UI/general.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>General</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/icons.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/buttons.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Buttons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/sliders.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Sliders</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/modals.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Modals & Alerts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/navbar.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Navbar & Tabs</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/timeline.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Timeline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/ribbons.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Ribbons</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit"></i>
            <p>
              Forms
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>General Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/advanced.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Advanced Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/editors.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Editors</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/validation.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Validation</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table"></i>
            <p>
              Tables
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/tables/simple.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Simple Tables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/data.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>DataTables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/jsgrid.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>jsGrid</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">EXAMPLES</li>
        <li className="nav-item">
          <a href="pages/calendar.html" className="nav-link">
            <i className="nav-icon far fa-calendar-alt"></i>
            <p>
              Calendar
              <span className="badge badge-info right">2</span>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>
              Gallery
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/kanban.html" className="nav-link">
            <i className="nav-icon fas fa-columns"></i>
            <p>
              Kanban Board
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope"></i>
            <p>
              Mailbox
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/mailbox/mailbox.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Inbox</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/compose.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Compose</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book"></i>
            <p>
              Pages
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/invoice.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Invoice</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/profile.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Profile</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/e-commerce.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>E-commerce</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/projects.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-add.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Add</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-edit.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Edit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-detail.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Project Detail</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contacts.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Contacts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/faq.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contact-us.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-plus-square"></i>
            <p>
              Extras
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>
                  Login & Register v1
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Login v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Register v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Forgot Password v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Recover Password v1</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>
                  Login & Register v2
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Login v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Register v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Forgot Password v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Recover Password v2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/examples/lockscreen.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Lockscreen</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Legacy User Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/language-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Language Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/404.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Error 404</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/500.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Error 500</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/pace.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Pace</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/blank.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Blank Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="starter.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Starter Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-search"></i>
            <p>
              Search
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/search/simple.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Simple Search</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/search/enhanced.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Enhanced</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">MISCELLANEOUS</li>
        <li className="nav-item">
          <a href="iframe.html" className="nav-link">
            <i className="nav-icon fas fa-ellipsis-h"></i>
            <p>Tabbed IFrame Plugin</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.1/" className="nav-link">
            <i className="nav-icon fas fa-file"></i>
            <p>Documentation</p>
          </a>
        </li>
        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-circle nav-icon"></i>
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-circle"></i>
            <p>
              Level 1
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Level 2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>
                  Level 2
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon"></i>
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-circle nav-icon"></i>
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-header">LABELS</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-danger"></i>
            <p className="text">Important</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-warning"></i>
            <p>Warning</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-info"></i>
            <p>Informational</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>

<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v1</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <section className="content">
    <div className="container-fluid">
      {/* <!-- Small boxes (Stat box) --> */}
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>53<sup style={{font: '20px'}}>%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
      </div>
     
      <div className="row">
        <section className="col-lg-7 connectedSortable">
          {/* <!-- Custom tabs (Charts with tabs)--> */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1"></i>
                Sales
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content p-0">
                <div className="chart tab-pane active" id="revenue-chart"
                     style={{ position: 'relative', height: '300px' }}>
                    <canvas id="revenue-chart-canvas" height="300" style={{ height: '300px' }}></canvas>
                 </div>
                <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: '300px' }}>
                  <canvas id="sales-chart-canvas" height="300" style={{height: '300px'}}></canvas>
                </div>
              </div>
            </div>
          </div>
    
          <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>

              <div className="card-tools">
                <span title="3 New Messages" className="badge badge-primary">3</span>
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                  <i className="fas fa-comments"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
           
            <div className="card-body">
              <div className="direct-chat-messages">
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                  </div>
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                </div>

                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                  </div>
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
                </div>

                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                    <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                  </div>
                  
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                  <div className="direct-chat-text">
                    Working with AdminLTE on a great new app! Wanna join?
                  </div>
                </div>
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                    <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                  </div>
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                  <div className="direct-chat-text">
                    I would love to.
                  </div>
                </div>
              </div>

              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">2/28/2015</small>
                        </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Sarah Doe
                          <small className="contacts-list-date float-right">2/23/2015</small>
                        </span>
                        <span className="contacts-list-msg">I will be waiting for...</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Nadia Jolie
                          <small className="contacts-list-date float-right">2/20/2015</small>
                        </span>
                        <span className="contacts-list-msg">I'll call you back at...</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Nora S. Vans
                          <small className="contacts-list-date float-right">2/10/2015</small>
                        </span>
                        <span className="contacts-list-msg">Where is your new...</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          John K.
                          <small className="contacts-list-date float-right">1/27/2015</small>
                        </span>
                        <span className="contacts-list-msg">Can I take a look at...</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar"/>

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Kenneth M.
                          <small className="contacts-list-date float-right">1/4/2015</small>
                        </span>
                        <span className="contacts-list-msg">Never mind I found...</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                  <span className="input-group-append">
                    <button type="button" className="btn btn-primary">Send</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="ion ion-clipboard mr-1"></i>
                To Do List
              </h3>

              <div className="card-tools">
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a href="#" className="page-link">&laquo;</a></li>
                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">&raquo;</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <ul className="todo-list" data-widget="todo-list">
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo1" id="todoCheck1"/>
                    <label for="todoCheck1"></label>
                  </div>
                  <span className="text">Design a nice theme</span>
                  <small className="badge badge-danger"><i className="far fa-clock"></i> 2 mins</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo2" id="todoCheck2" checked/>
                    <label for="todoCheck2"></label>
                  </div>
                  <span className="text">Make the theme responsive</span>
                  <small className="badge badge-info"><i className="far fa-clock"></i> 4 hours</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo3" id="todoCheck3"/>
                    <label for="todoCheck3"></label>
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-warning"><i className="far fa-clock"></i> 1 day</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo4" id="todoCheck4"/>
                    <label for="todoCheck4"></label>
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-success"><i className="far fa-clock"></i> 3 days</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo5" id="todoCheck5"/>
                    <label for="todoCheck5"></label>
                  </div>
                  <span className="text">Check your messages and notifications</span>
                  <small className="badge badge-primary"><i className="far fa-clock"></i> 1 week</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                  <div  className="icheck-primary d-inline ml-2">
                    <input type="checkbox" value="" name="todo6" id="todoCheck6"/>
                    <label for="todoCheck6"></label>
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-secondary"><i className="far fa-clock"></i> 1 month</small>
                  <div className="tools">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-o"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus"></i> Add item</button>
            </div>
          </div>
        </section>
       
        {/* <!-- right col (We are only adding the ID to make the widgets sortable)--> */}
        <section className="col-lg-5 connectedSortable">
          <div className="card bg-gradient-primary">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-map-marker-alt mr-1"></i>
                Visitors
              </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                  <i className="far fa-calendar-alt"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div id="world-map" style={{ height: '250px', width: '100%' }}></div>
            </div>
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">
                  <div id="sparkline-1"></div>
                  <div className="text-white">Visitors</div>
                </div>
                <div className="col-4 text-center">
                  <div id="sparkline-2"></div>
                  <div className="text-white">Online</div>
                </div>
                <div className="col-4 text-center">
                  <div id="sparkline-3"></div>
                  <div className="text-white">Sales</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-gradient-info">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-th mr-1"></i>
                Sales Graph
              </h3>

              <div className="card-tools">
                <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <canvas className="chart" id="line-chart" style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%' }}></canvas>
            </div>
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">
                  <input type="text" className="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                         data-fgColor="#39CCCC"/>

                  <div className="text-white">Mail-Orders</div>
                </div>
                <div className="col-4 text-center">
                  <input type="text" className="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                         data-fgColor="#39CCCC"/>
                  <div className="text-white">Online</div>
                </div>
                <div className="col-4 text-center">
                  <input type="text" className="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                         data-fgColor="#39CCCC"/>
                  <div className="text-white">In-Store</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-gradient-success">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="far fa-calendar-alt"></i>
                Calendar
              </h3>
              <div className="card-tools">
                <div className="btn-group">
                  <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="dropdown-menu" role="menu">
                    <a href="#" className="dropdown-item">Add new event</a>
                    <a href="#" className="dropdown-item">Clear events</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">View calendar</a>
                  </div>
                </div>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body pt-0">
              <div id="calendar" style={{ width: '100%' }}></div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- /.row (main row) --> */}
    </div>
  </section>
</div>
<footer className="main-footer">
  <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
  All rights reserved.
  <div className="float-right d-none d-sm-inline-block">
    <b>Version</b> 3.2.0
  </div>
</footer>
<aside className="control-sidebar control-sidebar-dark">
</aside>
</div>
    </div>
    </>
  )
}

export default Dashboard