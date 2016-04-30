<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="panel-title">General Account Settings</h1>
        </div>
        <div class="panel-body">
          <h4 class = "text-center">Edit your Information</h4>
          <div class="row">
            <div class="col-md-12">
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
              <div class="row">

                <div class = "col-md-6">
                  <button class="btn btn-primary btn-block" @click="method()" v-link = "'/addVehicle'" >Save changes</button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-default btn-block" @click="method()" v-link = "'/addVehicle'">Cancel</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
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
