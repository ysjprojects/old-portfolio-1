
<template>
  <div>
      <Introduction/>
      <About/>
      <Education/>
      <Skills/>
  </div>
</template>

<script>
import Introduction from "./Introduction.vue"
import About from "./About.vue"
import Education from "./Education.vue"
import Skills from "./Skills.vue"
/*import Awards from "./Awards.vue"
import Projects from "./Projects.vue"
import Conclusion from "./Conclusion.vue"*/
export default {
  name: "Mobile",
  components: {
      Introduction,
      About,
      Education,
      Skills
  }
  /*components: {
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
          e.preventDefault();
          var xAxis = e.deltaX;
          var yAxis = e.deltaY;
          if (yAxis > 0 || xAxis < 0) {
            document.getElementById("prevBtn").click()
          } else if (yAxis < 0 || xAxis > 0) {
            document.getElementById("nextBtn").click()
          }
          console.log(xAxis,yAxis)
          
    }
  }*/
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
