<template>
  <!-- <div class="container-fluid">
    <button class="btn btn-default btn-lg"
  @click="showRight = !showRight">
  Click to toggle alert on right
</button>

<button class="btn btn-default btn-lg"
  @click="showTop = !showTop">
  Click to toggle alert on top
</button>
<hr>
<alert type="success" >
  <strong>Well Done!</strong>
  You successfully read this important alert message.
</alert>

<alert type="info" >
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>

<alert type="danger" dismissable>
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</alert>

<alert type="warning" dismissable>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</alert>

<alert
  :show.sync="showRight"
  :duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable
>
  <span class="icon-ok-circled alert-icon-float-left"></span>
  <strong>Well Done!</strong>
  <p>You successfully read this important alert message.</p>
</alert>

<alert
  :show.sync="showTop"
  :duration="3000"
  type="danger"
  width="400px"
  placement="top"
  dismissable>
  <span class="icon-info-circled alert-icon-float-left"></span>
  <strong>Heads up!</strong>
  <p>This alert needs your attention.</p>
</alert> -->

    <div class="row">
      <div>

        <div class="well well_white">
          <div class=""> Firstname: {{firstname}}</div>
          <div class=""> Lastname: {{lastname}}</div>
          <div class=""> Location: {{location}}</div>
          <p class="lead">Add vehicle</p>
          <hr>
          <div class="form">
          <div class="">
            First Block    :
            <input class="" type="text" v-model="inputFirst" placeholder="Input first block">
            Second Block    :
            <input class="" type="text" v-model="inputSecond" placeholder="Input second block">
          </div>

          <div class="">
            Province :
            <!-- <input class="form-control" type="text" v-model="inputProvince" placeholder="Input province"> -->
            <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
      {{provnince_text}}
      <span class="caret"></span></button>

      <ul class="dropdown-menu">
        <li v-for = "item in provinces"><a  @click = "clickGetLocation(provinces[$index].name)" >{{item.name}}
          <!-- <li><a  @click = "clickGetLocation(provinces[$index].name)">{{item.name}}</a></li> -->
  </a>
        </li>
        <!-- </div> -->
        <!-- <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li> -->
      </ul>
    </div>

          </div>

          <div class="">
            Color :
            <input class="form-control" type="text" v-model="inputColor" placeholder="Input color">
          </div>



          <div class=""> Model     : </div>
          <input class="form-control" type="text" v-model="inputBrand" placeholder="Input Brand">
          <div class=""> Make : </div>
          <input class="form-control" type="text" v-model="inputMake" placeholder="Input Make">
        </div>
          <hr>
        </div>

      </div>

    </div>

    <button class="btn btn-primary btn-block" @click="clickAddModel(inputBrand,inputMake,inputI)">add vehicle</button>

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
      firstname:"no connection",
      lastname:"no connection",
      location:"no connection",
      text1:"",
      text2:"",
      msg:"",
      provnince_text:"Select province",
      showText:"",
      provinces:null,
      selectOptions: [
         { text: 'Male', value: 'male' },
         { text: 'Female', value: 'female'}
   ]
    }
  },
  created () {
    var user_id = 1;
    this.firstname = 0;
    this.getUser(user_id);
    this.initProvince();
  },
  methods: {
    clickAddModel(text1,text2,text3){
      var newModel = {firstname:this.firstname,lastname:this.lastname,location:this.location,
                      brand:text1,make:text2}
      console.log("text1 = "+text1+"||"+"text2 = "+text2);
      console.log('click ได้ นะ');
        this.$http.post("http://localhost:7777/newvehicle", modelText, (data) => {
          console.log('success')}).error((err) => {
        console.log('error วะ ต่อ');
      });
      // this.getUser(text3);
    },
    clickGetLocation(location){
      // console.log('call');
      // console.log(location);
      // this.location = location;
      this.provnince_text = location;
    },
    getUser(id){
      console.log(id);
      this.firstname = id;
      this.$http
      .get('http://localhost:7777/user/'+id, (data) => {
        console.log(data);
        this.firstname = data;
        console.log(data[0].id);
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
        this.location = data[0].location;
      });
    },
  initProvince(){
    this.firstname = 90;
    this.$http
    .get('http://localhost:7777/province', (data) => {
      console.log(data);
      this.firstname = 1;
      this.provinces = data;
    });
  },
}
}
</script>
