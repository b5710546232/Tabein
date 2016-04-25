<template>
  <div id="wrapper">
    <nav class="navbar navbar-default" role="navigation">
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
        <form class="navbar-form navbar-left" role="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for... " >
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div><!-- /input-group -->
        </form>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a v-link="'/home'">Home</a></li>
            <li><a v-link = "'/login'"><span class="glyphicon glyphicon-log-in"></span> Sign In</a></li>
            <li><a v-link = "'/register'"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a v-link="'/about_us'">About</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>



    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
