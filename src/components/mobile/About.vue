<template>
    <div id="main">
        <div class="container">
            <div class="text-center">
                <span style="font-size:9vw" class="align-bottom">A<u>bout M</u>e</span>
            </div>
            <div class="divider">
            </div>
            <div class="wrapper">
                
                <div class="">
                    <span>I am from Singapore</span>
                </div>
                <div class="">
                    <span>I am a Business Analytics undergraduate from the National University of Singapore (NUS)</span>
                </div>
                <div class="">
                    <span>I am fluent in Python, front-end development and Java</span>
                </div>
                <div class="">
                    <span> My hobbies include playing the piano and cycling</span>
                </div>
                
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
    margin-bottom:2.5vh;

}

.wrapper div:nth-child(1) {
    animation-duration: 1s;
    animation-delay: 4s
}

.wrapper div:nth-child(2) {
    animation-duration: 1s;
    animation-delay: 5s;
}

.wrapper div:nth-child(3) {
    animation-duration: 1s;
    animation-delay: 6s;
}

.wrapper div:nth-child(4) {
    animation-duration: 1s;
    animation-delay: 7s;
}


@keyframes fadeInOpacity {
	to {
		opacity: 1;
	}
}

    
span {
    display:block;
    font-weight: bold;
    font-size: 5vw;
    color: #f35626;
    word-wrap: break-word;
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

#main {
    padding-top:5vh;
    padding-bottom:5vh;
    width: 100vw;
    text-align: left;    
    background: #4e5558;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.divider {
    height: 3.5vh;
}
</style>