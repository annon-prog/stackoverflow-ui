<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">StackOverFlow</div>
        <form class="search-form">
          <input class="search-input" type="search" placeholder="Search" aria-label="Search">
          <button class="search-button" type="submit">Search</button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="goToSignUp">Sign Up</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="goToSignIn">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="dashboard">
      <div class="welcome-align">
        <h2>Welcome to the Dashboard</h2>
        <router-link to="/question"><button class="question-btn">Ask question</button></router-link>
      </div>

      <router-view v-if="$route.path === '/question'"></router-view>
      <div v-else>
      <div  class="question" v-for="question in questions" :key="question.id">
        <router-link   to='/answer'><h3>{{ question.title }}</h3></router-link> 
        <p>{{ question.description }}</p>
        <div class="meta">
          <div class="votes">
            <button @click="count++">Upvote</button>
            <p>{{ "likes:" + count }}</p>

            <button @click="counts++">Downvote</button>
            <p>{{ "likes:" + counts }}</p>
          </div>
          <span class="answers">Answers: {{ question.answers }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    QuestionComponent
  },
  data() {
    return {
      questions: [],
      count: 0,
      counts: 0
    };
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    goToSignUp() {
      this.$router.push('/');
    },
    goToSignIn() {
      this.$router.push('/login');
    },
    addQuestion(question) {
      this.questions.push({
       id: uuidv4(),
        title: question.title,
        description: question.description,
        tags: question.tags,
        votes: 0,
        answers: 0
      });
    },
    fetchQuestions() {
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
      this.questions = storedQuestions;
    }
  }
};
</script>

<style scoped>
/* Your styling goes here */
</style>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
}


.dashboard {
  padding: 20px;
}

.question {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.question h3 {
  margin-top: 0;
}

.meta {
  margin-top: 10px;
  font-size: 14px;
}

.meta span {
  margin-right: 10px;
}
/* Styling for the navigation bar */
.navbar {
  background-color: #f8f9fa;
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  padding-left: 6em;
  padding-right:3em;
  font-weight:bold;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-input {
  width: 450px; /* Adjust width as needed */
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-right: 10px; /* Adjust spacing between input and button */
}

.search-button {
  padding: 8px 20px;
  background-color: #007bff;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}


.navbar-nav {
  display: flex;
  list-style-type: none;
  align-items: center;
}

.nav-item {
  margin-left: 10px;
}

.nav-link {
  text-decoration: none;
  color: #007bff;
  padding: 8px 20px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #007bff;
  color: #fff;
}

.navbar-nav .nav-item {
  margin-left: 10px;
}
.question-btn {
  height:40px;
  width:150px;
  padding: 8px 20px; 
  background-color: #007bff;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 52em;
  font-size: 14px; 
}

.welcome-align{
    display:flex;
    flex-direction:row;
}

</style>
