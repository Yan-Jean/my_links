<template>
  <div>
    <form class="mt-3" @submit.prevent="submitData()">
      <div>
        <label for="name">Nom du site</label>
        <div>
          <input type="text" id="name" v-model="siteData.name" placeholder="Nom du site" />
        </div>
      </div>
      <div>
        <label for="url">URL du site</label>
        <div>
          <input type="text" id="url" v-model="siteData.url" placeholder="URL du site" />
        </div>
      </div>
      <div>
        <label for="description">Description</label>
        <div>
          <textarea type="text" id="description" v-model="siteData.description" placeholder="Description" />
        </div>
      </div>
      <div>
        <label for="tags">Tags</label>
        <div>
          <input type="text" id="tags" v-model="siteData.tags" placeholder="Tags" />
        </div>
      </div>
      <div>
        <button class="mt-3">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      siteData: {
        name: "",
        url: "",
        description: "",
        tags: "",
      },
    };
  },
  methods: {
    submitData() {
      console.log(this.siteData);
      fetch("https://mylinks-29cbe-default-rtdb.firebaseio.com/links.json", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.siteData),

      })
      this.siteData.name="";
      this.siteData.url="";
      this.siteData.description="";
      this.siteData.tags="";
    },
  },
};
</script>

<style scoped>
button {
  background-color: #191170;
  color: #efefe8;
}
label {
  font-weight: bold;

  margin-bottom: 5px;
}
input + label {
  font-weight: bold;

  margin-right: 20px;
}
input[type="text"],
textarea {
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
