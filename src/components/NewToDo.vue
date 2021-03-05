<script>
export default {
  name: "NewToDo",
  methods: {
    newTask() {
      let txtTask = document.getElementById("zoneTxt").value;
      if (txtTask != "") {
        document.getElementById("errorTask").innerHTML = "";
        this.$emit("newTask", { theTask: txtTask });
      } else {
        document.getElementById("errorTask").innerHTML =
          "le nom de la tâche est vide";
      }
    },
  },
};
</script>

<template>
  <div class="newToDo">
    <div class="topNew">
      <textarea
        id="zoneTxt"
        name="txtTask"
        cols="30"
        rows="1"
        placeholder="Nouvelle tâche..."
      ></textarea>
      <img src="favicon.ico" alt="" v-on:click="newTask" />
      <p id="errorTask" style="color: red"></p>
    </div>
  </div>
</template>

<style>
.topNew textarea {
  border-bottom-color: #00ff7f;
}
</style>