<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="panel-title">Join the Tabien</h1>
      </div>
      <div class="panel-body">
        <h5>Community of the people who has car</h5>
        <p>Username</p>
        <div class="form-group">
          <input type="text"class="form-control"placeholder="username"v-model="username">
        </div>
        <p>Email Address</p>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail" v-model="email">
        </div>
        <p>Password</p>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="password" v-model="password">
        </div>
        <button class="btn btn-primary btn-block" @click="method()">Create an account</button>
      </div>
    </div>
  </div>

</template>
