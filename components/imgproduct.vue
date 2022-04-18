<template>
  <div class="imgslide">
    <b-carousel 
      id="carousel-1"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <div v-for="item in items">
        <b-carousel-slide
        :img-src=item.image
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: require('@/assets/image/p3.jpg') },
        { image: require('@/assets/image/p2.jpg') },
        { image: require('@/assets/image/p1.jpg') }
      ],
    }
  },
}
</script>

<style>
    .imgslide{
        padding-top: 20px;
    }
</style>
