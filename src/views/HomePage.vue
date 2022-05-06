<template>
  <div class="container-fluid">
    <NavbarComp />
    <main>
      <!-- Row -->
      <div class="row pb-5 mb-5" v-for="item in items" :key="item">
        <!-- Image -->
        <div class="col-12 col-lg-4 text-center">
          <img :src="item.image" />
        </div>

        <!-- Infomation Text -->
        <div class="col-12 col-lg-6 mt-3 mt-lg-0 text-sm-center text-lg-start">
          <h1 class="fs-3 mt-2 mt-lg-0">{{ item.title }}</h1>
          <p>{{ item.description }}</p>
          <span v-for="tech in item.techStacks" :key="tech" class="badge border border-dark rounded-pill px-3 py-2 mt-2 me-2 text-dark">{{ tech }}</span>

          <!-- Buttons -->
          <div class="d-flex gap-3 mt-4 justify-content-sm-center justify-content-lg-start">
            <div class="btn-preview">
              <a :href="item.demoUrl" target="_blank" class="btn btn-front">View Demo</a>
              <a href="" class="btn btn-back">View Demo</a>
            </div>
            <div class="btn-preview">
              <a :href="item.gitUrl" target="_blank" class="btn btn-front">View Github</a>
              <a href="" class="btn btn-back">View Github</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "HomePage",
  components: {
    NavbarComp,
    FooterComp,
  },
  data: function () {
    return {
      items: [
        {
          title: "Work.ly Landing Page",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloremque quisquam repellat modi nam in. Quod nam nobis doloremque rem.",
          image: "https://i.postimg.cc/fRs3Y5Vh/Frame-0.jpg",
          techStacks: ["HTML", "CSS", "Javascript", "Bootstrap"],
          demoUrl: "https://workly-landing-page.netlify.app/",
          gitUrl: "https://github.com/fnurrahmah125/workly",
        },
        {
          title: "Sukses Selalu Landing Page",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloremque quisquam repellat modi nam in. Quod nam nobis doloremque rem.",
          image: "https://i.postimg.cc/Gmj4KYDT/Frame-1.jpg",
          techStacks: ["HTML", "CSS", "Javascript", "Bootstrap"],
          demoUrl: "https://suksesselalu-landing-page.netlify.app/",
          gitUrl: "https://github.com/fnurrahmah125/suksesselalu",
        },
        {
          title: "Simple Quiz App",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloremque quisquam repellat modi nam in. Quod nam nobis doloremque rem.",
          image: "https://i.postimg.cc/GhG8B6hQ/Frame-2.jpg",
          techStacks: ["HTML", "CSS", "Javascript", "Vue JS"],
          demoUrl: "https://fnurrahmah-simple-quiz-app.netlify.app/",
          gitUrl: "https://github.com/fnurrahmah125/quiz-app",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-fluid {
  border: 0.0625rem solid #000;
  border-radius: 0.25rem;
  background-color: #fff;
}
main {
  padding: 54px 14px;
}
img {
  width: 100%;
  max-width: 320px;
  border: 0.0625rem solid #000;
  border-radius: 0.25rem;
}
a {
  text-decoration: none;
}
.btn-preview {
  position: relative;
}
.btn {
  border-radius: 0.25rem;
  background-color: #000;
}
.btn-front {
  position: absolute;
  z-index: 2;
  color: #fff;
  transition: 0.35s;
}
.btn-back {
  position: relative;
  color: #000;
  background-color: #000;
}
.btn-front:hover {
  color: #000;
  border: 1px solid #000;
  background-color: #ff90e8;
  transform: translate(-5px, -5px);
}
</style>
