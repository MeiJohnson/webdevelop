<template>
<div>
 <article v-for="(cats, idx) in cats" :key="idx">
  <img :src="cats.image">
  <h1>{{ cats.name }}</h1>
  <button @click="deleteCat(cats.id)">
  Delete
 </button>
 </article>
 <form @submit="addCat(name, image)">
<input v-model="name" placeholder="Cat Name">
<input v-model="image" placeholder="Cat Image URL">
<button type="submit">Add New Cat</button>
</form>
</div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'HelloWorld',
  data() {
    return {
      cats: [],
      name: '', // <-- новое свойство
      image: '', // <-- новое свойство
    };
  },
  firestore() {
    return {
      cats: db.collection('cats').orderBy('createdAt'),
    };
  },
  methods: {
    addCat(name, image) { // <-- новый метод
      const createdAt = new Date();
      db.collection('cats').add({ name, image, createdAt });
    },
    deleteCat(id) { // <-- новый метод
      db.collection('cats').doc(id).delete();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
