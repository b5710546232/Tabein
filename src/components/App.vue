<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Tabein</a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <form class="navbar-form navbar-left">
          <div class="form-group"  style="display:inline;">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search Tabein " >
              <!-- <span class="input-group-btn"> -->
              <!-- <button v-link="'/vehicle'" class="btn btn-default" type="button">Go!</button> -->
              <!-- <span class="input-group-addon btn"><span class="glyphicon glyphicon-search"></span></span> -->
              <!-- </span> -->
              <span class="input-group-addon btn" v-link="'/vehicle'" ><span class="glyphicon glyphicon-search"></span></span>
            </div>
          </div><!-- /input-group -->
        </form>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a v-link="'/home'">Home</a></li>
            <li><a v-link = "'/vehicle'"><span class="glyphicon glyphicon-user"></span> {{username}}</a></li>
            <li><a v-link = "'/login'"><span class="glyphicon glyphicon-log-in"></span> Sign In</a></li>
            <li><a v-link = "'/register'"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a v-link = "'/login'"><span class="glyphicon glyphicon-log-out"></span> Sign Out</a></li>
            <li><a v-link="'/about_us'">About</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="container view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:"Temtemtem",
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
.view{
  padding-top:5%;
}
.navbar{
  background-color: #eeecec;
}
</style>
