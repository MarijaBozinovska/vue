<template>
  <div>
    <!-- New Content -->
    <div class="new-content">
      <!-- Title -->
      <h2 class="title">Best selling products</h2>

      <!-- Description -->
      <div class="description">
        <p>Nothing but the best!</p>
        <p>They’re called bestsellers for a reason.</p>
      </div>

      <!-- Product Cards -->
      <div class="product-cards">
        <!-- Product Card 1 -->
        <div class="product-card">
          <img
            src="@/assets/product1.jpg"
            alt="Product 1"
            class="product-image"
          />
          <p class="product-name">M|Fit 2 Piece Set - Pink</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="product-card">
          <img
            src="@/assets/product2.jpg"
            alt="Product 2"
            class="product-image"
          />
          <p class="product-name">M|Fit 2 Piece Set - Green</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="product-card">
          <img
            src="@/assets/product3.jpg"
            alt="Product 3"
            class="product-image"
          />
          <p class="product-name">M|Fit 2 Piece Set - Gray</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="product-card">
          <img
            src="@/assets/product4.jpg"
            alt="Product 4"
            class="product-image"
          />
          <p class="product-name">M|Fit 2 Piece Set - Black</p>
          <div class="product-prices">
            <span class="old-price">$99.99</span>
            <span class="new-price">$59.99</span>
          </div>
        </div>
      </div>
    </div>
    <hr class="separator1-line" />
  </div>
</template>

<style scoped>
.new-content {
  text-align: center; /* Center-align the content */
  margin-top: 50px; /* Adjust the margin as needed */
}
.title {
  font-size: 33px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 10px;
  line-height: 40px;
}
.description {
  font-size: 18px;
  line-height: 20px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 10px;
}
.description p {
  margin: 5px;
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
  width: 253px;
  height: 350px;
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
.separator1-line {
  margin-top: 70px;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "Best Selling Gym Activewear for Women | M|FitAmazing", // Customize the title
      meta: [
        {
          name: "description",
          content:
            "Discover the best-selling gym activewear for women that empowers your workouts and boosts your confidence. Explore trendy and comfortable activewear sets.",
        },
        {
          property: "og:image",
          content: "@/assets/product1.jpg", // Customize the image URL
        },
      ],
    };
  },
};
</script>
