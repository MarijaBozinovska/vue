<template>
  <div>
    <!-- Left Side Content -->
    <div class="left-content">
      <!-- First Text -->
      <div class="first-text">
        <p>Serve your</p>
        <p>best look</p>
        <p>at the gym!</p>
      </div>

      <!-- Second Text -->
      <div class="second-text">
        <p>Dive into the new colors that flame creativity</p>
        <p>and awaken curiosity.</p>
      </div>

      <!-- Button -->
      <button class="collection-button">Our collection</button>
    </div>

    <!-- Right Side Images -->
    <div class="right-images">
      <img src="@/assets/M.png" alt="Vector Image" class="vector-image" />
      <img
        src="@/assets/girl2.png"
        alt="Transparent Image"
        class="transparent-image"
      />
    </div>
    <hr class="separator-line" />
  </div>
</template>

<style scoped>
.left-content {
  position: absolute;
  top: 288px;
  left: 125px;
  text-align: left;
}
.first-text {
  width: 512px;
  height: 180px;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgba(40, 39, 39, 1);
}
.second-text {
  width: 388px;
  height: 46px;
  top: 1000px;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 75px;
  color: rgba(40, 39, 39, 1);
}
.collection-button {
  background: rgba(28, 77, 59, 1);
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 60px;
  margin-right: 75px;
}
.right-images {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 100px;
}
.vector-image {
  position: relative;
  z-index: 1;
  width: 600px;
}
.transparent-image {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-top: 122px;
  margin-right: 70px;
  width: 375px;
}
.separator-line {
  margin-top: 721px; /* Adjust the margin as needed */
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "Women's Gym Activewear | M|FITAmazing",
      meta: [
        {
          name: "description",
          content:
            "Explore our latest women's activewear collection designed for gym enthusiasts. Discover trendy gym outfits that empower your fitness journey.",
        },
        {
          property: "og:image",
          content: "@/assets/girl2.png",
        },
      ],
    };
  },
};
</script>
