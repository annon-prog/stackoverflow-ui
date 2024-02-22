<template>
  <div class="login-container">
      <h3>Sign In</h3>
        
    <form class="login-form" @submit.prevent="signUpButtonPressed" novalidate>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Enter email" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password">
      </div>
    <button type="submit" class="btn">Sign in</button>
       <div class="signup-message">
      <p>Don't have an account?</p>
      <router-link to="/">Sign up here</router-link>
        <p class="forgot-password">
        <router-link to="/forgot-password">Forgot password?</router-link>
      </p>
    </div>
      <div class="error-box" v-show="errors.length > 0" >
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
</div>
    </form>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
       errors:[],
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
     validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    signUpButtonPressed() {
      this.errors = [];
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
      if (this.errors.length === 0) {
        this.$router.push({ name: 'dashboard' });
       }
    }
    
  }
}
</script>

<style scoped>
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error-box {
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
  width:350px;
}
.login-container {
  width:100vw;
  height:110vh;
  text-align: center;
  display: flex;
  flex-direction:column;
  gap:20px;
  align-items: center;
  justify-content: center;
}

.login-form {
  background: #f8f6f6;
  width: 350px;
  height:55%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0, 0, 10px, rgba(45, 14, 14, 0.2);
  margin:0;
}

caption {
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
  width:280px;
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
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}
.form-group input[type="email"],.form-group input[type="password"]{
  width: calc(100% - 40px);
  padding:10px;
}
.signup-message {
  margin-top: 20px;
  text-align: center;
}

.signup-message p {
  margin-bottom: 10px;
}

.signup-message router-link {
  color: #007bff;
  text-decoration: none;
}

.signup-message router-link:hover {
  text-decoration: underline;
}
</style>
