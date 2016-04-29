<template>
  <div class="container-fluid">
    <div class ="col-md-8 col-md-offset-2">
      <div class="row">
        <div class="well well_white">
          <!-- <img class="img-responsive" src="http://placehold.it/800x300" alt=""> -->
          <p class="lead">Profile name</p>
          <hr>
          <div class=""> name     : {{firstname}}</div>
          <div class=""> lastname : {{lastname}}</div>
          <div class=""> e-mail : {{email}}</div>
          <div class=""> Number of cars : {{count}} cars</div>
          <hr>
        </div>
        <div v-for="item in vehicles">
          <div class="well well_white">
            <p class="lead">Vehicle</p>
            <hr>
            <div class="">License plate: {{item.first_block}}{{item.second_block}}</div>
            <div class=""> province     : {{item.province}}</div>
            <div class=""> color     : {{item.color}}</div>
            <div class=""> Brand     : {{item.brand}}</div>
            <div class=""> model : {{item.make}}</div>
          </div>
        </div>

        <!-- row -->
      </div>

    </div>
    <!-- col-md-8 col-md-offset-2 -->
  </div>

  <!-- /.container -->
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
      username:"Anonymous" + " : ",
      firstname:"tor",
      text:"start",
      lastname:"worakan",
      email:"test@xmail.com",
      count:0,
      msg:"",
      time_since_post:"x day ago",
      vehicles:[
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },

      ]
    }
  },
  created () {

    this.initUser();
    this.initVehicle();
    this.numVehicle();
    // this.initVehicleModel();

  },
  methods: {
    someMethod(){
      // add method here

    },
    initUser(){
      this.$http
      .get('http://localhost:7777/user/1', (data) => {
        console.log(data);
        console.log(data[0].id);
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
      });
    },
    initVehicle(){
      this.$http
      .get('http://localhost:7777/vehicle/1', (data) => {
        console.log(data);
        console.log("vehicle"+data[0].id);
        this.vehicles = data;
      });
    },
    numVehicle(){
      this.$http
      .get('http://localhost:7777/numvehicle/1', (data) => {
        console.log(data);
        console.log("count vec"+data[0].num);
        this.count = data[0].num;
      });
    }
  }
}

</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
</style>
