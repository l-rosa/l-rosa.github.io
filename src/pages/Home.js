import Navbar from "../components/navbar";
import "../components/mycolors.css";

import "./home.css"
import { useState } from "react";

function Home() {

    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
      <div>
        <Navbar/>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade justify-content-center align-items-center" style={{ padding: 10}}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={require("../media/slide1.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("../media/slide2.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("../media/slide3.png")} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class={selectedIndex===1?"nav-link active text-secondary":"nav-link text-primary"} aria-current="page" onClick={() => {setSelectedIndex(1);}} >About Me</a>
            </li>
            <li class="nav-item">
                <a class={selectedIndex===2?"nav-link active text-secondary":"nav-link text-primary"} onClick={() => {setSelectedIndex(2);}}>Education</a>
            </li>
            <li class="nav-item">
                <a class={selectedIndex===3?"nav-link active text-secondary":"nav-link text-primary"} onClick={() => {setSelectedIndex(3);}}>Work Experience</a>
            </li>
        </ul>


        <div style={{ height: 100,  padding: 10}}>
        <div class="row">
            <div class="col-20" >
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                {selectedIndex===1?(
                <div id="item-1">
                    <h4>About Me</h4>
                    <p>33 years old, married, without children. With more than 11 years of experience as an Engineer in different industries, always close to technology, facing clients, supporting and comissioning disruptive systems implementations at Automotive, Energy Generation, Mining. I’m an automotivated person, a self and quick learner, with increased empathy and analitycal.</p>
                </div>):("")}
                {selectedIndex===2?(
                <>
                <div id="item-2-1">
                    <h5>Feb/2010 to Jul/2015 - Mechatronical Engineering</h5> 
                    <p>Pontifícia Universidade Católica de Minas Gerais</p>
                </div>
                <div id="item-2-2">
                    <h5>Apr/2015 to Dec/2017 - MBA Project Management</h5>
                    <p>Fundação Getúlio Vargas</p>
                </div>
                <div id="item-2-3">
                    <h5>Jul/2021 to Apr/2023 - Certified Tech Developer (Web Development)</h5>
                    <p>Digital House & Rocket Seat</p>
                </div>
                </>):("")}
                {selectedIndex===3?(
                <>
                <div id="item-3-1">
                    <h5>Oct/2021 to Now - Systems & Automation Engineer</h5>
                    <h6>AngloGold Ashanti</h6>
                    <p>Systems engineer, responsible for fleet/dispatch system and people tracking system at
operational control room of mine. Responsible for reports, and every technology/automation
that aims mine production improvement. Responsible for maintaining servers, historian control
tags, structure and availability of data. Interface with IT and OT infrastructure.
Participation on Dam Monitoring Center at Metalurgical Plant, resposible for restructuring the
automated alerts and sirens, also implemented the failure automatical analisys using SHMS &
Geoinspector Softwares.
Implemented People Tracking System at the Operational Control Center, and people time usage
model. Increased the embbeded fleet of dispatch system by over 40%.
Implemented the Operator Alertness System. Has designed and deployed focused reports to
reduce fuel consumption, downtime over shifts, heatmaps and localization of refugee chambers.</p>
                </div>
                <div id="item-3-2">
                    <h5>Feb/2021 to Oct/2021 - Product Support Engineer & Customer Success</h5>
                    <h6>Wabtec / GE Transportation</h6>
                    <p>Specialized in Anti-Collision Monitoring System (CAS) for Mining equipment and machinery fleet.
Providing exceptional customer support, diagnostic, troubleshooting, system improvement, and
embedded system development. Leading projects, designing new installations, and
programming software for simulation and real case study to achieve optimal practices for
installation, usage, and maintenance, collaborating with global teams of product support.
Responsible for increasing on 70% the availability of shovels collision awareness installations.</p>
                </div>
                <div id="item-3-3">
                    <h5>May/2016 to Jan/2021 - Application Engineer & Account Executive</h5>
                    <h6>Vtech Consulting</h6>
                    <p>As a Support Engineer, my focus was to provide top-notch consultancy on projects,
commissioning and services across various industries including automotive, mining, transport,
Wind&Turbine, and Oil&Gas. With a strong emphasis on client satisfaction, I drive the
development of products and clients to ensure customer success, which results in worldwide
success and positive client feedback. My expertise includes sales enrollment of complete
solutions, Saas (Software as Services), and training. I also participate in events to bring in lowcost
leads and analyze sales pipelines through CRM software, ensuring optimal results for my
clients.</p>
                </div>
                <div id="item-3-4">
                    <h5>Sep/2013 to May/2016 - Product Development Engineer</h5>
                    <h6>Fiat Chrysler Automobiles</h6>
                    <p>As a CAE Engineer, i designed, modeled, and correlated finite element models for structural and
vehicle dynamics analysis. I leverage a wide range of FEA/CAD software to meet functional
targets, optimize components, and improve efficiency by reducing size, cost, and weight. I also
engage in post-processing and report discussion with clients to ensure their satisfaction. My
experience extends to participating in physical tests, executing them, and identifying ways to
enhance product behavior. I collect data to diagnose product behavior, and improve simulation
correlation.</p>
                </div>
                </>):("")}
                </div>
            </div>
            </div>

      </div>

      

      </div>
    );
  }
  
  export default Home;
  