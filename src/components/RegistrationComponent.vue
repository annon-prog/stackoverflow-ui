<template>
  <div class="login-container">
      <h3>Sign Up</h3>
    <form class="login-form" @submit.prevent="signUpButtonPressed" novalidate>
      <div class="form-group">
        <label for="name"> Username</label>
        <input type="text" id="name" class="form-control" placeholder="Enter your name"  v-model="user.name" >
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Enter email" v-model = "user.email" >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password"  v-model="user.password" >
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" class="form-control" placeholder="Confirm password" v-model="user.password_confirmation" >
      </div>
       <button type="submit" class="btn">Sign Up </button>
         <div class="signin-message">
           <p >Already have an account? <router-link to="/login">Sign in</router-link></p>
    </div>
     
    </form>
     <div class="error-box" v-show="errors.length > 0" >
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name:'RegisterPage',
  data() {
    
    return {
      errors: [],
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
      validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  async  signUpButtonPressed() {
      this.errors = [];

     if (this.user.name == "") {
       this.errors.push("User name is empty");
      }
      if (this.user.email == "") {
       this.errors.push("Email is empty")
      } else {
          if (!this.validEmail(this.user.email)) {
          this.errors.push("Invalid Email");
      }
      }
     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
      if (this.user.password === "") {
        this.errors.push("Password is empty");
      } else if (!passwordRegex.test(this.user.password)) {
        this.errors.push("Password must contain at least one symbol, one number, one lowercase character, one uppercase character, and be at least 8 characters long");
      }
    if (this.user.password_confirmation === "") {
        this.errors.push("Confirm Password is empty");
      } else if (this.user.password !== this.user.password_confirmation) {
        this.errors.push("Passwords do not match");
       }
    if (this.errors.length === 0) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', this.user);
        console.log('Registration successful:', response.data);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error("Registration error:", error);
        }
       }
    }
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error-box {
  width: 350px;
  background-color: #ffebee; /* Light red background */
  border: 1px solid #e57373; /* Red border */
  border-radius: 4px; /* Rounded corners */
  padding: 10px; /* Padding around the messages */
  margin-bottom: 15px; /* Spacing between the container and other elements */
}

.error-box li {
  color: #f44336; /* Red text color */
  list-style-type: none; 
  margin-bottom:10px;
  font-size:17px;
  text-align:left;
}

.login-container {
  width:100vw;
  height:110vh;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap:20px;
}

.login-form {
  background: #f8f6f6;
  width: 350px;
  height:65%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0, 0, 10px, rgba(0, 0, 0, 0.2);
  margin: 0; 
}


.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  text-align: center;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  width: 280px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top:20px;
}

.btn:hover {
  background-color: #0056b3;
}

.forgot-password {
  text-align: right;
  font-size: 14px;
  margin-top: 30px;
}
.form-group input[type="email"],.form-group input[type="password"], .form-group input[type="text"]{
  width: calc(100% - 40px);
  padding:10px;
}
.signin-message {
  margin-top: 20px;
  text-align: center;
}

.signin-message p {
  margin-bottom: 10px;
}

.signin-message router-link {
  color: #007bff;
  text-decoration: none;
}

.signin-message router-link:hover {
  text-decoration: underline;
}
</style>
