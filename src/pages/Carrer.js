import { useState } from "react";
import Navbar from "../components/navbar";

//import "./home.css"

function Carrer() {

    const [sales, setSales] = useState(false);
    const [support, setSupport] = useState(false);
    let supportRate = Array(5).fill(0);
    const [program, setProgram] = useState(false);
    const [data, setData] = useState(false);
    const [syst, setSyst] = useState(false);
    const [proj, setProj] = useState(false);

    return (
        <div>
        <Navbar/>
        <h1>Carrer Relevant Achievements</h1>
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSales(!sales);}} class={sales?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Abroad German Training
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">During my time at Vtech Consulting, I had the privilege of traveling to Germany twice as part of my professional development. The first trip was a reward for successfully completing the Vtech Trainee Program and a recognition of my efforts in developing and implementing a groundbreaking project for Fiat Chrysler. This project integrated 3D measurement and scanning machines directly into the statistical control software, enhancing process efficiency and precision in the factory.

To further develop my skills, I undertook an advanced Python training course during this trip, building upon the knowledge that contributed to the project’s success. Additionally, I completed two specialized courses to deepen my expertise:
<br/>
<br/> - Automated Machinery Training: Gaining comprehensive knowledge of automated systems to optimize industrial processes.
<br/> - AUKOM Metrology Certification: I achieved the prestigious AUKOM Metrologist Level 3 in GD&T, a top-tier qualification in dimensional metrology.
<br/><br/><b>Specialized Expertise and Client Customizations</b><br/>
My second trip to Germany solidified my position as a metrology specialist. With the AUKOM certification, I was equipped to deliver unique solutions tailored to clients’ needs. This enabled me to perform highly specialized customizations for various industries, addressing complex measurement challenges with precision and innovation.

These experiences not only expanded my technical skills but also allowed me to contribute significantly to Vtech Consulting’s mission of delivering cutting-edge solutions. They remain a defining chapter in my career, showcasing the value of continuous learning and global collaboration.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSupport(!support);}} class={support?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    2021 Zero Harm AngloGold Ashanti Prize
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">In 2021, the Mobilaris People Tracking System was recognized as the winner of the prestigious Zero Harm Award by AngloGold Ashanti, competing with outstanding safety and innovation projects from all the company’s global operations. The award was officially presented in 2022, celebrating this groundbreaking achievement.

As a key team member, I played a fundamental role in the project by developing a comprehensive database that enables actionable insights and informed decision-making on various logistical and safety aspects of the Cuiabá Mine. This database has empowered the operation to achieve remarkable milestones in both safety and productivity.

            <br/><b>22% Reduction in Mine Evacuation Time</b><br/>
The implementation of the Mobilaris system brought transformative benefits, notably reducing mine evacuation times by 22%. This improvement was critical in enhancing logistical efficiency and ensuring the safety of the workforce during emergencies.

The system also became a pivotal tool in logistical planning, enabling the detailed analysis of operators' activities and movements. In 2022, it was instrumental in an initiative to boost the production of fandrill-drilled reserves, providing a comprehensive overview of operators’ cycles and helping optimize their performance.</div>
                <img style={{ padding: 10}} src={require("../media/ZH1.jpeg")} alt="123" className="w-50 p-3"/>
                <img style={{ padding: 10}} src={require("../media/ZH2.jpeg")} alt="123" className="w-50 p-3"/>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setProgram(!program);}} class={program?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    3 Published Articles
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Throughout my career, I have had the opportunity to contribute to the mining sector by authoring and publishing three scientific articles presented at the Mineria Digital and Safe Mining Congresses. These articles address key technological advancements implemented at the Cuiabá Mine and highlight their impact on safety, productivity, and operational efficiency.

                <br/><b>Enhancing Safety with Mobilaris People Tracking</b><br/>
The first article focuses on the implementation of the Mobilaris People Tracking System, which I commissioned shortly after joining AngloGold Ashanti in 2022. This groundbreaking system represents a milestone in underground personnel recognition by providing real-time tracking of workers within the mine.

It significantly enhances situational awareness during emergencies and evacuations, ensuring that every individual is accounted for and safely guided. By elevating operational safety to unprecedented levels, this system has become a benchmark for emergency management in mining operations worldwide.

<br/><b>Boosting Productivity Through Data Integration</b><br/>
The second article explores the integration of Mobilaris People Tracking with its generated datasets to optimize mine productivity. In a challenging environment like Cuiabá Mine, with over 1,600 vertical kilometers and a vast ore body, logistical inefficiencies can lead to significant operational delays.

By leveraging the system's data, we have been able to reduce logistical losses, improve operational scheduling, and ensure a more efficient allocation of resources. This integration has proven transformative, allowing the mine to maintain a high level of productivity while overcoming the complexities of its unique environment.

<br/><b>Low-Code Solutions for Complex Problems</b><br/>
The third article addresses the adoption of low-code programming practices to solve intricate challenges, particularly in managing expensive resources such as drilling and blasting tools. The development of a simplified and customizable interface allowed personnel with minimal computer skills to execute precise management tasks and provide actionable insights into operational continuity.

This innovative approach has led to greater accessibility and empowered a broader range of team members to contribute effectively to supply management and decision-making processes, driving operational efficiency and cost savings across the board.</div>
                <img style={{ padding: 10}} src={require("../media/Slide37.jpg")} alt="123" className="w-50 p-3"/>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setData(!data);}} class={data?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Congress Participation - Speaker & Advisory Comittee
                </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">In 2023, I had the honor of being invited to present at the Hexagon Live Conference in Las Vegas, USA, one of the most prominent events in the field of digital technology and geospatial solutions. As a representative of AngloGold Ashanti, I showcased the innovative applications of Hexagon systems implemented at the Cuiabá Mine, highlighting their impact on operational safety, productivity, and data-driven decision-making.

Delivering my presentation in English to an international audience of industry leaders, I emphasized how our integration of Hexagon technologies revolutionized underground mining processes. This opportunity not only strengthened my public speaking and technical storytelling skills but also enhanced the visibility of AngloGold Ashanti as a leader in mining innovation.
                <br/><img style={{ padding: 10}} src={require("../media/Slide64.png")} alt="123" className="w-50 p-3"/>
                <br/>Also in 2023, I was invited to join the Advisory Committee for the Mineria Digital Congress, organized by GECAMIN in Chile. This event is a benchmark for digital transformation and innovation in the mining sector, bringing together professionals and experts to discuss cutting-edge technologies and methodologies.

As part of my contribution, I supported the organization and direction of the congress and presented two research papers focused on the innovative technological initiatives undertaken at the Cuiabá Mine. This role allowed me to engage with a global network of industry experts, exchange knowledge, and position AngloGold Ashanti as a thought leader in mining digitization.
                <br/><p><a class="link-offset-1 text-secondary" style={{ padding: 10}} href="https://gecamin.com/mineriadigital/2023/comiteall?idioma=ingles#ChildTab-12">MineriaDigital 2023 - Advisory Committee</a></p>
                <br/><br/><img style={{ padding: 10}} src={require("../media/Gecamin.png")} alt="123" className="w-50 p-3"/>
                </div></div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setSyst(!syst);}} class={syst?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    2023 AngloGold Ashanti Kaizen Nomination
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">As part of the AngloGold Ashanti team at the Cuiabá Mine, I had the privilege of contributing to the Equipment Association in the Lamp Room Project, which earned 2nd place in the Kaizen Award 2023. This initiative showcased excellence in continuous improvement, focusing on enhancing safety, productivity, and asset traceability in one of the most challenging underground mining environments.

The project involved automating and streamlining the process of associating equipment with personnel in the lamp room. With over 500 workers accessing the mine per shift, this solution significantly reduced wait times at the queue for mine entry, increasing operational efficiency. Additionally, it ensured precise tracking of equipment and personnel, enhancing asset management and enabling greater oversight of underground operations.

By improving safety protocols and optimizing time management, this initiative demonstrated the practical application of Lean principles in a high-stakes, complex mining environment. It reflects AngloGold Ashanti’s commitment to innovation, operational excellence, and continuous improvement, aligning with the company’s vision of sustainable and responsible mining practices.

This achievement is a testament to the power of collaborative problem-solving and the pursuit of transformative solutions in the mining industry.</div>
                <img style={{ padding: 10}} src={require("../media/Slide91.jpg")} alt="123" className="w-75 p-3"/>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button onClick={() => {setProj(!proj);}} class={proj?"accordion-button collapsed text-secondary bg-primary":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    1º Place Ventilation On Demmand Project - IBRAM Nomination
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">As the person responsible for the Mobilaris tracking system at AngloGold Ashanti’s Cuiabá Mine, I had the honor of contributing to the Demand-Based Ventilation Project, which won 1st place in the Best Practices in Mining Award by the Brazilian Mining Institute (IBRAM) in the Energy Efficiency category.

This groundbreaking project, implemented in the underground mine in Sabará (MG), integrated the personnel tracking system with the automated control of mine fans. The solution, based on automation logic, adjusts fan speeds according to the presence of workers in the operating zones, ensuring adequate airflow only where needed. In addition to enhancing worker safety, this innovation reduced energy consumption by up to 25%, establishing itself as a milestone in sustainability and operational efficiency within the mining sector.

The award, presented during EXPOSIBRAM 2024, recognized the project for its contribution to AngloGold Ashanti's decarbonization efforts, aligning with the company's global goal of achieving net-zero greenhouse gas emissions by 2050. This achievement underscores the commitment to technological innovation integrated with environmental responsibility, positioning AngloGold as a leader in sustainable mining in Brazil.

Being part of this project was a significant milestone in my career, demonstrating the practical application of smart solutions that connect people, technology, and sustainability to transform operational challenges into tangible results.</div>
                <p><a class="link-offset-1 text-secondary" style={{ padding: 10}} href="https://ibram.org.br/noticia/anglogold-ashanti-fecha-exposibram-com-premiacao-por-eficiencia-energetica/">AngloGold Ashanti fecha EXPOSIBRAM com premiação por eficiência energética</a></p>
                <img style={{ padding: 10}} src="http://ibram.org.br/wp-content/uploads/2024/09/unnamed-2.jpg" alt="123" className="w-75 p-3"/>
                </div>
                
            </div>
            </div>

      </div>
    );
  }
  
  export default Carrer;
  