<template>
    <b-row class="py-2">
          <product 
              v-for="post in products"
              :key="post.id"
              :id="post.id"
              :title="post.title"
              :image="post.image"
              :price="post.price"
              :detailproduct="post.detailproduct"
              :isAdmin="isAdmin"
                
           />

        </b-row>
</template>

<script>
import product from '@/components/product'
export default {
    components:{
        product
    },
    props:{
        isAdmin:{
            type:Boolean,
            default:false
        },
        products:{
            type:Array,
            required:true
        }
    }
}
</script>

<style>

</style>