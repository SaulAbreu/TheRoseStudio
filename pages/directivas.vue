<template>
  <div>
    <p>{{ message.toLowerCase()  }}</p>
    <p>{{ saludo }}</p>

    {{ 1 + 3 }}
    <p v-if="num > 10"> Hola</p>
    <p v-for="(item, index) in items" :key="index"> {{item}}</p>

    <p> Nombre: </p>
    <input v-model="name" type="text"/>
    {{name}}
    {{messageResersed}}

     <p v-if="error != '' " class="tag is-warning">{{ error }} </p>


    <button v-on:click="saludar" class="button is-info"> saluda </button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'hola OpenWebinars',
        saludo: "hola",
        num: 12,
        items: [1,2,3,4,5,6],
        name:'',
        error: '',
      }
    },
    methods: {
        saludar(){
            console.log("Esto es un saludo");
        }
    },
    computed: {
  messageResersed() {
    return this.message.split('').reverse().join('')
  },
},
watch: {
  name() {
    if(this.name.length > 5) {
      this.error = "Nombre demasiado largo"
    } else {
      this.error = ''
    }
  }
}
  }
</script>