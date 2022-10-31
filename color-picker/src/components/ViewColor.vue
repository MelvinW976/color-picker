

<script>
import {computeCon} from '../computeCon.js';
export default {
  data: function() {
    return {
      constrast:0
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
      return computeCon(this.fore, this.back)
    }
  }
}


</script>

<template>
  <div >
    <span id= "view" style="font-family: Verdana;
  font-size:50px;
  font-weight: bold; color: this.fore"> {{this.constrast= comp}} : 1</span>

  </div>
</template>

<style>
strong {
  font-weight: bold;
},
span{
  font-family: Verdana;
  font-size: large;
  font-weight: bold;
}
</style>
