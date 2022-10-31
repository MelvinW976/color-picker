<script>
import InputColor from '@/components/InputColor.vue';
import ViewColor from '@/components/ViewColor.vue';
import Accessibilty from '@/components/Accessibilty.vue'

export default {
  components: {
    InputColor,
    ViewColor,
    Accessibilty
  },
  data: function () {
    return {
      text1: '#000000',
      text2: '#000000',
      hex1 : '#',
      hex2 : '#'
    }
  },
  methods: {
      set1(n, m) {
        this.text1 = n,
        this.hex1= m,
        document.getElementById("view").style.color = this.hex1
      },
      set2(n, m) {
        this.text2 = n,
        this.hex2= m,
        document.getElementById("contrast").style.background = this.hex2
      }
  }
}
</script>

<template>
  <div id="app">
    <div id= "select-color">
      <div id= "font-color">
          <p> Foreground Color{{hex1}} </p>
          <InputColor @some-event="set1"/>
      </div>
      <div id= "back-color">
          <p> Background Color {{ hex2}}</p>
          <InputColor @some-event="set2"/>
      </div>
    </div>
    <div id= "contrast">
      <p>Contrast Ratio</p>
      <ViewColor :fore= "[text1.r, text1.g, text1.b]" :back= "[text2.r, text2.g, text2.b]" />
    </div>

    <div id= "accessibility">
      <Accessibilty :fore= "[text1.r, text1.g, text1.b]" :back= "[text2.r, text2.g, text2.b]" />
    </div>
  </div>
</template>

<style>
#app > * {
  margin-bottom: 1em;

}
#font-color {
  padding:20px;
  border: 1px solid black;
  border-radius: 10px;
  position:relative;
  top:470px;
  right:160px;

}
p {
  font-family: Verdana;
  position:relative;
  bottom:12px;
  font-weight:bold;
}
#text {
  position:relative;
  bottom:10px;
}

#back-color {
  padding:20px;
  border: 1px solid black;
  border-radius: 10px;
  position:relative;
  top:32px;
  left:170px;
  margin-top:20px;
}
#select-color {

  margin-top:10px;
  padding:23px;

}
#contrast {
  padding:50px;
  border:1px solid black;
  border-radius:5px;
  position: relative;
  top:20px;
}
#contrast p {
  position: relative;
  left:80px;
}


</style>
