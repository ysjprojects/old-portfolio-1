<template>
    <div id = "main">
        <div class="container" style="position: relative;top: 50%;transform: translateY(-50%);}">
            <div>
                <h1 style="font-size:2.5vw">A-Levels* Result <span style="height:auto; line-height:auto; font-size:1.5vw;color:#A9A9A9">rank point: 87.5</span></h1>
                <div style="margin:15px">
                    <div style="display:inline-block" v-for="ele in ALevelGrades" v-bind:key="ele">
                        
                        <GradeCard :level="ele.level" :subject="ele.subject" :grade="ele.grade" :color="ele.color"/>
                    </div>
                </div>
            </div>
            <div>
                <h1 style="font-size:2.5vw">Education</h1>
                <div class="divider"></div>
                <div>
                    <span class="align-bottom">Secondary and Junior College (2012-2017)</span>
                    <img src="../assets/dhs.png" alt="Dunman High School"/>
                    <span class="align-bottom">Dunman High School</span>
                </div>
                <div>
                    <span class="align-bottom">University (2020-)</span>
                    <img src="../assets/nus_short.png" alt="National University of Singapore"/>
                    <span class="align-bottom">National University Singapore</span>
                </div>
            </div>
            <div style="height:5vh"></div>
            <div>
                <p style="font-size:1vw">*Singapore-Cambridge General Certificate of Education Advanced Level (A-Levels) is the Singapore equivalent of the UK GCSE. Most pre-university students in Singapore are required to sit for the A-Levels examination at the end of this intensive 2-year programme. I attained a rank point of 87.5/90 with 5 distinctions.</p>
            </div>
        </div>
    </div>
</template>

<script>
import GradeCard from "./GradeCard.vue"

export default {
    name: "Education",
    components: {
        GradeCard,
    },
    data: function() {
        return {
            ALevelGrades:[
                {"level": "H1",
                "subject": "General Paper",
                "grade": "A",
                "color": "rgba(3, 169, 244)"},
                {"level": "H2",
                "subject": "Mathematics",
                "grade": "A",
                "color":"rgba(244, 67, 54)"},
                {"level": "H2",
                "subject": "Computing",
                "grade": "A",
                "color":"rgba(233, 30, 99)"},
                {"level": "H2",
                "subject": "Physics",
                "grade": "A",
                "color": "rgba(156, 39, 176)"},
                {"level": "H1",
                "subject": "English Literature",
                "grade": "C",
                "color": "rgba(63, 81, 181)"},
                {"level": "H1",
                "subject": "Project Work",
                "grade": "A",
                "color": "rgba(0, 188, 212)"},
            ]
        }
    }
    
}
</script>


<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    background: #b92b27;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.divider {
    width:5vw;
    border-top: 0.5vh solid #A9A9A9;
    margin: 0 auto;
}

span {
    font-size: 1.5vw;
    font-weight: bold;
    height:.5em;
    line-height:1.5em;
}

img {
    height: 3.5vw;
    margin-left:1vw;
    margin-right: 1vw;
    margin-top: 1.5vw;
    padding-left:1vw;
    border-left: 0.25vw solid white;
}

</style>