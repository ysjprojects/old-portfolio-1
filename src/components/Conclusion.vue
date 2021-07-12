<template>
    <div id="main">
        <div class="heart">
  ❤
</div>
<div class="text">
  <p>
    T
  </p>
  <p>
    H
  </p>
  <p>
    A
  </p>
  <p>
    N
  </p>
  <p>
    K
  </p>
  <p>
    &nbsp;
  </p>
  <p>
    Y
  </p>
  <p>
    0
  </p>
  <p>
    U
  </p>
</div>
    </div>
</template>

<script>
export default {
    name:"Conclusion",
    
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa:700|Roboto:900|Russo+One');

#main {
    width: 100vw;
    height: 100vh;
    background: #544a7d;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffd452, #544a7d);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffd452, #544a7d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.heart {
  color:#fff;
  position: fixed;
  animation: heart 5s linear infinite;
  margin-left: -30px; /* optical correction */
}

@function makelongshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 750 {
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }
  @return $val;
}

$color: #aeb;

.text {
  margin-left: -30px; /* optical correction */
}

p {
  margin-top:50vh;
  width: 6vh;
  display: inline-block;
  font-size: 0px;
  font-family: 'Russo One';
  font-weight: 900;
  color:#fff;
}

@for $i from 1 to 10 {
  p:nth-child(#{$i}) { 
  text-shadow: makelongshadow(adjust-hue($color, $i * 30));
  animation: showup 5s infinite $i * 0.20s; }
}

@keyframes showup {
  0% {
    font-size:0px;
    transform:rotate(90deg);
  }
  5% {
    font-size:5vh;
    
  }
  10% {
    font-size:5.5vh;
    transform:rotate(0deg);
  }
  60% {
    font-size:5.5vh;
    opacity: 1; 
  }
  71% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    font-size:5.5vh;
    transform:rotate(0deg);
  }
}


@keyframes heart {
  0% { opacity: 0; }
  30% { left: 50vw; top: 35vh; opacity: 0; font-size: 42px; }
  40% { left: 50vw; top: 35vh; opacity: 1; font-size: 42px; }
  70% { left: 50vw; top: 35vh; opacity: 1; font-size: 42px; }
  80% { left: 50vw; top: 30vh; opacity: 0; font-size: 30px; }
  100% { opacity: 0; }
}
</style>