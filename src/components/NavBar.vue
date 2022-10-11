<template>
  <header>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <router-link :to="{name:'Home'}" class="me-3 py-2 px-3">MY LINKS</router-link>
      <router-link :to="{name:'Add'}" class="me-3 py-2 px-3">ADD LINK</router-link>
    </nav>
  </header>
</template>

<style scoped>
a:active, a:hover, a:visited, a:link {
  color: #efefe8 !important;
  text-decoration: none;
}
a.router-link-active,
a.router-link-exact-active {
  color: #efefe8;
  border-bottom: 5px solid #d8dede;
}

header {
  background-color: #191170;
  padding: 20px;
}
</style>