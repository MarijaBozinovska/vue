<template>
  <div class="last-content">
    <h2 class="title1">Why M|FITAmazing?</h2>
  </div>
  <div>
    <!-- Columns Container -->
    <div class="columns">
      <!-- Column 1 -->
      <div class="column">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <p class="column-name">Quality</p>
        <div class="column-text">
          <p>Exceptional quality from</p>
          <p>top to bottom.</p>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="column">
        <i class="fa fa-truck" aria-hidden="true"></i>
        <p class="column-name">Delivery</p>
        <div class="column-text">
          <p>Fast and free worldwide</p>
          <p>shipping.</p>
        </div>
      </div>

      <!-- Column 3 -->
      <div class="column">
        <i class="fa fa-shield" aria-hidden="true"></i>
        <p class="column-name">Guarantee</p>
        <div class="column-text">
          <p>100% customer satisfaction</p>
          <p>guaranteed.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title1 {
  font-size: 33px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 70px;
  line-height: 40px;
  margin-top: 60px;
}
.columns {
  display: flex;
  justify-content: space-between;
  margin-right: 150px;
  margin-left: 170px;
  margin-bottom: 300px;
}
.column {
  text-align: center;
  flex-basis: calc(33.33% - 20px); /* Adjust the width as needed */
  padding: 20px;
}
.column i {
  font-size: 35px;
}
.column-name {
  font-size: 24px;
  line-height: 30px;
  margin-top: 10px;
}
.column-text {
  font-size: 18px;
  margin-top: 10px;
}
.column-text p {
  margin: 0;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "Why Choose M|FITAmazing for Activewear | M|FITAmazing",
      meta: [
        {
          name: "description",
          content:
            "Discover why M|FITAmazing is your best choice for activewear. From exceptional quality to fast worldwide shipping and 100% customer satisfaction guarantee, we have you covered.",
        },
        {
          property: "og:image",
          content: "@/assets/M.png",
        },
      ],
    };
  },
};
</script>
