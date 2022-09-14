<template>
  <input :checked="modelValue" @change="$emit('update:modelValue', $event.target)" class="checkbox"
    type="checkbox" :id="id" />
  <label :for="id">{{text}}</label>
</template>

<script setup>
defineEmits(['update:modelValue']);

defineProps({
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    required: true
  }
});

</script>

<style lang="sass" scoped>
.checkbox
  position: absolute
  opacity: 0
  cursor: pointer
  height: 0
  width: 0
  
label
  position: relative
  color: #C4C4C4
  padding-left: 28px
  cursor: pointer
  user-select: none
  &:before
    position: absolute
    content: ""
    left: 2.5px
    top: 2.5px
    width: 15px
    height: 15px
    background-color: transparent
    border: 1px solid #C4C4C4
  
.checkbox:checked + label:before
  border: none
  background: url('../assets/icons/checked.svg') center center no-repeat, rgba(255, 82, 82, 0.98)
</style>