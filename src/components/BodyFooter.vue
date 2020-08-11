<template>
  <div>
    <div class='container'>
      <div class='row'>
        <div class='col-12 col-md-10 offset-md-1 text-center'>
	<p class='heading'>To develop a successful business, one should know to make profits without over-pricing their products. For that, you need a easy-to-use tool on the go.</p>
	</div>
      </div>

      <div class='row'>
        <div class='col-12 col-md-10 offset-md-1 text-center'>
	<div class='container my-0'>
	<div class='row'>
	<div class='col-12 col-md-6 text-left data'>
	<p>ProfitEx is a free easy-to-use tool which helps you to calculate the perfect profitable pricing for the products.</p>
	<p>To get started, simply enter the gross cost for the product and the expected profit in % for each item. Then, click on the 'calculate' button to yield results.</p>
	</div>
	<div class='col-12 col-md-6 text-left data'>
	<p>The final yield estimates the results by applying the profit margin formula and displays the final price for the end product. This price can be used as the buying price for the product.</p>
	<p>Now, you can start seeing profits for each sale by applying the right price yielded here.</p>
	</div>
	</div>
	</div>
	</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
  name:"BodyFooter"
  }
</script>

<style scoped>
  div.container{
    margin:60px auto;
  }
  p.heading{
    font-size:1.6rem;
  }
  div.data{
    
  }
  div.data>p{
    font-size:1.4rem;
    color:#636363;
  }

  @media (max-width:600px){
    div.data>p{
      font-size:1.1rem;
    }
  }
</style>
