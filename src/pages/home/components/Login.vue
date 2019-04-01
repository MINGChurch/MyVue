<template>
  <div class="login">
    <!-- <p v-for="item in form.type">{{item.name}}</p>
    <hr>
    <p v-for="(val, key, i) in form.resource">{{key}} : {{val}}</p> -->
    <tr v-for="item in form.type" :key="item.id">
      <input type="checkbox">{{item.name}}
      <a href="" @click.prevent="onSubmit(item.id)">删除</a>
    </tr>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: {
          id: 1,
          name: 'fubijie',
          age: 22
        },
        desc: ""
      }
    };
  },
  methods: {
    onSubmit(id) {
      console.log(id);
      
    }
  },
  mounted() {
    console.log("init....")
     this.axios.get("/weiLogin/queryAll").then(body =>{
       this.form.type = body.data.data.items;
     })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//unpkg.com/element-ui/lib/theme-chalk/index.css");
h1,
h2 {
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
tr {
  text-align: left;
}
</style>
