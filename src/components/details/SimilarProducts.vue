<template>
  <div>
    <hr class="horizontal-separator1" />
  </div>
  <div>
    <!-- New Content -->
    <div class="new-content">
      <!-- Title -->
      <h2 class="title">Similar Products</h2>

      <!-- Product Cards -->
      <div class="product-cards">
        <!-- Product Card 1 -->
        <div class="product-card">
          <img src="@/assets/2.jpg" alt="Product 1" class="product-image" />
          <p class="product-name">M|Fit 2 Piece Set</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="product-card">
          <img src="@/assets/7.jpg" alt="Product 2" class="product-image" />
          <p class="product-name">M|Fit 2 Piece Set</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="product-card">
          <img src="@/assets/11.jpg" alt="Product 3" class="product-image" />
          <p class="product-name">M|Fit 2 Piece Set</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="product-card">
          <img src="@/assets/13.jpg" alt="Product 4" class="product-image" />
          <p class="product-name">M|Fit 2 Piece Set</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.horizontal-separator1 {
  margin-bottom: 100px;
}
.new-content {
  text-align: center; /* Center-align the content */
  margin-top: 50px; /* Adjust the margin as needed */
  margin-bottom: 22%;
}
.title {
  font-size: 33px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 10px;
  line-height: 40px;
}
.product-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 70px; /* Adjust the margin as needed */
  margin-left: 210px;
  margin-right: 170px;
}
.product-card {
  width: calc(50% - 25px); /* Adjust the width as needed */
  text-align: left;
}
.product-image {
  max-width: 100%;
}
.product-name {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 0;
}
.old-price {
  text-decoration: line-through;
  font-size: 14px;
  color: rgba(101, 101, 101, 1); /* Customize the old price color */
}
.new-price {
  font-size: 14px;
  margin-left: 10px;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "Similar Products | M|FITAmazing", // Customize the title
      meta: [
        {
          name: "description",
          content:
            "Explore our wide range of high-quality activewear products. Find the perfect workout gear to boost your confidence and style.",
        },
        {
          property: "og:image",
          content: "@/assets/7.jpg",
        },
      ],
    };
  },
};
</script>
