<template>
    <div id="main">
        <div class="wrapper">
            <div class="">
                <span class="align-bottom">I am from</span>
                <img style="margin-top:0 !important" src="../assets/sg.png" alt="Singapore"/>
            </div>
            <div class="">
                <span class="align-bottom">I am a</span>
                <img src="../assets/ba.png" alt="Business Analytics"/>
                <span class="align-bottom">undergraduate in</span>
                <img src="../assets/nus.png" alt="National University of Singapore"/>              
            </div>
            <div class="">
                <span class="align-bottom">I am fluent in</span>
                <img src="../assets/python.png" alt="Python"/>
                <span class="align-bottom">,&nbsp;</span>
                <img src="../assets/frontend.png" alt="Frontend programming"/>
                <span class="align-bottom">and</span>
                <img src="../assets/java.png" alt="Java"/>
            </div>
            <div class="">
                <span class="align-bottom"> My hobbies include</span>
                <img src="../assets/piano.png" alt="Playing the piano"/>
                <span class="align-bottom">and</span>
                <img src="../assets/cycling.png" alt="Cycling"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"About",
    
}
</script>


<style scoped>
.wrapper div {
	opacity: 0;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
    animation-fill-mode: forwards;

}

.wrapper div:nth-child(1) {
    animation-duration: 1.5s;
}

.wrapper div:nth-child(2) {
    animation-duration: 1.5s;
    animation-delay: 2.5s;
}

.wrapper div:nth-child(3) {
    animation-duration: 1.5s;
    animation-delay: 5s;
}

.wrapper div:nth-child(4) {
    animation-duration: 1.5s;
    animation-delay: 7.5s;
}

.wrapper {
    width:100%;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    margin-bottom:6.25vh;
}

@keyframes fadeInOpacity {
	to {
		opacity: 1;
	}
}

    
span {
    font-weight: bold;
    font-size: 6.25vh;
    height: 1.25em;
    line-height: 1.5em;
    display: inline-block;
    color: #f35626;
	background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-animation: hue 30s infinite linear;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}

img {
    height: 12.5vh;
    margin-left: 2.5vh;
    margin-right: 2.5vh;
    margin-top: 6.25vh;
}
#main {
    width: 100vw;
    height: 100vh;
    position:relative;
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.divider {
    width:60px;
    border-top: 5px solid #A9A9A9;
    margin: 0 auto;
}
</style>