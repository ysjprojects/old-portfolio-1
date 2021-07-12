
<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <Introduction/>
      </div>
      <div class="carousel-item">
        <About/>
      </div>
      <div class="carousel-item">
        <Education/>
      </div>
      <div class="carousel-item">
        <Skills/>
      </div>
      <div class="carousel-item">
        <Awards/>
      </div>
      <div class="carousel-item">
        <Projects/>
      </div>
      <div class="carousel-item">
        <Conclusion/>
      </div>
      
    </div>
    <button id="prevBtn" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button id="nextBtn" class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import Introduction from "./Introduction.vue"
import About from "./About.vue"
import Education from "./Education.vue"
import Skills from "./Skills.vue"
import Awards from "./Awards.vue"
import Projects from "./Projects.vue"
import Conclusion from "./Conclusion.vue"
export default {
  name: "Carousel",
  components: {
    Introduction,
    About,
    Education,
    Skills,
    Awards, 
    Projects,
    Conclusion
  },
  created() {
    window.addEventListener('wheel', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('wheel',this.handleScroll)
  },

  methods: {
    handleScroll(e) {
          var xAxis = e.deltaX;
          var yAxis = e.deltaY;
          if (yAxis > 0 || xAxis > 0) {
            document.getElementById("prevBtn").click()
          } else if (yAxis < 0 || xAxis < 0) {
            document.getElementById("nextBtn").click()
          }
          console.log(xAxis,yAxis)
          
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
