import { useState } from "react";
import Navbar from "../components/navbar";

import "./Relevantskills.css"

function Relevantskills() {

    const [sales, setSales] = useState(false);
    let salesRate = Array(4).fill(0);
    let salesNotRate = Array(1).fill(0);
    const [support, setSupport] = useState(false);
    let supportRate = Array(5).fill(0);
    let supportNotRate = Array(0).fill(0);
    const [program, setProgram] = useState(false);
    let programRate = Array(4).fill(0);
    let programNotRate = Array(1).fill(0);
    const [data, setData] = useState(false);
    let dataRate = Array(5).fill(0);
    let dataNotRate = Array(0).fill(0);
    const [syst, setSyst] = useState(false);
    let systRate = Array(3).fill(0);
    let systNotRate = Array(2).fill(0);
    const [proj, setProj] = useState(false);
    let projRate = Array(4).fill(0);
    let projNotRate = Array(1).fill(0);

    return (

      <div>
        <Navbar/>
        <h1>Relevant Skills</h1>
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSales(!sales);}} class={sales?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">Sales</th>
                            <th scope="col">
                                {salesRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {salesNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">With over five years of experience interfacing with sales, I have consistently demonstrated my ability to engage with diverse hierarchical levels to drive the successful sale of unique technological solutions. My approach has always been rooted in understanding client needs and delivering tailored solutions that add value. While working at Vtech, I ventured into a new market by leveraging the success story of an international client. This effort led to the establishment of a partnership with Aeris, a key player in wind turbine blade manufacturing, allowing me to expand into the renewable energy sector. This achievement highlights my ability to identify opportunities, navigate complex markets, and build strong relationships in emerging industries.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSupport(!support);}} class={support?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">Customer Support & Client Success</th>
                            <th scope="col">
                                {supportRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {supportNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Over the past seven years, I have built a solid foundation in customer support by commissioning systems and acting as a trusted partner on the supplier side. My role has involved addressing critical issues, from resolving blocking bugs to developing improvement proposals collaboratively with clients. I have a proven track record of delivering solutions that meet and exceed client expectations. This includes ensuring seamless system implementations, maintaining clear communication, and fostering trust. My customer-centric approach has consistently led to successful outcomes and long-term client satisfaction.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setProgram(!program);}} class={program?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">Programming & Logical Mindset</th>
                            <th scope="col">
                                {programRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {programNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">My programming journey began during my university days when I realized my aptitude for logic and problem-solving. At the conclusion of my trainee program, I developed a Python script that integrated a coordinate measuring machine with a statistical software application for Fiat’s automotive factory. This achievement earned me an opportunity to deepen my expertise in Germany, where I focused on Python programming and autonomous measurement systems. Throughout my career, I have automated repetitive tasks using a variety of tools and technologies. Additionally, I completed a Certified Web Development program, where I gained proficiency in JavaScript (Node.js), HTML, CSS, Java, DevOps tools like Ansible and Terraform, AWS, and databases such as SQL. These experiences have honed my logical thinking and ability to develop efficient, scalable solutions.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setData(!data);}} class={data?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">Data Analytics</th>
                            <th scope="col">
                                {dataRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {dataNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Since joining AngloGold Ashanti, I have specialized in integrating solutions through data. Working in the challenging environment of an underground mine—a sector traditionally resistant to technological change—I manage over 60 production control reports that drive insights and decision-making. My role requires expertise in SQL, PostgreSQL, PLC historians, and Excel, among other tools. I excel in transforming raw data into actionable insights and thrive in leveraging analytics to optimize operations. These skills equip me to take on similar challenges in sectors like agronomy at Arva Intelligence, where I am eager to bring data-driven solutions to traditional industries.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSyst(!syst);}} class={syst?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">System Integration</th>
                            <th scope="col">
                                {systRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {systNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">At AngloGold Ashanti, I led the development of innovative integrations between the fleet management system and the personnel tracking database. This groundbreaking solution enabled the simultaneous analysis of operator and equipment timelines, yielding insights that improved efficiency and safety. My experience extends to various other integration projects aimed at enhancing operational productivity and aligning disparate systems. These achievements demonstrate my ability to bridge the gap between complex technologies, creating cohesive solutions that deliver measurable results.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setProj(!proj);}} class={proj?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" className="w-75 p-3">Project Development</th>
                            <th scope="col">
                                {projRate.map((rate) => (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                                </svg>
                                ))}
                                {projNotRate.map((rate) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree text-secondary" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
                                </svg>
                                ))}
                            </th>
                            </tr>
                        </thead>
                    </table>
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">With an MBA in Project Management, I bring a comprehensive understanding of tools and methodologies for managing scope, costs, stakeholders, quality, and more. Early in my career at Fiat, I applied these principles to streamline project workflows and ensure timely, successful outcomes. My experience extends to system commissioning projects for clients, where I balanced expectations, communication, and quality to deliver solutions that met business objectives. This skillset has been pivotal in aligning teams, managing complexities, and driving projects to completion while ensuring client satisfaction.</div>
                </div>
            </div>
            </div>

      </div>
    );
  }
  
  export default Relevantskills;
  