<script>
export default {
  name: "NewToDo",
  methods: {
    newTask() {
      let truc = document.getElementById("zoneTxt").value;
      //   console.log(truc);
      //  getElementByClass("zoneTxt")
      if (truc != "") {
        // console.log("yolo")
        // let theTask= truc;
        document.getElementById("errorTask").innerHTML = "";
        this.$emit("newTask", { theTask: truc });
      } else {
        document.getElementById("errorTask").innerHTML =
          "le nom de la tâche est vide";

        // console.log("hunhunh")
      }
    },
  },
  //   computed: {
  //     sendTask() {
  //       this.taskListTableau[1];
  //     },
  //   },
};
</script>

<template>
  <div class="newToDo">
    <div class="topNew">
      <textarea
        id="zoneTxt"
        name="truc"
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