<template>
    <div id="main">
        <div class="container">
            <div class="namecard">
                <img src="../assets/namecard.png" alt="Hello my name is SJ" class="w-75" style="max-width:800px"/>
            </div>
            <div class="divider">
            </div>
            <div class="typewriter">
                <h1>I am a student | developer | 2D enjoyer.</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Introduction",

}
</script>


<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.typewriter {
    display:inline-block !important;
    margin-top: 15px;
}
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .20em; /* Adjust as needed */
  font-weight: bold;
  animation: 
    typing 4s steps(40, end),
    blink-caret .75s step-end infinite;
}

.divider {
    width:60px;
    border-top: 5px solid #A9A9A9;
    margin: 0 auto;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>