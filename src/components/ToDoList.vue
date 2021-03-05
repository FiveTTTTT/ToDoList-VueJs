<script lang="ts">
export default {
  name: "ToDoList",
  props: ["tasks", "checked"],
  methods: {
    checks(index) {
      //   let y = t
      console.log("yo " + index);

      this.$emit("isChecked", { checkedId: index });

      //   console.log("lol");

      //   return true;
    }
  },
};
</script>

<template>
  <div class="toDoList">
    <ul>
      <li v-for="(task, index) in tasks" :key="(task, index)">
        <div id="laNouvTache">
          <input
            type="checkbox"
            name=""
            id="checkBox"
            v-on:click="checks(index)"
          />
          <p>hello {{ task.name }}</p>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/503/503814.svg?token=exp=1614961646~hmac=48e31e64c0044e36827aabfd8336c6d5"
            alt=""
            srcset=""
            style="width: 20px; height: 20px"
          />

          <!-- <p v-bind:value=" theTask "></p> -->
        </div>
      </li>
    </ul>
    <!-- <p>hello{{ theTask }}</p> -->
  </div>
</template>

<style>
#laNouvTache {
  display: flex;
}
#laNouvTache p,
#laNouvTache textarea {
  margin: 5px;
}
</style>