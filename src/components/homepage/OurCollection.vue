<template>
  <div class="new">
    <!-- Left Side Content -->
    <div class="left-content1">
      <!-- Image -->
      <img src="@/assets/home.jpg" alt="Your Image" class="your-image" />
    </div>
    <!-- Right Side Content -->
    <div class="right-content1">
      <!-- Text -->
      <div class="text1">
        <p>Achieve comfort and</p>
        <p>style in one.</p>
      </div>
      <div class="text2">
        <p>Active wear that makes you feel</p>
        <p>strong and confident.</p>
      </div>

      <!-- Button -->
      <button class="collection-button1">Our collection</button>
    </div>
  </div>
  <hr class="separator2-line" />
  <div class="new2">
    <!-- Left Side Content -->
    <div class="left-content2">
      <!-- Image -->
      <img src="@/assets/home1.jpg" alt="Your Image2" class="your-image2" />
    </div>
    <!-- Right Side Content -->
    <div class="right-content2">
      <!-- Text -->
      <div class="text3">
        <p>Achieve comfort and</p>
        <p>style in one.</p>
      </div>
      <div class="text4">
        <p>Active wear that makes you feel</p>
        <p>strong and confident.</p>
      </div>

      <!-- Button -->
      <button class="collection-button2">Our collection</button>
    </div>
  </div>
  <hr class="separator3-line" />
</template>

<style scoped>
.left-content1 {
  position: absolute;
  left: 0; /* Adjust the left position as needed */
  text-align: left;
  margin-top: 50px;
}
.right-content1 {
  position: absolute;
  text-align: left;
  margin-left: 56%;
  margin-top: 150px;
}
.text1 {
  font-size: 32px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 25px;
}
.text1 p {
  margin-bottom: 0;
}
.text2 {
  font-size: 18px;
  line-height: 22px;
}
.collection-button1 {
  background: rgba(28, 77, 59, 1);
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 40px; /* Adjust the margin as needed */
}
.your-image {
  width: 760px;
  height: 489px;
}
.your-image2 {
  width: 760px;
  height: 489px;
}
.separator2-line {
  margin-top: 555px;
  margin-bottom: 0;
}
.left-content2 {
  position: absolute;
  right: 0; /* Adjust the left position as needed */
  text-align: right;
}
.right-content2 {
  position: absolute;
  text-align: right;
  margin-left: 23%;
  margin-top: 150px;
}
.text3 {
  font-size: 32px;
  color: rgba(40, 39, 39, 1);
  margin-bottom: 25px;
}
.text3 p {
  margin: 0;
}
.text4 {
  font-size: 18px;
  line-height: 22px;
}
.collection-button2 {
  background: rgba(28, 77, 59, 1);
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 40px; /* Adjust the margin as needed */
}
.separator3-line {
  margin-top: 550px;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "Explore Our Collection of Stylish Activewear | M|FITAmazing", // Customize the title
      meta: [
        {
          name: "description",
          content:
            "Discover a collection of stylish and comfortable activewear for women that will boost your confidence and keep you looking your best at the gym and beyond.",
        },
        {
          property: "og:image",
          content: "@/assets/home.jpg", // Customize the image URL
        },
        // You can add more meta tags as needed
      ],
    };
  },
};
</script>
