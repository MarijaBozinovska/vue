<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Left Side -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Sale</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New</a>
        </li>
      </ul>

      <!-- Middle (Logo and Text) -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo10.png" alt="Your Logo" class="navbar-logo" />
        M|FITAmazing
      </a>

      <!-- Right Side (Font Awesome Icons) -->
      <div class="navbar-icons">
        <a href="#"><i class="fa fa-search"></i></a>
        <a href="#"><i class="fa fa-heart"></i></a>
        <a href="#"><i class="fa fa-shopping-bag"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Style the Navbar logo */
.navbar-logo {
  max-width: 60px;
  margin-right: 10px;
}

/* Style the Navbar icons */
.navbar-icons a {
  margin-left: 15px;
  color: black; /* Set the default color for icons */
}

/* Style the Navbar icons on hover */
.navbar-icons a:hover {
  color: #007bff; /* Change the color on hover (blue) */
}
</style>
