<template>
  <div class="card">
    <div class="row">
      <div class="col-md-12">
        <div class="card-header">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div class="card-body">
            <p class="card-text">Sorry, an error has occured, Requested page not found!</p>
          </div>
          <div class="">
            <router-link :to="{name:'Home'}"
              class="btn  btn-lg my-3" id="home-button"
              > Take Me Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#home-button {
  background-color: #191170;
  color: #efefe8;
}
</style>
