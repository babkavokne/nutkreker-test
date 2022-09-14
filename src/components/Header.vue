<template>
  <header>
    <h1>#movienow</h1>
  </header>
</template>

<style lang="sass" scoped>
header
  height: 100px
  width: 100%
  display: flex
  justify-content: center
  box-shadow: 0 8px 7px rgba(0, 0, 0, .28), 0 4px 4px rgba(0, 0, 0, .25)
  background-color: rgba(250, 40, 40, .98)
  h1
    margin: 36px 0 16px 0
    color: #000
  
@media (max-width: 400px)
  header
    height: 60px
    h1
      margin: 16px 0 8px 0
</style>