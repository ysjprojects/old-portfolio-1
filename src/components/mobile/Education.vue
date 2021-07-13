<template>
    <div id = "main">
        <div>
                <h1 style="font-size:7.5vw">A-Levels* Result</h1>
                <span style="height:auto; line-height:auto; font-size:5vw;color:#A9A9A9">rank point: 87.5</span>
                <div style="margin-top:5vh;margin-bottom:2.5vh">
                    <span style="font-size:5vw;opacity:0.3">press and hold for grades</span>
                    <br>
                    <div style="display:inline-block" v-for="ele in ALevelGrades" v-bind:key="ele">
                        
                        <GradeCard :level="ele.level" :subject="ele.subject" :grade="ele.grade" :color="ele.color"/>
                    </div>
                </div>
        </div>
        <div class="container">
            
            <div>
                <h1 style="font-size:7.5vw">Education</h1>
                <div class="divider"></div>
                <div style="position:relative">
                    <span class="align-bottom education-level">Pre-U (2012-2017)</span>
                    <span class="align-bottom school-name">Dunman High School</span>
                </div>
                <div style="height:2.5vh"></div>
                <div style="position:relative">
                    <span class="align-bottom education-level">University (2020-)</span>
                    <span class="align-bottom school-name">National University of Singapore</span>
                </div>
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
    padding-top:10vh;
    padding-bottom:10vh;
    background: #b92b27;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.divider {
    width:10vw;
    border-top: 1vw solid #A9A9A9;
    margin: 0 auto;
}

span {
    font-size: 3.5vw;
    font-weight: bold;
    height:.5em;
    line-height:1.5em;
}

img {
    height: 3vw;
    margin-left:1vw;
    margin-right: 1vw;
    margin-top: 1.5vw;
    padding-left:1vw;
    border-left: 0.25vw solid white;
}

.education-level {
    position:absolute;
    left:0;
    opacity:0.75;
}

.school-name {
    position:absolute;
    right:0;
    
    
}

</style>