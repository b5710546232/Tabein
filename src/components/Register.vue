<template>
<div class="row jumbo">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="panel-title">Join the Tabien</h1>
      </div>
      <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
            <h5>Community of the people who has car</h5>
            <div class="col-md-12"></div>
            <p>Username</p>
            <div class="form-group text-input">
              <input type="text"class="form-control"placeholder="username"v-model="username" autofocus>
            </div>
            <p>Firstname</p>
            <div class="form-group text-input">
              <input type="text"class="form-control"placeholder="firstname"v-model="firstname">
            </div>
            <p>Lastname</p>
            <div class="form-group text-input">
              <input type="text"class="form-control"placeholder="lastname"v-model="lastname">
            </div>

            <p>Location</p>
            <div class="form-group text-input">
              <input type="text"class="form-control"placeholder="lastname"v-model="location">
            </div>

            <p>Email Address</p>
            <div class="form-group text-input">
              <input type="text" class="form-control" placeholder="E-mail" v-model="email">
            </div>
            <p>Password</p>
            <div class="form-group text-input">
              <input type="password" class="form-control" placeholder="password" v-model="password">
            </div>
            <div class="col-md-4"></div>
              <div class = "col-md-4">
            <button class="btn btn-default btn-block btn-create" @click="method()" v-link = "'/success'">Create an account</button>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</div>

</template>
<style>
.btn-default{
  background: #f1f1f1;
}
.text-input{
  padding-bottom: 2%;
}
.panel{
  box-shadow:0px 5px 5px 0.01px #a7a3a3;
}
</style>
