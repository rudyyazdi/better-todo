<template>
  <h1>Better Todo App</h1>
  <form v-on:submit.prevent="addTodoItem">
    <input type="text" v-model="todoItemName">
  </form>
  <h4>To do:</h4>
  <ul>
    <div v-for="item in todoItems()" v-bind:key="item.id" style="display:flex">
      <input type="checkbox" v-bind:checked="false" v-on:click="toggleDone(item.id)">
      <li > {{item.name}}</li>
    </div>
  </ul>

  <h4>Done:</h4>
  <ul>
    <div v-for="item in doneItems()" v-bind:key="item.id" style="display:flex">
      <input type="checkbox" v-bind:checked="true" v-on:click="toggleDone(item.id)">
      <li > {{item.name}}</li>
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store, ITodoItem, addTodoItem, toggleDone } from '../store'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'Main',
  store,
  props: { },
  methods: {
    todoItems () {
      return store.todoItems.filter(item => !item.isDone)
    },
    doneItems () {
      return store.todoItems.filter(item => item.isDone)
    },
    addTodoItem () {
      const todoItem: ITodoItem = {
        id: uuidv4(),
        name: this.todoItemName,
        isDone: false
      }
      addTodoItem(todoItem)
      this.todoItemName = ''
    },
    toggleDone: toggleDone
  },
  data: function () {
    return {
      todoItemName: ''
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
}
a {
  color: #42b983;
}
</style>
