<template>
  <div class="forgot-password-container">
      <h3>Forgot Password</h3>
    <form class="forgot-password-form">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Enter your email" required>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Reset Password</button>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.forgot-password-container {
   width:100vw;
  height:100vh;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap:20px;
}

.forgot-password-form {
   background: #f8f6f6;
  width: 330px;
  height:27%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0, 0, 10px, rgba(0, 0, 0, 0.2);
  margin: 0; /* Resetting margin */
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
.form-group input[type="email"]{
  width: calc(100% - 40px);
  padding:10px;
}
</style>
