<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="panel-title">General Account Settings</h1>
      </div>
      <div class="panel-body">
        <h4 class = "text-center">Edit your Information</h4>
        <br>
        username
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
        <div class="row">
          <div class="col-md-6">
            <button class="btn btn-primary btn-block" @click="method()">Save changes</button>
          </div>
          <div class="col-md-6">
            <button class="btn btn-default btn-block" @click="method()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- Footer -->
    <footer>
      <div class="row">
        <div class="col-lg-12">
          <hr>
          <p>Tabien web database SKE project 2016</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:"Anonymous",
      msg:""
    }
  },
  methods: {
    someMethod(){

    },
  }
}
</script>
