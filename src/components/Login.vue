<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="login-panel panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sign in</h3>
      </div>
      <div class="panel-body">
        <form role="form">
          <fieldset>
            <div class="form-group">
              <input type="text"class="form-control" placeholder="username"v-model="username" autofocus>
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Password" name="password" type="password" value="">
            </div>
            <!-- Change this to a button or input when using this as a form -->
            <a v-link="'/home'" class="btn btn-default btn-block">Login</a>
          </fieldset>
        </form>
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
<style>
.btn-default{
  background: #f1f1f1;
}
.login-panel{
  box-shadow:0px 5px 5px 0.01px #a7a3a3;
}
</style>
