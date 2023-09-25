<template>
  <div>
    <BreadcrumbComponent />
    <AllProducts />
  </div>
</template>

<script>
import BreadcrumbComponent from "@/components/products/BreadcrumbComponent.vue";
import AllProducts from "@/components/products/AllProducts.vue";

export default {
  components: {
    AllProducts,
    BreadcrumbComponent,
  },
};
</script>
