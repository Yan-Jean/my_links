<template>
  <div>
    <Link v-for="(link, index) in links" :key="index" :link="link" />
  </div>
</template>

<script>
import Link from "../components/Link.vue";
export default {
  components: {
    Link,
  },
  data() {
    return {
      links: [],
    };
  },
  created() {
    this.getLinks();
  },
  methods: {
    getLinks() {
      fetch("https://mylinks-29cbe-default-rtdb.firebaseio.com/links.json")
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          this.links = data;
          console.log("data", data);
          console.log("links", this.links)
          
        })
        .catch((error) => console.log("error", error));
    },
    deleteLink(link) {
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
  },
};
</script>

<style scoped></style>
