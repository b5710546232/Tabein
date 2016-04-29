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
              <div class="col-md-12"><p class="lead">Car ID : xxxxx</p></div>
              <div class="col-md-4">
              </div>
              <div class="col-md-4">
                <img class="img-responsive" src="http://placehold.it/150x150" alt="">
              </div>

              <div class="mytext col-md-4">
                <h4>Owner name : {{name}}</h4>
                some message description
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

            <div class="row review-row"><div class="col-md-12">Review by {{username}}</div></div>
            <div class="row review-row">
              <div class="col-md-12">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Write a review ..." v-model="comment_text"  @keyup.enter = "addComment" autofocus>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click = "addComment">sumit</button>
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
                  <span class="glyphicon glyphicon-star-empty" v-for "item in emptystars"></span>
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
      username:"Anonymous",
      name:"tor",
      stars:[1,2,3,4],
      emptystars:[1],
      comment_text:"",
      msg:"",
      time_since_post:"x day ago",
      comments:[],
    }
  },
  methods: {
    addComment(){
      console.log(this.comments);
      this.comments.unshift({text:this.comment_text});
      this.comment_text=''
    },
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
