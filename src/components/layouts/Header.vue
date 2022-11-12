<template>
 <nav class="navbar">
  <div>
   <a class="navbar-brand mb-0 h1" href="#">{{title}}</a>
   </div>
 </nav>
</template>

<script>
 export default{
  name:"Header",
  data(){
   return{
    title:"ProfitEx"
    }
  }
  }
</script>

<style scoped>

  nav{
    background-color:#10284f;
    color:#fff;
  }

  nav>div{
    margin:auto 5%;
  }
  nav>div>a{
    color:#fff;
    text-decoration:none;
    font-size:1.8rem;
  }

</style>
