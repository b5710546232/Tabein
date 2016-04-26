<template>
  <div class="container-fluid">

    <div class="row">
      <div>

        <div class="well well_white">
          <!-- <img class="img-responsive" src="http://placehold.it/800x300" alt=""> -->
          <p class="lead">Profile name</p>
          <hr>
          <div class=""> name     : {{firstname}}</div>
          <div class=""> lastname : {{lastname}}</div>
          <div class=""> e-mail : {{email}}</div>
          <div class=""> Number of cars : 5 cars</div>
          <hr>
        </div>
        <div v-for="item in vehicles">
          <div class="well well_white">
            <p class="lead">Vehicle</p>
            <hr>
            <div class="">License plate: {{item.message.licenseplate}}</div>
            <div class=""> province     : {{item.message.provice}}</div>
            <div class=""> Car model : {{item.message.model}}</div>
          </div>
        </div>


      </div>

    </div>

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
      lastname:"worakan",
      email:"test@xmail.com",
      msg:"",
      time_since_post:"x day ago",
      vehicles:[
        {
          message:{
          licenseplate:"xxxกขค",
          provice:"กรุงเทsafพ",
          model:"Toyota"
        }
      },
      {
        message:{
        licenseplate:"xxxxx อิอิ",
        provice:"กรุงเทพ จริงป้ะ",
        model:"กูรถวิท"
      }
    },
      ]
    }
  },
  methods: {
    someMethod(){
      // add method here
    },
  }
}
</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
</style>
