<template>
    <b-container fluid="md" class="py-2">
        <h2 align="center">เพิ่มสินค้า</h2>

        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group label="ชื่อสินค้า">
                <b-form-input type="text" placeholder="ชื่อสินค้า" v-model="form.title"></b-form-input>
            </b-form-group>

            <b-form-group label="รายละเอียดสินค้า">
                <b-form-textarea placeholder="รายละเอียด" rows=5 v-model="form.detailproduct"></b-form-textarea>
            </b-form-group>

            <b-form-group label="รูปภาพ (URL)">
                <b-form-input type="text" placeholder="URLรูปภาพ" v-model="form.image"></b-form-input>
            </b-form-group>

            <b-form-group label="ราคา">
                <b-form-input type="number" placeholder="ราคาสินค้า" v-model="form.price"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="outline-success">บันทึก</b-button>
            <b-button type="reset" variant="outline-danger">ล้างข้อมูล</b-button>
            <b-button href="/admin/Homeadmin"  variant="outline-secondary" >ยกเลิก</b-button>


        </b-form>
    </b-container>

    

    

</template>

<script>
export default {
    data(){
        return{
            form:this.product?{...this.product} :
            {
                title:"",
                detailproduct:"",
                image:"",
                price:"",
                detailproduct:""
            }
        }
    },
    props:{
        product:{
            type:Object,
            required:false
        }
    },
    methods:{
        onSubmit(evt){
            this.$emit('sendData',this.form)
            this.$router.push('/admin/Homeadmin')
        },
        onReset(evt){
            evt.preventDefault();
            this.form.title='';
            this.form.detailproduct='';
            this.form.image='';
            this.form.price='';
            
        }
    }
}
</script>

<style>

</style>