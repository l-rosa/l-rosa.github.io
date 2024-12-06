import "./mycolors.css";


function Navbar() {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid bg-primary">
            <a class="navbar-brand text-secondary" href="/"><h1>Lucas Rosa</h1><h4>Sales & Software Engineer</h4></a>
            <button class="navbar-toggler text-white bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="/">About Me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="/RelevantSkills">Relevant Skills</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="/CarrerAchievements" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Carrer Achievements Highlights
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">Abroad Germany Training</a></li>
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">2021 Zero Harm AngloGold Ashanti Prize</a></li>
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">3 Published Articles</a></li>
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">Congress Participation - Speaker & Advisory Committee</a></li>
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">2023 AngloGold Ashanti Kaizen Nomination</a></li>
                    <li><a class="dropdown-item text-primary" href="/CarrerAchievements">1º Place Ventilation On Demmand Project - IBRAM Nomination</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="/WhyME">Why ME!</a>
                </li>                
            </ul>
            </div>
            <img src={require("../media/ms-arva-intelligence-logo - White.png")} alt="123" style={{ height: 60 }}/>
        </div>
    </nav>
    );
  }
  
  export default Navbar;
  