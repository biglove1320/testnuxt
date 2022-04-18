<template>
  <div >
    <navbar />
      
    <div class="addproduct" left>
      <nuxt-link  to="/admin/create" class="btn btn-primary" 
        >เพิ่มสินค้า</nuxt-link
      >
    </div>
    <b-container>
        <productList isAdmin :products="loadData" />
    </b-container>
    
  </div>
</template>

<script>
import productList from '@/components/productList'
import axios from 'axios'
export default {
  components: { productList },
  name: 'adminIndexpage',
  computed:{
    loadData(){
      return this.$store.getters.getAllproducts
    }
  }
}
</script>

<style>
    .addproduct{
      padding: 20px;
    }
</style>
