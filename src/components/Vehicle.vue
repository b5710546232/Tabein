<template>
  <div class="container-fluid">
    <div class ="col-md-8 col-md-offset-2">

      <div class="row">

        <div>
          <div class="thumbnail">
            <br>
            <p class="lead">Vehicle profile</p>
            <hr>
            <div class="row">
              <div class="col-md-12"><p class="lead">Car ID: {{first_block}} {{second_block}} {{province}}  </p></div>
              <div class="col-md-4">
              </div>
              <div class="col-md-4">
                <img class="img-responsive" src="http://placehold.it/150x150" alt="">
              </div>

              <div class="mytext col-md-5">
                <h4>Owner name : {{owner_firstname}} {{owner_lastname}}</h4>
                Description : {{brand}} {{make}} {{color}}
              </div>
            </div>
          </div>

          <div class="well well_white">
            <div class="row">


              <div  class="well header-well col-md-5">
                <h5>Average rating</h5>
              </div>
              <div  class="well col-md-7 header-well">
                <h5>Rating snapshot</h5>
              </div>

              <div  class="col-md-2">
                <div class="well ratings-well">
                  <h1 text = "center">3.6</h1>
                </div>
              </div>
              <div  class="col-md-3">
                <br>
                <span class="glyphicon glyphicon-star gi-1-5x" v-for = "item in stars"></span>
                <br>
                70k rating
              </div>
              <div class="col-md-7">
                5  <span class="glyphicon glyphicon-star"></span>
                <br>
                4 <span class="glyphicon glyphicon-star"></span>
                <br>
                3 <span class="glyphicon glyphicon-star"></span>
                <br>
                2 <span class="glyphicon glyphicon-star"></span>
                <br>
                1 <span class="glyphicon glyphicon-star"></span>
                <br>
              </div>

            </div>
          </div>

          <div class="well">

            <div class="row review-row"><div class="col-md-12">Review by {{firstname}} {{lastname}} ({{username}})</div></div>
            <div class="row review-row">
              <div class="col-md-12">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Write a review ..." v-model="comment_text"  @keyup.enter = "addRate" autofocus>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click = "addRate()">submit</button>
                  </span>
                </div>
              </div>
            </div><!-- /input-group -->
            <div class="row review-row">
              <div class="col-md-12">
                <span class="glyphicon glyphicon-star" v-for = "item in stars"></span>
              </div>

            </div>

          </div>
          <!-- comments -->
          <div v-for="comment of comments">
            <div class="well well_white">
              <div class="row">
                <div class="col-md-12">
                  <span class="glyphicon glyphicon-star" v-for = "item in stars"></span>
                  <span class="glyphicon glyphicon-star-empty" v-for = "item in emptystars"></span>
                  <br>
                  {{firstname}} {{lastname}} ({{username}})
                  <br>
                  <span class="pull-right">{{time_since_post}}</span>
                  {{ comment.text }}

                </div>
              </div>
            </div>
          </div>
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
        <p>Tabien © project DATABASE 2016</p>
        <div class="col-md-12"></div>
        <a class = "pointer">Thailand (TH)</a>
      </div>
    </div>
  </footer>
</div>
</template>


<script>
export default {
  data() {
    return {
      vehicle_id: 71,
      reviewer_id: 211,
      first_block: 'first',
      second_block: 'second',
      province: '---',
      username: '---',
      firstname: '---',
      lastname: '---',
      rate: 5,//temp
      owner_firstname: '---',
      owner_lastname: '---',
      brand: 'no connection',
      make: '',
      color: '',
      stars:[1,2,3,4],
      emptystars:[1],
      comment_text:"",
      msg:"",
      time_since_post:"x day ago",
      comments:[],
    }
  },
  created(){
    console.log("Start vehicle.vue");
    this.initVehicle(this.vehicle_id);
    this.initOwner(this.vehicle_id);
    this.initVehicleModel(this.vehicle_id);
    this.initUser(this.reviewer_id);
    this.initRate(this.vehicle_id,this.reviewer_id);
  },
  methods: {
    addRate(){
      console.log("text"+this.comment_text);
      console.log("date"+Date.now());
      var rate = {
        user_id: this.reviewer_id,
        vehicle_id: this.vehicle_id,
        rate: this.rate,
        timestamp: Date.now(),
        message: this.comment_text
      };
      this.$http
      .post('http://localhost:7777/newrating', rate, (data) => {

      });
      this.comments.unshift({text:this.comment_text});
      this.comment_text='';
    },
    initVehicle(id){
      console.log("vehicle"+id);
      this.$http
      .get('http://localhost:7777/vehicleByVID/'+id, (data) => {
        console.log("VID"+data[0].first_block);
        console.log("vehicle"+data[0].id);
        this.province = data[0].province;
        this.first_block = data[0].first_block;
        this.second_block = data[0].second_block;

      });
    },
    initOwner(id){
      console.log("vehicle"+id);
      this.$http
      .get('http://localhost:7777/userByVID/'+id, (data) => {
        this.owner_firstname = data[0].firstname;
        this.owner_lastname = data[0].lastname;
      });
    },
    initVehicleModel(id){
      console.log("vehicle"+id);
      this.$http
      .get('http://localhost:7777/modelByVID/'+id, (data) => {
        this.brand = data[0].brand;
        this.make = data[0].make;
        this.color = data[0].color;
      });
    },
    initUser(id){
      this.$http
      .get('http://localhost:7777/user/'+id, (data) => {
        this.username = data[0].username;
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
      });
    },
    initRate(vid,rid){
      
    }
  }
}
</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
.mytext{
  margin-left: 1%;
}
.thumbnail{
  padding-left: 2%;
  padding-right: 2%;
  padding-top:2%;
  padding-bottom: 2%;

}
.review-row{
  padding-bottom: 1%;
}
/*.ratings {
margin-left: 3px;
margin-right: 3px;
}*/
.ratings-well{
  text-align: center;
  padding-left: 2%;
  padding-right: 2%;
  padding-top:2%;
  padding-bottom: 15%;
}
.header-well{
  /*margin-left: 10%;*/
  /*margin-right: 30%;*/
  padding-left: 1%;
  padding-right: 1%;
  padding-top:1%;
  padding-bottom: 1%
}
.gi-1-5x{
  font-size: 1.5em;
}
.pointer{
  cursor: pointer;
}
#bb {
  background-color: #d2ff22;
}

#cc {
  background-color: green;
}
</style>
