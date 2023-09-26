<template>
  <div>
    <HeroSection />
    <BestSellingProducts />
    <OurCollection />
    <LastContent />
  </div>
</template>

<script>
import HeroSection from "@/components/homepage/HeroSection.vue";
import BestSellingProducts from "@/components/homepage/BestSellingProducts.vue";
import OurCollection from "@/components/homepage/OurCollection.vue";
import LastContent from "@/components/homepage/LastContent.vue";

export default {
  components: {
    OurCollection,
    LastContent,
    BestSellingProducts,
    HeroSection,
  },
};
</script>
