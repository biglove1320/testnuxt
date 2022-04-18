<template>
    <div>
        <navbar/>
        <adminForm @sendData="onSubmitted"/>

    </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import axios from 'axios'
export default {
  components: { navbar },
  methods:{
      onSubmitted(productData){
          this.$store.dispatch("addProduct",productData).
          then(()=>{
              this.$router.push("/admin/Homeadmin")
          })
      }
  }

}
</script>

<style>

</style>