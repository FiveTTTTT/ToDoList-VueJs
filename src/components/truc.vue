<script>
import NewToDo from "../components/NewToDo.vue";
import ToDoList from "../components/ToDoList.vue";

export default {
  name: "toDoCard",
  components: {
    NewToDo,
    ToDoList,
  },
  data() {
    return {
      unchecked: true,

      theTask: "yo",
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
    setMessage(payload) {
      this.unchecked = false;
      this.theTask = payload.theTask;
      console.log(this.theTask);
      this.addTask;
      //   this.addTask(taskName);
      //   return taskName;
    },
  },
  computed: {
    addTask: function () {
      //   document.getElementById("laNouvTache").innerHTML = this.theTask;
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "checkBox";
      let taskName = document.createElement("p");
      taskName.id = "taskId";
      taskName.innerHTML = this.theTask;
      document.getElementById("laNouvTache").appendChild(checkBox);
      document.getElementById("laNouvTache").appendChild(taskName);

      let i = "wesh ";
      console.log(i);
      return i;
    },
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
      <p>{- lol -} tâche(s)</p>
    </div>
    <NewToDo @newTask="setMessage" />
    <div id="laNouvTache">
      <ToDoList v-bind="theTask" />
    </div>
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