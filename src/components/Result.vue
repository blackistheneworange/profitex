<template>
  <div>
  <div class="container" id="result">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div>
	<h6 class="bg-light text-center p-2 mb-0 heading">PROFIT MARGIN CALCULATOR RESULTS</h6>
	</div>

	<div class="container">
	<div class='result-box text-center row'>
        <div class='sale-price col-12 col-md-4 p-0'>
	<h6>Your sale price</h6>
	<p>{{results.salePrice}}</p>
	</div>
	<div class='profit col-12 col-md-4 p-0'>
	<h6>Profit</h6>
	<p>{{results.profit}}</p>
	</div>
	<div class='gross-margin col-12 col-md-4 p-0'>
	<h6>Gross margin</h6>
	<p>{{results.margin}}</p>
	</div>

	</div>
	</div>
      </div>
    </div>

    
  </div>
  <hr class='my-4'/>
  </div>
</template>

<script>

  export default{
    name:"Result",
    props:["results"]
  }
</script>

<style scoped>

  div#result{
    margin:70px auto;
  }

  h6.heading{
    border:1px solid #eeeeee;
    color:#636363;
    font-size:0.8rem;
  }

  div.result-box>*{
    padding:40px 20px 14px 20px !important;
    border:1px solid #eeeeee;
  }

  div.result-box p{
    font-size:1.4rem;
    color:#774fa8;
  }

</style>
