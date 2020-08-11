<template>

  <div class="container" id="form">
   <form @submit='calculate'>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-4">

        <div class="container">
        <div class="row">

	<div class="col-sm-12 col-md-6">

	<div class="form-group">
        <input class="w-100 py-4 form-control input" type="number" placeholder="Cost of item ($)" v-model="itemCost" v-bind:class="{'border-danger':error1}" v-on:input='change' name="costPrice"/>
	<div class='feedback text-danger' v-bind:class="{'feedback-error':!error1}">This value is required</div>
	</div>

	</div>

	<div class="col-sm-12 col-md-6">

	<div class="form-group">
	<input class="w-100 py-4 form-control input" type="number" placeholder="Markup (%)" v-bind:class="{'border-danger':error2}" v-on:input='change' v-model="markup" name="markup"/>
        <div class='feedback text-danger' v-bind:class="{'feedback-error':!error2}">This value is required</div>
	</div>

	</div>


	</div>
        </div> 
      </div>
      </div>

    <div class='float-right'>
    <button class="reset" type="button" @click="reset">Reset</button>
    <button class="calculate" type="submit">Calculate Profit</button>
    </div>

  </form>
  </div>

</template>

<script>


  export default{
    name:"Form",
    data(){
      return{
        itemCost:"",
	markup:"",
	error1:false,
	error2:false
      }
    },
    methods:{
      
      calculate(e){
      e.preventDefault()

      if(this.itemCost==="" && this.markup===""){
      e.target.costPrice.focus()
      
      this.error1=true;
      this.error2=true;
      return;
      }
      else if(this.itemCost===""){
      
      this.error1=true;this.error2=false;return;
      }
      else if(this.markup===""){
      
      e.target.markup.focus()
      this.error1=false;this.error2=true;return;
      }

      this.error1=false;this.error2=false;

      const values={
      cost:this.itemCost,
      markup:this.markup
      }

      this.$emit('calculate',values)
      },

      reset(){
      this.itemCost="";
      this.markup="";
      this.error1=false;
      this.error2=false;
      this.$emit('reset')
      },

      change(e){
      if(e.target.value===""){
      e.target.name==="markup"?this.error2=true:this.error1=true;
      }
      else{
      e.target.name==="markup"?this.error2=false:this.error1=false;
      }
      }
    }

  }
</script>

<style scoped>

  div#form{
    margin:60px 0;
  }

  .reset{
    all:unset;
    font-size:0.8rem;
    text-decoration:underline;
    color:#5f80d9;
    margin-right:16px;
  }
  .calculate{
    all:unset;
    background:#5f80d9;
    color:#fff;
    box-shadow:0 0 6px 0 #aaa;
    padding:10px 20px;
    font-weight:bold;
    border-radius:6px;
  }

  .input:focus{
    border-color:#774fa8 !important;
    box-shadow:0 0 1px 1px #774fa8 !important;
    
  }

  .feedback{
    font-size:0.8rem;
    margin-top:3px;
  }
  .feedback-error{
    display:none
  }

</style>
