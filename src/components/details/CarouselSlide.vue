<template>
  <!-- Carousel -->
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators" style="margin-right: 1050px">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        class="active"
        style="background-color: grey"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
        style="background-color: grey"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
        style="background-color: grey"
      ></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/24.jpg"
          alt="Los Angeles"
          class="d-block w-100"
          style="max-width: 700px; max-height: 700px"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/23.jpg"
          alt="Chicago"
          class="d-block w-100"
          style="max-width: 700px; max-height: 700px"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/21.jpg"
          alt="New York"
          class="d-block w-100"
          style="max-width: 700px; max-height: 700px; background-color: grey"
        />
      </div>
    </div>

    <!-- Left and right controls/icons -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        style="background-color: grey; border-radius: 20px"
      ></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        style="background-color: grey; border-radius: 20px"
      ></span>
    </button>
  </div>
  <div class="additional-content">
    <!-- Add your new elements here -->
    <h2>M|Fit Gradient 2 Piece Set</h2>
    <div class="text">
      <p>2023 New Gradient Sexy One Shoulder Gym Wear Women Sportswear</p>
      <p>Seamless Fitness Yoga Workout Sets</p>
    </div>
    <div class="d-flex align-items-center">
      <button class="button3"><i class="fa fa-truck"></i> Free shipping</button>
      <button class="button4">
        <i class="fa fa-exchange"></i> Easy returns
      </button>
    </div>
    <div>
      <div class="product-prices">
        <span class="new-price1">59.99 $</span>
        <span class="old-price1">99.99$</span>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div class="square">
        <span class="square-number">1</span>
      </div>
      <div>
        <button class="add-to-cart-button">ADD TO CART</button>
      </div>
    </div>
  </div>
  <hr class="separator5-line" style="color: white" />
</template>
<style>
.carousel-control-next {
  margin-right: 50%;
}
.carousel-control-prev-icon {
  margin-right: 90px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: transparent; /* Clear the default background color */
  color: white; /* Set the desired arrow color */
}
.additional-content {
  position: absolute;
  top: 222px;
  right: 0;
  left: 796px;
  margin-right: 100px;
  text-align: left;
}
h2 {
  font-size: 24px;
  line-height: 30px;
}
.text {
  margin-top: 30px;
  font-size: 18px;
}
.fa {
  margin-right: 5px; /* Add some spacing between icon and text */
}
.button3,
.button4 {
  width: 190px;
  height: 31px;
  border-radius: 25px;
  border-color: rgba(217, 217, 217, 1);
  color: black;
  background-color: rgba(217, 217, 217, 1);
  margin-right: 10px;
  margin-bottom: 50px;
}
.new-price1 {
  width: 99px;
  height: 30px;
  font-size: 24px;
  line-height: 29px;
  margin-right: 10px;
  color: black;
}
.old-price1 {
  width: 59px;
  height: 18px;
  font-size: 14px;
  line-height: 17px;
  text-decoration: line-through;
  color: black;
}
.square {
  width: 53px;
  height: 53px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  border: solid 1px rgba(220, 220, 220, 1);
  margin-right: 10px;
}

/* Style for the number inside the square */
.square-number {
  font-size: 18px; /* Set your desired font size */
  line-height: 22px;
  width: 11px;
  height: 23px;
  color: rgba(5, 5, 29, 1); /* Set the text color */
}
.add-to-cart-button {
  width: 422px;
  height: 53px;
  top: 499px;
  left: 858px;
  border-radius: 50px;
  background-color: rgba(28, 77, 59, 1);
  margin-top: 50px;
  font-size: 18px;
  color: white;
  line-height: 22px;
}
.separator5-line {
  margin-top: 8%;
  color: black;
}
</style>
<script>
export default {
  metaInfo() {
    return {
      title: "M|Fit Gradient 2 Piece Set | M|FITAmazing", // Customize the title
      meta: [
        {
          name: "description",
          content:
            "Explore our wide range of high-quality activewear products. Find the perfect workout gear to boost your confidence and style.",
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
