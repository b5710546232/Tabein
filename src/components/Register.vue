<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Join the Tabien</h1>
    <h4>Community of the people who has car</h4>
    <p>Username</p>
    <div class="form-group">
      <input type="text"class="form-control"placeholder="Enter your username"v-model="username">
    </div>
    <p>Email Address</p>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter your E-mail" v-model="password">
    </div>
    <p>Password</p>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
    </div>
    <button class="btn btn-primary" @click="method()">Create an account</button>
  </div>
</template>
