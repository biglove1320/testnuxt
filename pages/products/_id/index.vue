<template>
    <div>
        
        <SingleProduct :product="singleProduct"/>

    </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct'
import axios from 'axios'
export default {
  components: { SingleProduct },
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
}
</script>

<style>

</style>