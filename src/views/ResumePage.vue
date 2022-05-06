<template>
  <div class="container-fluid">
    <NavbarComp />
    <h1>Resume Page</h1>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "ResumePage",
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style scoped>
.container-fluid {
  border: 0.0625rem solid #000;
  border-radius: 0.25rem;
  background-color: #fff;
}
</style>
