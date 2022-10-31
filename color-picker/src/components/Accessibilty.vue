<script setup>
import {computeCon} from '../computeCon.js';
</script>

<script>
export default {
  data: function() {
    return {
      constrast:0,
      isActive1:false,
      isActive2:false,
      isActive3:false,
      isActive4:false
    }
  },
  props: {
    fore: {
      type: Array
    },
    back: {
      type: Array
    }
  },
  computed: {
    comp() {
      var res= computeCon(this.fore, this.back);
      this.constrast= res;
      if(this.constrast >= 3) this.isActive1= true;
      else this.isActive1= false;
      if(this.constrast >= 4.5){
          this.isActive2=true;
          this.isActive3=true;
      }else {
          this.isActive2=false;
          this.isActive3=false;
      }
      if(this.constrast >= 7) this.isActive4=true;
      else this.isActive4=false;
      return computeCon(this.fore, this.back)
    }
  }
}
</script>

<template>
  <div class="colorAcc">
    <p :class= "{active: true}"> {{this.constrast= comp}}</p>
    <div class="large-text">
        <h1>Large Text</h1>
        <div class= "AAA">
            <img class="icon" :class="{ active: !isActive1 }" src= "../assets/correct.jpeg">
            <img class="icon" :class="{ active: isActive1 }" src= "../assets/wrong.jpeg">
            <p><strong>AA</strong>: 3.0:1</p>
        </div>
        <div class= "AAA">
            <img class="icon" :class="{ active: !isActive2 }" src= "../assets/correct.jpeg">
            <img class="icon" :class="{ active: isActive2 }" src= "../assets/wrong.jpeg">
            <p><strong>AAA</strong>: 4.5:1</p>
        </div>
    </div>

    <div class="normal-text">
        <h1>Normal Text</h1>
        <div class= "AAA">
            <img class="icon" :class="{ active: !isActive3 }" src= "../assets/correct.jpeg">
            <img class="icon" :class="{ active: isActive3 }" src= "../assets/wrong.jpeg">
            <p><strong>AA</strong>: 4.5:1</p>
        </div>
        <div class= "AAA">
            <img class="icon" :class="{ active: !isActive4 }" src= "../assets/correct.jpeg">
            <img class="icon" :class="{ active: isActive4 }" src= "../assets/wrong.jpeg">
            <p><strong>AAA</strong>: 7.0:1</p>
        </div>
    </div>
  </div>
</template>
<style>
.icon {
    width:50px;
    padding: 5px;
}
.active{
    display:none;
}
h1 {
    font-family:Verdana;
    font-weight:bold;
    font-size:20px;
}
.large-text{
    width:250px;
    position:relative;
    left:80px;
}
.normal-text{
    width:250px;;
    position:absolute;
    left:400px;
    top:40px;

}
.AAA {
    position:relative;
    top:10px;
    left:20px;
}
.AAA img {
    position:relative;
    left:20px;
}
.colorAcc {
  width:200%;
    position:relative;
    top:30px;
    right:160px;
    padding:40px;
    border:1px solid black;
    border-radius:5px;
}
.AAA p{
    position:relative;
    left:5px;
}

</style>
