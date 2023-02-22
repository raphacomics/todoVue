<script >

export default {
  data() {
    return {
      task: '',
      editedTask: null,
      buttonLabel: 'Submit',
      statusLabel: ['To-Do', 'In Progress', 'Done'],
      tasks: [
        {
          name: 'Rapha is coding',
          status: 'To-Do'
        },
        {
          name: 'Aline is not coding',
          status: 'In Progress'
        }
      ]
    }
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: 'To-Do',

        })


      } else {
        this.tasks[this.editedTask].name = this.task
        this.editedTask = null
      }
      this.task = ''
      this.buttonLabel = 'Submit'
    },

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
      this.buttonLabel = 'Save'
    },

    deleteTask(index) {
      this.tasks.splice(index, 1)
    },

    changeStatus(index) {
      let newIndex = this.statusLabel.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;

      this.tasks[index].status = this.statusLabel[newIndex]
    }
  }
}


</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center">ToDo App Vue</h2>
    <hr />

    <!-- Input ToDo -->

    <div class="d-flex">
      <input v-model="task" type="text" class="form-control" placeholder="Enter text">
      <button @click="submitTask" class="btn btn-primary ms-1">{{ buttonLabel }}</button>
    </div>

    <!-- Table -->

    <table class="table table-borderless table-striped table-hover mt-5">
      <thead class="table-primary">
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">

          <td>
            <span :class="{ 'finished': task.status === 'Done' }">
              {{ task.name }}
            </span>
          </td>
          <td class="pointer">
            <span @click="changeStatus(index)" :class="{
              'text-primary': task.status === 'In Progress',
              'text-warning': task.status === 'To-Do',
              'text-success': task.status === 'Done',

            }"> {{ task.status }} </span>
          </td>
          <td @click="editTask(index)">
            <v-icon class="pointer" name="hi-pencil" scale="1.5" fill="#0096FF" />
          </td>
          <td @click="deleteTask(index)">
            <v-icon class="pointer" name="hi-trash" scale="1.5" fill="red" />
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<style  scoped>
.pointer {
  cursor: pointer;
}

.pointer:hover {
  filter: brightness(70%);
}

.finished {
  text-decoration: line-through;
  color: #b6b6b6;
}
</style>

