<template>
    <div id="main">
        <div class="container" style="position:relative">
            <div id="text-box">
                <div v-html="content" style="margin: 0 auto">
                </div>
            </div>
            <ul class='circle-container'>
                <li v-for="skill in skills" :key="skill"><Skill @load-skill-info="loadSkillInfo" @unload-skill-info="unloadSkillInfo" :name="skill.name" :experience="skill.experience" :src="skill.src"/></li> 
            </ul>
        </div>
    </div>
</template>

<script>
import Skill from "./Skill.vue"
export default {
    name:"Skills",
    components: {
        Skill,
    },
    data: function() {
        return {
            skills: [
                {"name":"C++",
                "experience":"5 years",
                "src":"c++.png"},
                {"name":"CSS",
                "experience":"6 years",
                "src":"css.png"},
                {"name":"HTML",
                "experience":"6 years",
                "src":"html.png"},
                {"name":"Javascript",
                "experience":"6 years",
                "src":"js.png"},
                {"name":"Flask",
                "experience":"6 months",
                "src":"flask.png"},
                {"name":"Java",
                "experience":"1 year",
                "src":"java.png"},
                {"name":"Python",
                "experience":"6 years",
                "src":"py.png"},
                {"name":"R Programming",
                "experience":"1 year",
                "src":"r.png"},
                {"name":"Rails",
                "experience":"1.5 years",
                "src":"rails.png"},
                {"name":"React",
                "experience":"6 years",
                "src":"react.png"},
                {"name":"SQL",
                "experience":"5 years",
                "src":"sql.png"},
                {"name":"Vue",
                "experience":"3 months",
                "src":"vue.png"},
                {"name":"Solidity",
                "experience":"1 year",
                "src":"solidity.png"},
                {"name":"Tableau",
                "experience":"3 years",
                "src":"tableau.png"},
                {"name":"Node JS",
                "experience":"1.5 years",
                "src":"nodejs.png"},
                
            ],
            content: '<span style="font-size:3rem">My Skills</span><div style="width:60px;border-top: 3.5px solid #A9A9A9;margin: 0 auto;"></div><p style="margin-top:10px">hover over the logos for more details</p>',
            timer:null
        }
    },
    methods: {
        loadSkillInfo: function(name, experience){
            clearTimeout(this.timer)
            this.content = `<span style="font-size:3rem">${name}</span><br><h3>${experience}<h3>`
            return
        },
        unloadSkillInfo: function(){
            this.timer = setTimeout(() => this.content = '<span style="font-size:3rem">My Skills</span><div style="width:60px;border-top: 3.5px solid #A9A9A9;margin: 0 auto;"></div><p style="margin-top:10px">hover over the logos for more details</p>', 250);
            return
        }
    }
    
}
</script>


<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    padding-top:2.5%;
    background: #C33764;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1D2671, #C33764);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1D2671, #C33764); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#text-box {
    position:absolute;
    height: 250px;
    width: 375px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
}

.circle-container {
  position: relative;
  width: 36em;
  height: 36em;
  border-radius: 50%;
  padding: 0;
  list-style: none;
  margin: 5em auto 0;
  border: double 15px tomato;

}
.circle-container > * {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -2.5em;
  width: 5em;
  height: 5em;
}
.circle-container > *:nth-of-type(1) {
  transform: rotate(0deg) translate(18em) rotate(0deg);
}
.circle-container > *:nth-of-type(2) {
  transform: rotate(24deg) translate(18em) rotate(-24deg);
}
.circle-container > *:nth-of-type(3) {
  transform: rotate(48deg) translate(18em) rotate(-48deg);
}
.circle-container > *:nth-of-type(4) {
  transform: rotate(72deg) translate(18em) rotate(-72deg);
}
.circle-container > *:nth-of-type(5) {
  transform: rotate(96deg) translate(18em) rotate(-96deg);
}
.circle-container > *:nth-of-type(6) {
  transform: rotate(120deg) translate(18em) rotate(-120deg);
}
.circle-container > *:nth-of-type(7) {
  transform: rotate(144deg) translate(18em) rotate(-144deg);
}
.circle-container > *:nth-of-type(8) {
  transform: rotate(168deg) translate(18em) rotate(-168deg);
}
.circle-container > *:nth-of-type(9) {
  transform: rotate(192deg) translate(18em) rotate(-192deg);
}
.circle-container > *:nth-of-type(10) {
  transform: rotate(216deg) translate(18em) rotate(-216deg);
}
.circle-container > *:nth-of-type(11) {
  transform: rotate(240deg) translate(18em) rotate(-240deg);
}
.circle-container > *:nth-of-type(12) {
  transform: rotate(264deg) translate(18em) rotate(-264deg);
}
.circle-container > *:nth-of-type(13) {
  transform: rotate(288deg) translate(18em) rotate(-288deg);
}
.circle-container > *:nth-of-type(14) {
  transform: rotate(312deg) translate(18em) rotate(-312deg);
}
.circle-container > *:nth-of-type(15) {
  transform: rotate(336deg) translate(18em) rotate(-336deg);
}

</style>