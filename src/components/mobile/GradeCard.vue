<template>
<div class="flip-card" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" 
 unselectable="on"
 onselectstart="return false;" 
 onmousedown="return false;" ontouchstart>
  <div class="flip-card-inner">
    <div class="flip-card-front" :style="backgroundColor">
      <div class="v-center-div add-padding">
        <span>{{level}}</span>
        <br>
        <span>{{subject}}</span>
      </div>
    </div>
    <div class="flip-card-back" :style="backgroundColor">
      <div class="v-center-div add-padding">
        <span>{{grade}}</span>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
export default {
    name:"GradeCard",
    props: {
        level: String,
        subject: String,
        grade: String,
        color: String,
    },
    computed: {
        backgroundColor() {
            return {
                '--color':this.color,
            }
        }
    }

}
</script>

<style scoped>
.v-center-div {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.add-padding {
    padding:2.5vw;
}

 /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  margin-left:1.25vw;
  margin-right:1.25vw;
  width: 47.5vw;
  height: 47.5vw;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:active .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: var(--color);
  color: white;
  opacity: 0.7;
}

/* Style the back side */
.flip-card-back {
  background-color: var(--color);
  color: white;
  opacity: 1;
  transform: rotateY(180deg);
} 

.flip-card-front   span:nth-of-type(1) {
  font-size: 12.5vw;
}

.flip-card-front span:nth-of-type(2) {
  font-size: 7.5vw;
}


.flip-card-back span {
    font-weight:bold;
    font-size: 15vw;
    height: 1.25em;
    line-height: 1.5em;
    display: inline-block;
}
</style>

