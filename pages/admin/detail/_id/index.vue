<template>
    <div>
        <navbar/>
        <adminForm @sendData="onSubmitted" :product="singleProduct"/>

    </div>
</template>

<script>
import navbar from '../../../../components/navbar.vue'
import axios from 'axios'
export default {
  components: { navbar },
  asyncData(context){
      return axios.
           get("https://testapp-78bf9-default-rtdb.asia-southeast1.firebasedatabase.app/products/"+context.params.id+".json")
          .then((res) => {
              return{
                  singleProduct:{
                      ...res.data,id:context.params.id
                  }
              }
          })
          .catch((e) => context.console.error(e))
      },

  methods:{
      onSubmitted(productData){
          this.$store.dispatch("editProduct",productData).
          then(()=>{
              this.$router.push("/admin/Homeadmin")
          })
      },
  }

}
</script>

<style>

</style>