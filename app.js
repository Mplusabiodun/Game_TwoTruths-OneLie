const app = Vue.createApp({
  data() {
    return {
      show: true,
      gamer: "",
      enteredValue: "",
      goals: [],
      liColor: "#8ddba4",
      activeGoal: "",
    };
  },

  methods: {
    changeColor(color, goal) {
      this.liColor = color;
      this.activeGoal = goal;
    },

    addGoal() {
      if (this.goals.length === 3) {
        alert(
          "Four statements will be much to guess. \nLet's stop at three statements"
        );
        this.enteredValue = "";
        return;
      }
      if (this.enteredValue.length === 0) {
        return;
      } else {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
      }
    },
    letsGo() {
      if (this.gamer.length === 0) {
        return alert("Please enter your nickname. \nAnd let's have fun");
      } else {
        this.show = !this.show;
      }
    },
    newGame() {
      this.goals = [];
    },
  },
});

app.mount("#user-goals");
