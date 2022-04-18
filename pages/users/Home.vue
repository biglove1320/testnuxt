<template>
  <div>
    <navbar />

    <div class="container">
      <imgproduct />
      <b-container class="bv-example-row">
          <productList :products="loadData"/>
          
      </b-container>
    </div>



  </div>
</template>

<script>
import Imgproduct from '../../components/imgproduct.vue'
import navbar from '../../components/navbar.vue'
import productList from '../../components/productList.vue'
export default {
  components: { navbar, productList, Imgproduct },
  name: 'IndexPage',
  computed:{
    loadData(){
      return this.$store.getters.getAllproducts
    }
  }
  
}
</script>

<style scoped>

</style>