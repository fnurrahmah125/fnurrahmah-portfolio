<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/"><a class="navbar-brand" href="#">fnurrahmah</a></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-end">
          <li class="nav-item">
            <router-link to="/"><a href="#">Projects</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume"><a href="#">Resume</a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #42494f;
  font-size: 1rem;
  font-weight: 400;
  transition: 0.3s;
}
a:hover {
  color: #ff90e8;
}
.navbar .container-fluid {
  border: none;
}
.navbar-brand {
  font-weight: 600;
}
.nav-item {
  margin-top: 24px;
}
.nav-item:nth-child(2) {
  padding-right: 0;
  margin-bottom: 16px;
}

@media (min-width: 768px) {
  .navbar {
    padding: 24px;
  }
}

@media (min-width: 992px) {
  .nav-item {
    padding: 0 24px;
    margin-top: 0px;
  }
  .nav-item:nth-child(2) {
    margin-bottom: 0px;
  }
}
</style>
