<template>
  <div class="informations">
    <!-- Left Side Content -->
    <div class="left-content5">
      <!-- Image -->
      <img
        src="@/assets/24.jpg"
        alt="Your Image5"
        class="your-image5"
        style="max-width: 477px; max-height: 600px"
      />
    </div>
    <!-- Right Side Content -->
    <div class="right-content5">
      <!-- Text -->
      <div class="text1.1">
        <h3 style="font-weight: bold; margin-bottom: 30px">PRODUCT DETAILS</h3>
      </div>
      <div class="text1.2" style="margin-bottom: 30px">
        <h4 style="font-weight: bold; font-size: 18px">
          Industry-specific attributes
        </h4>
        <p style="margin-bottom: 3px">
          Feature: Breathable, QUICK DRY, Seamless, lightweight, ACTIVE STRETCH,
          Sweat-Wicking
        </p>
        <p>Material: Spandex/Nylon (230gsm 75%nylon +25%spandex)</p>
      </div>
      <div>
        <h4 style="font-size: 18px; font-weight: bold">Applicable scene</h4>
        <p style="margin-bottom: 30px">
          Running, sports, fitness, cycling, dancing, yoga
        </p>
      </div>
      <div>
        <h5 style="font-size: 18px; font-weight: bold">Specifications</h5>
        <p>Sleeve Length(cm): Sleeveless</p>
        <p style="margin-bottom: 3px">Product category: Two piece set</p>
        <p style="margin-bottom: 3px">Size: S, M, L, XL</p>
        <p>Fit: Fits true to size, take your normal size</p>
      </div>
      <div>
        <h6 style="font-size: 18px; font-weight: bold">Features</h6>
        <ul>
          <li>Gradient color</li>
          <li>One Shoulder Gym Wear</li>
          <li>Seamless Gym Yoga Biker Shorts Sets</li>
          <li>Low support sports bra</li>
          <li>Seamless contours</li>
          <li>Shaping details</li>
          <li>Incredibly high comfort</li>
          <li>Shape-enhancing detailing</li>
          <li>Breathable, shaping & stretch fit</li>
        </ul>
      </div>
    </div>
  </div>
  <hr class="horizontal-separator" />
</template>

<style scoped>
.left-content5 {
  position: absolute;
  right: 0; /* Adjust the left position as needed */
  text-align: right;
  margin-right: 120px;
}
.right-content5 {
  position: absolute;
  text-align: left;
  margin-left: 8%;
}
.text1.1 {
  font-size: 24px;
  line-height: 30px;
  width: 375px;
  height: 30px;
  color: rgba(40, 39, 39, 1);
}
.text1.2 {
  font-size: 18px;
  line-height: 22px;
}
.horizontal-separator {
  margin-top: 800px; /* Adjust the margin as needed */
  margin-bottom: 100px;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "PRODUCT DETAILS | M|FITAmazing", // Customize the title
      meta: [
        {
          name: "description",
          content:
            "2023 New Gradient Sexy One Shoulder Gym Wear Women Sportswear\n" +
            "\n" +
            "Seamless Fitness Yoga Workout Sets",
        },
        {
          property: "og:image",
          content: "@/assets/1.jpg",
        },
      ],
    };
  },
};
</script>
