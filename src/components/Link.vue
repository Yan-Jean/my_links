<template>
  <div class="card m-auto mt-3" id="box">
    <h1 class="card-header h-5">
      <a
        :href="`//${link.url}`"
        target="_blank"
        id="link"
        class="stretched-link"
        >{{ link.name }}</a
      >
      <div id="delete-button">
        <button type="button" @click="deleteLink(link)">X</button>
      </div>
    </h1>
    <div class="card-body">
      <p class="card-text">
        {{ link.description }}
      </p>
      <button>{{ link.tags }}</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ["link"],
  methods: {
    deleteLink(link) {
      console.log(link.key);
      if(confirm("Are you sure ?")){
        alert(link.key);
        fetch(`https://mylinks-29cbe-default-rtdb.firebaseio.com/${link.key}.json`, 
        {
         method: "Delete",
        },
        )
        .then((response) => {
            if (!response.ok) {
              const error = new Error(response.message || "Failed to fetch!");
              throw error;
            }
            const index = this.sites.indexOf(site);
            this.sites.splice(index, 1);
          })
          .catch((error) => {
            console.log(error);
            alert("Erreur lors de la suppression");
          });
      }
    },
  }
};
</script>

<style scoped>
button {
  background-color: #191170;
  color: #efefe8;
}

a {
  color: #191170;
}

#box {
  font-size: 1em;
  transition: box-shadow 0.3s, font-size 0.3s, width 0.3s, height 0.3s;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  width: 50%;
  height: 180px;
}

#box:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33);
  font-size: 1.1em;
  width: 55%;
  height: 200px;
}

#link {
  transition: box-shadow 0.3s, font-size 0.3s;
  font-size: 1em;
}

#link:hover {
  font-size: 1.1em;
}

#delete-button {
    float: right;
    font-size: 0.3em;

}

.card #delete-button {
    z-index: 2;
   position: relative;
}


</style>
