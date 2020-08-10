<template>
 <nav class="navbar navbar-light bg-primary">
   <a class="navbar-brand mb-0 h1" href="#">{{title}}</a>
 </nav>
</template>

<script>
 export default{
  name:"Header",
  props:["titl1e"],
  data(){
   return{
    title:"Profit Estimator"
    }
  }
  }
</script>

<style scoped>

</style>
