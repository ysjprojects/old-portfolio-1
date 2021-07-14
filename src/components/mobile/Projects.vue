<template>
    <div id="main">


        <div>
            <img src="../../assets/projecttext.png" alt="..." class="project-text"/>

            <div  style="position:relative;">
            
                <ul class="honeycomb" lang="es">
                    <li @click="goTo(1)" class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="../../assets/socialshield.jpg">
                        <div class="honeycomb-cell__title"><span>Social Shield</span></div>
                    </li>
                    <li @click="goTo(2)" class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="../../assets/kekapi.png">
                        <div class="honeycomb-cell__title"><span>&nbsp;&nbsp;&nbsp;Kekapi&nbsp;&nbsp;&nbsp;</span></div>
                    </li>
                    <li @click="goTo(3)" class="honeycomb-cell">
                        <img class="honeycomb-cell__image" src="../../assets/pomodoro.jpg">
                        <div class="honeycomb-cell__title">Pomodoro Timer</div>
                    </li>
                
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Projects",
    data: function() {
        return {
            urls: ["https://chrome.google.com/webstore/detail/socialshield/fkiekmmeinddmjcgnoegicnfjccipiml?hl=en","http://kekapi.com","https://drive.google.com/file/d/1_ReJ6brfCwT5u61Quzg76aTBNh6prdO3/view"]
        }
    },
    methods: {
        goTo(index) {
            window.open(this.urls[index-1], "_blank")
        }
    }
    
}
</script>




<style lang="scss" scoped>
$hexagon-width: 48vw;
$hexagon-height: $hexagon-width*.55;
$hexagon-margin: 1.5vw;
$hexagon-title-color: #fff;
$hexagon-border-color: #fff;
$hexagon-border-color--hover: #72f88e;
$hexagon-image-color: #3ea0eb;
$honeycomb-max-width: 100vw;
$viewport-thereshold: $hexagon-width + $hexagon-margin;

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

#main {
    width: 100vw;
    background: #F09819;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EDDE5D, #F09819);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EDDE5D, #F09819); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position:relative;
    padding-top:10vw;
    padding-bottom:50vw;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.project-text {
    width:100vw
}

.honeycomb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  max-width: $honeycomb-max-width;
  position:relative;
  padding: 0;
  transform: translateY(#{$hexagon-height/4});

  &-cell {
    flex: 0 1 $hexagon-width;
    max-width: $hexagon-width;
    height: $hexagon-height;
    margin: $hexagon-height/2.1 $hexagon-margin/2 $hexagon-margin;
    position: relative;
    padding: 0.5vw;
    cursor:pointer;

    text-align: center;
    z-index: 1;


    &__title {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      hyphens: auto;
      word-break: break-word;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
      font-size: 5vw;
      transition: opacity 350ms;
      
      > small {
        font-weight: 300;
        margin-top: 0.25vw;
      }
    }

    &__image {
      object-fit: cover;
      object-position: center;
    }
    
    &::before, &::after {
      content: '';
    }

    &::before, &::after, &__image {
      top: -50%;
      left: 0;
      width: 100%;
      height: 200%;
      display: block;
      position: absolute;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      z-index: -1;
    }

    &::before {
      background: $hexagon-border-color;
      transform: scale(1.055);
    }

    &::after {
      background: $hexagon-image-color;
      opacity: 0.5;
      transition: opacity 350ms;
    }

    &:hover {
      
      .honeycomb-cell__title {
        opacity: 0;
      }
      
      &::before {
        background: $hexagon-border-color--hover;
      }

      &::after {
        opacity: 0;
      }
    }
  }

  &__placeholder{
    display:none;
    opacity: 0;
    width: $hexagon-width;
    margin: 0 $hexagon-margin/2;
  }
}

@media (max-width:#{2*$viewport-thereshold}){
  .honeycomb-cell {
    margin: #{$hexagon-margin/2 + $hexagon-height/2} $hexagon-margin;
  }
}

@media (min-width: #{2*$viewport-thereshold}) and (max-width:#{3*$viewport-thereshold}){
  .honeycomb-cell:nth-child(3n) {
    margin-right: calc(50% - #{$hexagon-width/2});
    margin-left: calc(50% - #{$hexagon-width/2});
  }

  .honeycomb__placeholder:nth-child(3n + 5) {
    display:block;
  }
}

@media (min-width: #{3*$viewport-thereshold}) and (max-width:#{4*$viewport-thereshold}) {
  .honeycomb-cell:nth-child(5n + 4) {
    margin-left: calc(50% - #{$hexagon-width + $hexagon-margin});
  }

  .honeycomb-cell:nth-child(5n + 5) {
    margin-right: calc(50% - #{$hexagon-width + $hexagon-margin});
  }

  .honeycomb__placeholder:nth-child(5n), .honeycomb__placeholder:nth-child(5n + 3) {
    display:block;
  }
}

@media (min-width: #{4*$viewport-thereshold}) {
  .honeycomb-cell:nth-child(7n + 5)  {
    margin-left: calc(50% - #{$hexagon-width*1.5 + $hexagon-margin});
  }

  .honeycomb-cell:nth-child(7n + 7), .honeycomb-cell:nth-child(7n + 5):nth-last-child(2) {
    margin-right: calc(50% - #{$hexagon-width*1.5 + $hexagon-margin});
  }

  .honeycomb__placeholder:nth-child(7n + 7), .honeycomb__placeholder:nth-child(7n + 9), .honeycomb__placeholder:nth-child(7n + 11){
    display:block;
  }
}
</style>