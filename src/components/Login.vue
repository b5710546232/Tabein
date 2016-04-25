<template>
   <div class="col-sm-4 col-sm-offset-4">
     <h2>Sign In</h2>
     <p>Username</p>
     <div class="form-group">
       <input type="text"class="form-control"placeholder="Enter your username"v-model="username">
     </div>
     <p>Username</p>
     <div class="form-group">
     <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
     </div>
     <button class="btn btn-primary" @click="method()">Sign in</button>
   </div>
 </template>
