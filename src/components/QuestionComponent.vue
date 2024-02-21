<template>
  <div class="question-form">
    <h2>Post a Question</h2>
    <form @submit.prevent="submitQuestion">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" class="form-control" placeholder="Enter title" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" class="form-control" rows="5" placeholder="Enter description" required></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input type="text" id="tags" v-model="tags" class="form-control" placeholder="Enter tags">
      </div>
      <div class="buttons">
    <router-link to="/dashboard"><button type="button" class="btn btn-primary ">Back to Dashboard</button></router-link>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      tags: ''
    };
  },
  methods: {
      submitQuestion() {
          this.$emit('question-submitted', {
              title: this.title,
              description: this.description,
              tags: this.tags
          });

          const newQuestion = {
              title: this.title,
              description: this.description,
              tags: this.tags
          };

          const questions = JSON.parse(localStorage.getItem('questions')) || [];
          questions.push(newQuestion);
          localStorage.setItem('questions', JSON.stringify(questions));

          this.title = '';
          this.description = '';
          this.tags = '';
    }
  }
};
</script>

<style scoped>
.question-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  outline: 0;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.btn {
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.15s ease-in-out;
}

.btn:hover {
  background-color: #0056b3;
}
.buttons{
    display:flex;
    gap:50px;
}
</style>
