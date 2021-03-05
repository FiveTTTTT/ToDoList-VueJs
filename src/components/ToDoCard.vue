<script>
import NewToDo from "../components/NewToDo.vue";
import ToDoList from "../components/ToDoList.vue";

export default {
  name: "ToDoCard",
  components: {
    NewToDo,
    ToDoList,
  },
  //   el: "#toDoList",
  data() {
    return {
    //   unchecked: true,
    //   isChecked: false,

      //   theTask: "yo",
      //   theTasks: [{ name: "yo" }],
      //   styleH: "display:none;",

    //   taskListTableau: ["yo"],

      listTask: [
        // { name: "salut", unchecked: true },
        // { name: "yo", unchecked: true },
        // { nazertzme: "yo", tre: true },
      ],

      day: [
        "lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
      Mounth: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
    };
  },

  methods: {
    checkTask(payload) {
      this.checkedId = payload.checkedId;

      console.log("index lol " + this.checkedId);
      let machin = this.listTask[this.checkedId];

      if (!machin.unchecked) {
        machin.unchecked = true;
        console.log("machinef= " + machin.unchecked);
      } else {
        machin.unchecked = false;
        console.log("machinef= " + machin.unchecked);
      }

      console.log(this.listTask);
      //   return machin;
    },
    addTask(payload) {
      console.log("payloadp" + payload);
      // let theTask= [{name:payload.theTask,  unchecked:true}]
      this.uncheckeds = false;
      
      this.theTask = payload.theTask;

      let machin = this.listTask;

      console.log("theTask= " + this.theTask);

      let theNewTask = { name: this.theTask, unchecked: this.uncheckeds };

      //   let s = [{ theNewTask }, { name: "wsh", unchecked: true }];

      //   console.log("theNewTask= " + theNewTask.name);
      machin.push(theNewTask);
      //   console.log("machin= " + machin);

      //   theNewTask.name = "r";
      //   console.log("theNewestTask= " + theNewTask.name);

      //   this.addTask;
      //   this.addTask(taskName);
      //   return true;
    },
  },
  computed: {
    howMany: function () {
      let howManyTask = this.listTask.length;
      return howManyTask;
    },
    // addTask: function () {

    //   // document.getElementById("laNouvTache").innerHTML = this.theTask;
    //   // let checkBox = document.createElement("input");
    //   // checkBox.type = "checkbox";
    //   // checkBox.id = "checkBox";
    //   // let taskName = document.createElement("p");
    //   // taskName.id = "taskId";
    //   // taskName.innerHTML = this.theTask;
    //   // document.getElementById("laNouvTache").appendChild(checkBox);
    //   // document.getElementById("laNouvTache").appendChild(taskName);

    //   //   this.listTask.push({ name: this.theTask, unchecked: true });
    //   //   console.log("avant " + this.listTask[0].name);
    //   // this.listTask[0].name="yo";

    //   //   this.taskList[0] = {
    //   //     name: this.theTask,
    //   //     unchecked: true,
    //   //   };
    //   //   this.taskListTableau[0].push("hello");
    //   // this.taskListTableau[1]="yo"

    // //   console.log(this.taskListTableau[0]);
    // //   this.listTask.push.theTask;
    // //   console.log("wsh " + this.listTask);
    //   //   this.listTask.name.
    // //   console.log(this.listTask);
    //   //   console.log("apres " + lol);

    //   return true;
    // },
    date: function () {
      let today = new Date();
      let toDate =
        today.getFullYear() +
        "-" +
        `${this.day[today.getMonth()]}` +
        "-" +
        today.getDate();

      console.log(toDate);

      return toDate;
    },
  },
};
</script>


<template>
  <div class="toDoCard">
    <div class="topToDo">
      <p>{{ date }}</p>
      <p class="titleCard">VueJs Tutorial ToDo List</p>
      <p>{{ howMany }} tâche(s)</p>
    </div>
    <NewToDo @newTask="addTask" />
    <!-- <div id="laNouvTache"></div> -->
    <!-- <div id="laNouvTache"> -->
    <!-- <ToDoList v-bind="theTask" /> -->
    <!-- <ToDoList/> -->
    <!-- </div> -->

    <ToDoList v-bind:tasks="listTask" />
    <ToDoList @checks="checkTask" />
  </div>
</template>

<style>
.topToDo .titleCard {
  color: #00ff7f;
  font-weight: bold;
}
.toDoCard {
  border-radius: 10px;
  background-color: #fff;
  width: 60%;
  position: absolute;
  top: 20vh;
  left: 20%;
  height: 60vh;
}

.topToDo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px;
  border: solid 1px;
}
</style>