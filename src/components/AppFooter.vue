<template>
  <footer
    class="footer"
    v-if="showFooter"
    style="
      background: rgba(40, 39, 39, 1);
      color: white;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    "
  >
    <div class="container">
      <div class="row">
        <!-- Left Side -->
        <div class="col-md-6">
          <div class="logo">
            <img
              src="@/assets/logo10.png"
              alt="Your Logo"
              class="footer-logo"
            />
            M|FITAmazing
          </div>
          <div class="text-box">
            <p class="no-margin">Activewear is our passion.</p>
            <p class="no-margin">We believe activewear should blend stylish</p>
            <p class="no-margin">
              design details with performance technology and fabrics,
            </p>
            <p class="no-margin">
              delivering serious fit and flatter benefits.
            </p>
          </div>
        </div>

        <!-- Right Side -->
        <div class="col-md-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="E-mail address"
              aria-label="E-mail address"
              aria-describedby="email-addon"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      showFooter: false, // Initially hide the footer
    };
  },
  mounted() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Function to check if the user has scrolled to the bottom
    isAtBottom() {
      const contentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // You can adjust this threshold to control when the footer appears
      const threshold = 50; // Adjust as needed

      return contentHeight - scrollPosition <= windowHeight + threshold;
    },
    // Function to handle scrolling and show/hide the footer
    handleScroll() {
      this.showFooter = this.isAtBottom();
    },
  },
};
</script>

<style scoped>
.footer {
  background: rgba(40, 39, 39, 1);
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.text-box {
  text-align: left;
  padding: 10px 0 70px; /* Added padding to the bottom */
  margin-left: 3%;
}

.text-box p.no-margin {
  margin: 0; /* Remove margin for paragraphs */
}

.logo {
  text-align: left;
  margin-top: 20px;
}

.footer-logo {
  max-width: 60px;
  margin-right: 10px;
  color: white;
}

.input-group {
  width: 261px;
  height: 40px;
  margin-top: 23%;
  margin-left: 60%;
}

.input-group text {
  background: transparent;
  border: none;
  color: white;
}
</style>
