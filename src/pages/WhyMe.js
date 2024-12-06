import Navbar from "../components/navbar";

//import "./home.css"

function WhyMe() {
    return (
      <div>
        <Navbar/>
        <h1>Why ME!</h1>
        
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade justify-content-center align-items-center" style={{ padding: 10}}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={require("../media/slide6.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("../media/slide7.png")} class="d-block w-100" alt="..."/>
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
        
      </div>
    );
  }
  
  export default WhyMe;
  