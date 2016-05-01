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
                <input type="text" class="form-control" placeholder="password" v-model="password">
              </div>
              <div class="row">

                <div class = "col-md-6">
                  <button class="btn btn-default btn-block" @click="updateUser(username,password,firstname,lastname,location,email)" v-link = "'/dashboard'" >Save changes</button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-default btn-block" @click="methodX()">Cancel</button>
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
      user_id: 81,
      username:"no connection",
      password:"no connection",
      firstname:"no connection",
      lastname:"no connection",
      location:"no connection",
      email:"no connection",
      msg:""
    }
  },

  created(){
    this.initUser(this.user_id);
  },
  methods: {
    someMethod(){

    },
    updateUser(username,password,firstname,lastname,location,email){
      var user = {
        id: this.user_id,
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        location: this.location,
        email: this.email
      };
      this.$http
      .post('http://localhost:7777/updateuser', user, (data) => {
      });
    },
    initUser(id){
      console.log(id);
      // this.firstname = id;
      this.$http
      .get('http://localhost:7777/user/'+id, (data) => {
        console.log(data);
        this.firstname = data;
        console.log(data[0].id);
        this.username = data[0].username;
        this.password = data[0].password;
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
        this.location = data[0].location;
        this.email = data[0].email;
      });
    }
  }
}
</script>
