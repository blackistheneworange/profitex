<template>
  <div id="body">
    <BodyHeader/>
    <Form v-on:calculate="calculate" v-on:reset="reset"/>
    <Result v-bind:results="results"/>
  </div>
</template>

<script>

  import axios from 'axios';

  import BodyHeader from './BodyHeader';
  import Form from './Form';
  import Result from './Result';

  export default {
    name:"Body",
    components:{BodyHeader,Form,Result},
    data(){
      return{
        results:{
	salePrice:'-',
	profit:'-',
	margin:'-'
        }
      }
    },
    methods:{
      calculate(values){
        axios.post('/calculate',values)
        .then(res=>{
        this.results=res.data;
        })
        .catch(err=>{
        alert(err)
        })

      
      },

      reset(){
        Object.keys(this.results).map(key=>(this.results[key]='-'))
      }

    }
  }

</script>

<style scoped>
  div#body{
    margin:80px auto 0 auto;
  }
</style>

