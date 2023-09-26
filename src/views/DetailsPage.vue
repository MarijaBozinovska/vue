<template>
  <div>
    <CarouselSlide />
    <ProductInformation />
    <LastContent1 />
    <SimilarProducts />
  </div>
</template>

<script>
import CarouselSlide from "@/components/details/CarouselSlide.vue";
import ProductInformation from "@/components/details/ProductInformation.vue";
import SimilarProducts from "@/components/details/SimilarProducts.vue";
import LastContent1 from "@/components/details/LastContent1.vue";

export default {
  components: {
    LastContent1,
    SimilarProducts,
    ProductInformation,
    CarouselSlide,
  },
};
</script>
