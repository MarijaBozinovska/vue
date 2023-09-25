<template>
  <div>
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <i class="fa fa-arrow-right"></i>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </nav>
  </div>
</template>
<style>
.breadcrumb {
  margin-top: 50px;
  margin-left: 7.9%;
  font-size: 14px;
  line-height: 17px;
}
</style>
