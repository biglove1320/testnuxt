<template>
   <div>
       <navbar />
    <b-container fluid="md" class="py-2">
            <b-row>
                <b-col lg="12" class="py-5">
                <b-button href="/users/Home" variant="outline-secondary">ย้อนกลับ</b-button>
                <b-button variant="outline-primary">เพิ่มลงในตระกร้า</b-button>
                    <h2 class="mt-4">{{singleProduct.title}}</h2> 
                    <p>Price : <b>{{singleProduct.price}}</b></p>
                    <hr>
                    <b-img :src="singleProduct.image"></b-img>
                    <hr>
                    <p><b>รายละเอียด :</b> </p>
                    <p>{{singleProduct.detailproduct}}</p>
                </b-col>
            </b-row>
    </b-container>
    
   </div>

    

    

</template>

<script>
import Navbar from './navbar.vue'
export default {
    components:{
        Navbar
    },
    data(){
       return{
           singleProduct:{...this.product} 
        }
    },
    props:{
        product:{
            type:Object,
            required:false
        }
    },
   
    
}
</script>

<style>

</style>