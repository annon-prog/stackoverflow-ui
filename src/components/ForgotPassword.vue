<template>
  <div class="forgot-password-container">
    <form class="forgot-password-form">
      <h3>Forgot Password</h3>
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
.forgot-password-container {
  text-align: center;
}

.forgot-password-form {
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
</style>
