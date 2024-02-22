<template>
  <div class="answer-page">
    <div class="answer-container">
    <h2>{{ question.title }}</h2>
    <p>{{ question.description }}</p>
    <form @submit.prevent="submitAnswer">
      <div class="form-group">
        <label for="answer">Your Answer:</label>
        <textarea id="answer" v-model="answer" class="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Answer</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {},
      answer: ''
    };
  },
  created() {
    // Retrieve question data based on route param
    const questionId = this.$route.params.id;
    this.fetchQuestion(questionId);
  },
  methods: {
    fetchQuestion(questionId) {
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
      const question = storedQuestions.find(q => q.id === parseInt(questionId));
      if (question) {
        this.question = question;
      } else {
        // Handle error: question not found
      }
    },
    submitAnswer() {
      // You need to implement functionality to submit the answer
      // Example: call an API to submit the answer
      // After successful submission, you can update data accordingly
      // For demonstration, let's just log the submitted answer
      console.log('Submitted Answer:', this.answer);
      // You may also want to clear the answer textarea after submission
      this.answer = '';
    }
  }
};
</script>

<style scoped>
.answer-page {
   height:100vh;
  width:100vw;
 display:flex;
  justify-content:center;
  align-items:center;
}
.answer-container{
 display:flex;
  justify-content:center;
  align-items:center;
  width:65%;
  height:50%;
}
#answer{
  height:200px;
  width:600px;
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
  margin-top:20px;
  margin-left:60px;
  width:30em;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
