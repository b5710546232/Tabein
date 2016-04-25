<template>

  <!-- Page Content -->
  <div class="container">

    <div class="row">
      <div class="col-md-4">
        <p class="lead">Car ID : xxxxx</p>
      </div>

      <div class="col-md-9">

        <div class="thumbnail">
          <img class="img-responsive" src="http://placehold.it/800x300" alt="">
          <div class="caption-full">
            <h4>Profile name</h4>
            some message
          </div>
        </div>

        <div class="well well-white">
            <div class="ratings">
              <h5>Ratings and reviews</h5>
              <p class="pull-right">number reviews</p>
              <p>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                3.0 stars
              </p>
            </div>
        </div>

        <div class="well">
          <hr>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Write a comment ..." v-model="comment_text"  @keyup.enter = "addComment" autofocus>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click = "addComment">comment</button>
            </span>
          </div><!-- /input-group -->
          <hr>
        </div>
        <!-- comments -->
        <div v-for="comment of comments">
          <div class="well">
            <div class="row">
              <div class="col-md-12">
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <br>
                {{username}}
                <br>
                <span class="pull-right">{{time_since_post}}</span>
                {{ comment.text }}

              </div>
            </div>
          </div>
        </div>

        <hr>

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
        <p>Tabien web data project 2015</p>
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
      comment_text:"",
      msg:"",
      time_since_post:"x day ago",
      comments:[],
    }
  },
  methods: {
    addComment(){
      this.comments.push({text:this.comment_text});
      this.comment_text=''
    },
  }
}
</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
</style>
