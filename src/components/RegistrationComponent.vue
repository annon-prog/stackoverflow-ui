<template>
  <div class="login-container">
    <form class="login-form">
      <h3>Sign Up</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Enter email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" class="form-control" placeholder="Confirm password" required>
      </div>
       <router-link to ="/dashboard"><button type="submit" class="btn">Sign Up </button></router-link>
      <p class="forgot-password">Already registered? <router-link :to="{ name: 'login' }">Sign in</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.login-container {
  text-align: center;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  text-align: left;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.forgot-password {
  text-align: right;
  font-size: 14px;
  margin-top: 10px;
}
</style>
