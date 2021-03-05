<script lang="ts">
export default {
  name: "ToDoList",
  props: ["tasks", "checked"],
  methods: {
    checks(index) {
      this.$emit("checks", { checkedId: index });
    },
    remover(index) {
      this.$emit("remover", { removerId: index });
    },
  },
};
</script>

<template>
  <div class="toDoList">
    <ul>
      <li v-for="(task, index) in tasks" :key="(task, index)">
        <div class="nouvTache">
          <input type="checkbox" id="checkBox" v-on:click="checks(index)" />
          <p v-bind:id="'laNouvTache' + index">hello {{ task.name }}</p>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/503/503814.svg?token=exp=1614961646~hmac=48e31e64c0044e36827aabfd8336c6d5"
            alt=""
            srcset=""
            style="width: 20px; height: 20px"
            v-on:click="remover(index)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.nouvTache {
  display: flex;
}
.nouvTache p,
.nouvTache textarea {
  margin: 5px;
}
</style>