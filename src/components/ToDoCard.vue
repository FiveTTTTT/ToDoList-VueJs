<script>
import NewToDo from "../components/NewToDo.vue";
import ToDoList from "../components/ToDoList.vue";

export default {
  name: "ToDoCard",
  components: {
    NewToDo,
    ToDoList,
  },
  data() {
    return {
      unchecked: true,

      listTask: [],

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
    removeTask(payload) {
      this.removerId = payload.removerId;
      let idCheck = this.removerId;
      let removeThisTask = this.listTask;
      removeThisTask.splice(idCheck, 1);
    },
    checkTask(payload) {
      this.checkedId = payload.checkedId;
      let idCheck = this.checkedId;
      let thisTaskCheck = this.listTask[idCheck].uncheckeds;
      let chose = document.getElementById("laNouvTache" + idCheck);
      if (!thisTaskCheck) {
        chose.className = "isCheck";
        this.listTask[idCheck].uncheckeds = true;
      } else {
        chose.className = "isNotCheck";
        this.listTask[idCheck].uncheckeds = false;
      }
    },
    addTask(payload) {
      this.uncheckeds = false;

      this.theTask = payload.theTask;

      let theListt = this.listTask;

      let theNewTask = { name: this.theTask, unchecked: this.uncheckeds };
      theListt.push(theNewTask);
    },
  },
  computed: {
    howMany: function () {
      let howManyTask = this.listTask.length;
      return howManyTask;
    },
    date: function () {
      let today = new Date();
      let toDate =
        today.getFullYear() +
        "-" +
        `${this.day[today.getMonth()]}` +
        "-" +
        today.getDate();

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

    <ToDoList
      @checks="checkTask"
      @remover="removeTask"
      v-bind:tasks="listTask"
    />
  </div>
</template>

<style>
.isCheck {
  text-decoration: line-through;
}
.isNotCheck {
  text-decoration: none;
}

.topToDo .titleCard {
  color: #00ff7f;
  font-weight: bold;
}
.toDoCard {
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  width: 60%;
  position: absolute;
  top: 20vh;
  left: 20%;
  /* height: 60vh; */
}

.topToDo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px;
  border: solid 1px;
}
</style>