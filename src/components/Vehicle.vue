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
                <h1 text = "center">{{avg_ratting}}</h1>
              </div>
            </div>
            <div  class="col-md-3">
              <br>
              <span class="glyphicon glyphicon-star gi-1-5x" v-for = "item in stars"></span>
              <br>
              {{total_ratting}} rating
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
              <div class="col-md-12 help-block rate-car">
                Rate this vehicle
              </div>
              <div class="col-md-12">
                <div class="star-rating">
                  <label class="star-rating__star" v-for="rating in ratings"
                  :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
                  v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
                  <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name"
                  v-model="value" :disabled="disabled">★</label>
                </div>
              </div>
            </div>
          </div><!-- well -->

          <!-- comments -->
          <div v-for="comment of comments">
            <div class="well well_white">
              <div class="row">
                <div class="col-md-12">
                  <label class="star-rating__star" v-for="rating in ratings"
                  :class="{'is-selected': ((comment.rattings >= rating) && value != null), 'is-disabled': disabled}">★</label>
                  <br>
                  {{username}}
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
</template>


<script>
export default {
  data() {
    return {
      avg_ratting:0,
      total_ratting: "no connection",
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
      value:1,
      ratings: [1, 2, 3, 4, 5],
      emptystars:[1],
      comment_text:"",
      msg:"",
      time_since_post:"x day ago",
      comments:[],
    }
  },
  props: {
    'name': String,
    'value': null,
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },
  created(){
    console.log("Start vehicle.vue");
    this.initVehicle(this.vehicle_id);
    this.initOwner(this.vehicle_id);
    this.initVehicleModel(this.vehicle_id);
    this.initUser(this.reviewer_id);
    this.initRate(this.vehicle_id);
    this.numRate(this.vehicle_id);
    this.avgRate(this.vehicle_id);
  },
  watch:{
    // 'comments': function (val, oldVal) {
    //    console.log('new: %s, old: %s', val, oldVal)
    //    this.initRate(this.vehicle_id);
    //  },
  },
  // computed:{
  //   getAvgRate(){
  //     return this.avg_ratting;
  //   }
  //   getTotalRate(){
  //     return this.total_ratting;
  //   }
  // },
  methods: {
    addRate(){
      console.log("text"+this.comment_text);
      // console.log("date"+Date.now());
      this.rate = this.value;
      var rate = {
        user_id: this.reviewer_id,
        vehicle_id: this.vehicle_id,
        rate: this.rate,
        timestamp: Date.now(),
        message: this.comment_text
      };
      this.$http
      .post('http://localhost:7777/newrating', rate, (data) => {
        this.initRate(this.vehicle_id);
      });
      // this.comments.unshift({text:this.comment_text , rattings:this.value});
      this.comment_text='';
<<<<<<< HEAD
      this.value = 1;
      // this.avg_ratting = (this.avg_ratting+this.rate)/2;
      // this.total_ratting = this.comments.length;
=======
      var temp = (parseInt(this.avg_ratting)+parseInt(this.rate))/2;
      this.avg_ratting = temp;
      this.total_ratting = this.comments.length;
      this.value = 1;
>>>>>>> b197e6bdcbae7fdeea3982977d49f551309f1db3
    },
    initVehicle(id){
      // console.log("vehicle"+id);
      this.$http
      .get('http://localhost:7777/vehicleByVID/'+id, (data) => {
        // console.log("VID"+data[0].first_block);
        // console.log("vehicle"+data[0].id);
        this.province = data[0].province;
        this.first_block = data[0].first_block;
        this.second_block = data[0].second_block;

      });
    },
    initOwner(id){
      // console.log("vehicle"+id);
      this.$http
      .get('http://localhost:7777/userByVID/'+id, (data) => {
        this.owner_firstname = data[0].firstname;
        this.owner_lastname = data[0].lastname;
      });
    },
    initVehicleModel(id){
      // console.log("vehicle"+id);
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
    initRate(vid){
      // this.comments = [];
      this.$http
      .get('http://localhost:7777/initRate/'+vid, (data) => {
          for(var i=0 ; i<data.length ; i++){
            // console.log("RATE"+data[i].message);
            this.comments.unshift({text:data[i].message, rattings:data[i].rate});
          }
      });
      // this.$http.get('http://localhost:7777/initRate/'+vid, data).then(function(res){
      //   console.log('succuess');
      // }, function (res) {
      //   console.log('error');
      // });
      console.log('initRate call');
    },
    star_over(index) {
      if (this.disabled) {
        return;
      }

      this.temp_value = this.value;
      this.value = index;
    },
    star_out() {
      if (this.disabled) {
        return;
      }

      this.value = this.temp_value;
    },
    set(value) {
      if (this.disabled) {
        return;
      }
      this.temp_value = value;
      this.value = value;
      // console.log(value+" ratings");
    },
    addComment(){
      this.comments.unshift({text:this.comment_text , rattings:this.value});
      this.comment_text='';
      this.value = 1;
    },
    numRate(vid){
      this.$http
      .get('http://localhost:7777/numRate/'+vid, (data) => {
          this.total_ratting = data[0].num;
      });
    },
    avgRate(vid){
      this.$http
      .get('http://localhost:7777/avgRate/'+vid, (data) => {
          var x = data[0].avgRate;
          this.avg_ratting = x.toFixed(1);
      });
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
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.25em;
  color: #ABABAB;
  transition: color .2s ease-out;
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is-selected {
  color: #282727;
}

.star-rating__star.is-disabled:hover {
  cursor: default;
}

.rate-car{
  padding-left: 3%
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
