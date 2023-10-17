import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import "./Texlacss.css";

const TexlaCompanyManagement = () => {
  return (
    <div className="texla-company-management">

      {/* sidebar */}
      <aside className="dashboardnavvertical">
        <aside className="dashboardnavverticalbackgro">
          <div className="dashboardnavverticalbackgro-inner">
            <div className="frame-parent">
              <div className="texla-wrapper">
                <div className="texla">TEXLA</div>
              </div>
              <div className="culture-wrapper">
                <div className="texla">CULTURE</div>
              </div>
            </div>
          </div>
          <img className="divider-icon" alt="" src="/divider.svg" />
        </aside>
        <a className="items">
          <div className="dashboardnavverticalsubhead">
            <b className="subheader">General</b>
          </div>

          <div className="dashboardnavverticalitem">
            <div className="icon">
              <i class="fa-solid fa-gauge-simple-high fa-2xl"></i>
            </div>
            <div className="text">
              <div className="title">Dashboard</div>
            </div>
            <div className="arrow">
              <i class="fa-solid fa-angle-down fa-rotate-270"></i>
            </div>
          </div>
          <div className="dashboardnavverticalitem1">
            <div className="icon">
              <i class="fa-solid fa-house-chimney-user fa-2xl"></i>
            </div>
            <div className="text">
              <div className="title1">Companies</div>
            </div>
            <div className="arrow">
              <i class="fa-solid fa-angle-down fa-rotate-270"></i>
            </div>
          </div>
          <div className="dashboardnavverticalitem1">
            <div className="icon">
              <i class="fa-solid fa-house-chimney-user fa-2xl"></i>
            </div>
            <div className="text">
              <div className="title1">{`Support & Tickets`}</div>
            </div>
            <div className="arrow">
              <i class="fa-solid fa-angle-down fa-rotate-270"></i>
            </div>
          </div>
          <div className="dashboardnavverticalitem1">
            <div className="icon">
              <i class="fa-solid fa-house-chimney-user fa-2xl"></i>
            </div>
            <div className="text">
              <div className="title1">User Admins</div>
            </div>
            <div className="arrow">
              <i class="fa-solid fa-angle-down fa-rotate-270"></i>
            </div>
          </div>
        </a>
      </aside>

      {/* navbar */}
      <nav className="dashboardheader">
        <div className="stack">
            <form class="nosubmit">
              <input class="nosubmit" type="search" placeholder="Search..."/>
            </form>
        </div>
        <div className="stack1">
          <div className="lang">
            <div className="iconsflagsic-en">
              <img className="gb-icon" alt="" src="./assets/flag.png" />
            </div>
          </div>
          <div className="notification">
            <div className="iconbutton1">
              <i class="fa-solid fa-bell fa-2xl"></i>
            </div>
            <div className="badge">
              <div className="number">8</div>
            </div>
          </div>
          <div className="contacts">
            <i class="fa-solid fa-user-group fa-2xl"></i>
          </div>
          <div className="account">
            <i class="fa-regular fa-circle-user fa-2xl"></i>
          </div>
        </div>
      </nav>

      <h1 className="client-management">Client Management</h1>
      {/* Key performance indicator */}
      <div className="frame-group">
        <h2 className="key-performance-indicator-wrapper">
          <div className="key-performance-indicator">
            Key Performance Indicator
          </div>
        </h2>
        <div className="frame-container">
          <div className="line-parent">
            <div className="frame-child" />
            <div className="client-retention-rate-parent">
              <b className="key-performance-indicator">Client Retention Rate</b>
              <b className="b">55%</b>
            </div>
          </div>
          <div className="line-parent">
            <div className="frame-item" />
            <div className="client-retention-rate-parent">
              <div className="key-performance-indicator">
                Client Satisfaction
              </div>
              <div className="div">55%</div>
            </div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="client-retention-rate-parent">
              <div className="key-performance-indicator">Revenue Generated</div>
              <div className="div1">55%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Status */}
      <div className="frame-div">
        <div className="companies-status-wrapper">
          <h3 className="companies-status">Companies Status</h3>
        </div>
        <div className="frame-parent1">
          <div className="line-parent1">
            <div className="frame-child" />
            <div className="client-retention-rate-parent">
              <div className="key-performance-indicator">Total</div>
              <div className="wrapper">
                <div className="div2">20</div>
              </div>
            </div>
          </div>
          <div className="line-parent2">
            <div className="frame-inner" />
            <div className="client-retention-rate-parent">
              <div className="key-performance-indicator">Active</div>
              <div className="container">
                <div className="div2">15</div>
              </div>
            </div>
          </div>
          <div className="line-parent2">
            <div className="frame-item" />
            <div className="client-retention-rate-parent">
              <div className="key-performance-indicator">New</div>
              <div className="frame">
                <div className="div2">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* graph */}
      <div className="frame-parent2">
        <div className="companies-status-wrapper">
          <p className="regional-metrics">Regional Metrics</p>
        </div>
        <div className="group-parent">
          <img className="group-icon" alt="" src="/group.png" />
          <div className="frame-parent3">
            <div className="east-parent">
              <div className="key-performance-indicator">East</div>
              <div className="frame-child1" />
            </div>
            <div className="east-parent">
              <div className="key-performance-indicator">North</div>
              <div className="ellipse-div" />
            </div>
            <div className="east-parent">
              <div className="key-performance-indicator">South</div>
              <div className="frame-child3" />
            </div>
            <div className="east-parent">
              <div className="key-performance-indicator">West</div>
              <div className="frame-child4" />
            </div>
          </div>
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector-2.svg" />
            <div className="clients-parent">
              <div className="key-performance-indicator">20 Clients</div>
              <div className="frame-parent4">
                <div className="vector-wrapper">
                  <img className="frame-child5" alt="" src="/vector-3.svg" />
                </div>
                <div className="div5">₹500000</div>
              </div>
            </div>
          </div>
          <div className="vector-group">
            <img className="frame-child6" alt="" src="/vector-21.svg" />
            <div className="clients-group">
              <div className="key-performance-indicator">5 Clients</div>
              <div className="frame-parent4">
                <div className="vector-wrapper">
                  <img className="frame-child5" alt="" src="/vector-31.svg" />
                </div>
                <div className="div5">₹100000</div>
              </div>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="clients-group">
              <div className="key-performance-indicator">6 Clients</div>
              <div className="frame-parent4">
                <div className="vector-wrapper">
                  <img className="frame-child5" alt="" src="/vector-32.svg" />
                </div>
                <div className="div5">₹250000</div>
              </div>
            </div>
            <img className="frame-child9" alt="" src="/vector-22.svg" />
          </div>
          <div className="frame-parent8">
            <div className="clients-group">
              <div className="clients3">1 Clients</div>
              <div className="frame-parent4">
                <div className="vector-wrapper">
                  <img className="frame-child5" alt="" src="/vector-33.svg" />
                </div>
                <div className="div5">₹20000</div>
              </div>
            </div>
            <img className="frame-child11" alt="" src="/vector-23.svg" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="frame-parent10">
        <div className="onboarded-companies-wrapper">
          <h2 className="companies-status">Onboarded Companies</h2>
        </div>
        <table className="tableviewinvoice">
          <tbody>
            <tr>
              <td className="td" colSpan={6}>
                <div className="layer" />
              </td>
            </tr>
            <tr>
              <td className="td1" colSpan={2}>
                <DropdownButton
                  className="select"
                  variant="secondary"
                  title="All"
                >{` `}</DropdownButton>
              </td>
              <td className="td" colSpan={6}>
                <Form className="textfield">
                  <Form.Control type="text" placeholder="Search client or invoice number..."/>
                </Form>
              </td>
            </tr>
            <tr>
              <td className="td1" colSpan={2}>
                <div className="tablecell">
                  <div className="stack2">
                    <div className="th-text">Company Name</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell">
                  <div className="stack3">
                    <div className="th-text1">Onboarding date</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell">
                  <div className="stack3">
                    <div className="th-text1">Go-Live Date</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell">
                  <div className="stack3">
                    <div className="th-text">Total User base</div>
                  </div>
                </div>
              </td>
              <td className="td1" colSpan={2}>
                <div className="tablecell4">
                  <div className="stack6">
                    <div className="th-text4">Last Billing</div>
                  </div>
                </div>
              </td>
              <td className="td">
                <div className="tablecell">
                  <div className="stack3">
                    <div className="th-text1">Status</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="tr">
              <td className="td1" colSpan={2}>
                <div className="tablecell6">
                  <div className="stack8">
                    <div className="account">
                      <img
                        className="container-icon"
                        alt=""
                        src="/container1@2x.png"
                      />
                    </div>
                    <div className="with-subline">
                      <div className="name1">Texlaculture</div>
                      <div className="subline">INV-17048</div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">12 Jan 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">07 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">244</div>
                  </div>
                </div>
              </td>
              <td className="td1" colSpan={2}>
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">07 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td className="td">
                <div className="tablecell11">
                  <div className="label">
                    <b className="label1">Active</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="tr">
              <td className="td1" colSpan={2}>
                <div className="tablecell12">
                  <div className="stack13">
                    <div className="account">
                      <img
                        className="container-icon"
                        alt=""
                        src="/container2@2x.png"
                      />
                    </div>
                    <div className="with-subline1">
                      <div className="name3">Pinch Life</div>
                      <div className="subline1">INV-17049</div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">11 Feb 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">06 May 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">1000</div>
                  </div>
                </div>
              </td>
              <td className="td1" colSpan={2}>
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">07 Aug 2022-</div>
                  </div>
                </div>
              </td>
              <td className="td">
                <div className="tablecell11">
                  <div className="label">
                    <b className="label1">Active</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="tr">
              <td className="td1" colSpan={2}>
                <div className="tablecell18">
                  <div className="stack13">
                    <div className="account">
                      <img
                        className="container-icon"
                        alt=""
                        src="/container3@2x.png"
                      />
                    </div>
                    <div className="with-subline1">
                      <div className="name3">O Buddy</div>
                      <div className="subline1">INV-13042</div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">10 Sep 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell7">
                  <div className="stack3">
                    <div className="dd-mmm-yyyy1">05 Oct 2022</div>
                  </div>
                </div>
              </td>
              <td className="td1">
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">150</div>
                  </div>
                </div>
              </td>
              <td className="td1" colSpan={2}>
                <div className="tablecell9">
                  <div className="stack3">
                    <div className="td-text">207 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td className="td">
                <div className="tablecell11">
                  <div className="label4">
                    <b className="label5">Draft</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="tr">
              <td className="td27">
                <div className="switch">
                  <div className="switch-container">
                    <div className="switch1">
                      <div className="thumb" />
                    </div>
                  </div>
                  <div className="label-end">Dense</div>
                </div>
              </td>
              <td className="td27" colSpan={4}>
                <div className="rows-per-page">Rows per page:</div>
              </td>
              <td className="td27">
                <div className="select1">
                  <div className="label-end">5</div>
                  <i class="fa-solid fa-angle-down fa-sm"></i>
                </div>
              </td>
              <td className="td27">
                <div className="label-end">6-10 of 11</div>
              </td>
              <td className="ellipse-formcheck">
                <div className="nextprev">
                  <div className="iconbutton">
                    <i class="fa-solid fa-angle-left fa-sm"></i>
                  </div>
                  <div className="iconbutton">
                    <i class="fa-solid fa-angle-right fa-sm"></i>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* user */}
      <div className="frame-parent11">
        <div className="companies-status-wrapper">
          <div className="key-performance-indicator">Active User Base</div>
        </div>
        <div className="group-container">
          <div className="group-div">
            <div className="group-child" />
            <div className="group-item" />
            <div className="group-inner" />
          </div>
          <div className="ellipse-parent">
            <div className="frame-child12" />
            <div className="parent">
              <div className="app-user">89%</div>
              <div className="app-user">App User</div>
            </div>
          </div>
          <div className="ellipse-group">
            <div className="frame-child13" />
            <div className="group">
              <div className="app-user">11%</div>
              <div className="app-user">Web User</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Clients Details */}
      <div className="tab-parent">
        <div className="tab">
          <div className="stack">
            <div className="label6">Dashboard</div>
          </div>
          <div className="space" />
        </div>
        <div className="tab1">
          <div className="stack">
            <div className="label6">Clients Details</div>
          </div>
          <div className="space" />
        </div>
      </div>
    </div>
  );
};

export default TexlaCompanyManagement;
