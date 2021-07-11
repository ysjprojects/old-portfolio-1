<template>
    <div id="main">
        <div class="podium">
            <table id="ladder" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <span class="podium-text" style="font-size:7.5rem">2</span>
                        <div v-for="award in awards.silver" :key="award">
                            <Award :name="award.name" :year="award.year" :src="award.src" color="#85898d"/> 
                        </div>        
                        <div id="podium1">

                        </div>

                    </td>
                    <td>
                        <span class="podium-text" style="font-size:10rem">1</span>
                        <div v-for="award in awards.gold" :key="award">
                            <Award :name="award.name" :year="award.year" :src="award.src" color="#f0ba3c"/> 
                        </div>    
                        <div id="podium0">
                        </div>
                    </td>
                    <td>
                        <span class="podium-text" style="font-size:5rem">3</span>
                        <div v-for="award in awards.bronze" :key="award">
                            <Award :name="award.name" :year="award.year" :src="award.src" color="#a15347"/> 
                        </div>    
                        <div id="podium2">
                        </div>
                    </td>
                    <td>
                        <span class="podium-text" style="font-size:2.5rem">MERIT</span>
                        <div v-for="award in awards.merit" :key="award">
                            <Award :name="award.name" :year="award.year" :src="award.src" color="#b19cd9"/> 
                        </div>    
                        <div id="podium3">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <h1>Awards and Achievements</h1>
        </div>
    </div>
</template>

<script>
import Award from "./Award.vue"
export default {
    name:"Awards",
    components: {
        Award,
    },
    data: function() {
        return {
            awards : {
                "gold": [
                    {"name":"Splash Awards",
                    "year":"2016",
                    "src":"sa.jpg"},
                    {"name":"IMDA NIC Face-Off App Development",
                    "year":"2016",
                    "src":"nicad.png"}
                ],
                "silver":[
                    {"name":"IMDA NIC Face-Off Data Analytics",
                    "year":"2016",
                    "src":"nicda.png"}
                ],
                "bronze":[
                    {"name":"Code::XtremeApps::",
                    "year":"2016",
                    "src":"codextremeapps.png"
                    }
                ],
                "merit":[
                    {"name":"Asia Pacific ICT Alliance (APICTA) Awards",
                    "year":"2016",
                    "src":"apicta.jpg"},
                    {"name":"National Olympiad in Informatics",
                    "year":"2017",
                    "src":"noi.png"}
                ]
            }
        }
    }
    
}
</script>


<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

table {
    margin:0 auto;
}

td {
    height: 75vh;
    vertical-align: bottom;
    position:relative;
    
}

.podium {
    margin-bottom: 45px;
}

#response {
    font-family: courier-new, courier;
}
#podium0, #podium1, #podium2, #podium3 {
    width: 200px;
    position: relative;
}

#podium0 { /* gold */
    height: 250px;
    background-color: #f0ba3c;

}
#podium1 { /* silver */
    height: 200px;
    background-color: #85898d;

}
#podium2 { /* bronze */
    height: 150px;
    background-color: #a15347;
}

#podium3 { /*merit*/
    height: 75px;
    background-color:#b19cd9;
}

.podium-text {
    position:absolute;
    bottom: 2.5%;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%)



}

span{
    line-height: 1.5em;
    height: 1em;
}
</style>