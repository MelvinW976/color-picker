<script setup>
import { ref } from 'vue'
import { ColorPicker } from 'vue-accessible-color-picker'

</script>

<script>
export default {
  components: {
    ColorPicker
  },
  data: function () {
    return {
      message: '',
      hex: ''
    }
  },
  methods: {
    updateColor (eventData) {
      this.message= eventData.colors.rgb,
      this.hex= eventData.colors.hex,
      this.$emit('someEvent', this.message, this.hex)
    }
  }
}

</script>

<template>

  <div class='colorInput'>
    <ColorPicker @color-change="updateColor" :visible-formats="['rgb', 'hex']" default-format="hex"/>
  </div>
</template>

<style>
.vacp-format-switch-button {

  border: solid 1px;
  border-radius: 10px;
}
</style>
