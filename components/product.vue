<template>
     <div class="product1">
      <b-card
        :title=title
        :img-src=image
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
            {{detailproduct.slice(0,60)+"..."}}
        </b-card-text>

        <h4>ราคา :{{price}}</h4>

        <b-button :href="productLink" variant="outline-secondary">
            {{ isAdmin ?'แก้ไขข้อมูล':'รายละเอียด'}}
        </b-button>
        <b-button href="#" variant="outline-primary">เพิ่มลงในตระกร้า</b-button>
      </b-card>
    </div>
  

</template>

<script>
export default {
      props:{
        title:{
          type:String,
          required:false
        },
        detailproduct:{
          type:String,
          required:false
        },
        image:{
          type:String,
          required:true
        },
        price:{
          type:String,
          required:false
        },
        id:{
          type:String,
          required:false
        },
        isAdmin:{
          type:Boolean,
          required:true
        }
      },
      computed:{
        productLink(){
          return this.isAdmin ? '/admin/detail/'+this.id : '/products/'+this.id
        }
      }
}
</script>

<style>
    .product1{
        padding: 20px;
    }
</style>