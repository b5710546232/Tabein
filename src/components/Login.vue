<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="login-panel panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Sign in</h3>
        </div>
        <div class="panel-body">
            <form role="form">
                <fieldset>
                    <div class="form-group">
                        <input type="text"class="form-control" placeholder="username"v-model="username" autofocus>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Password" name="password" type="password" value="">
                    </div>
                    <!-- Change this to a button or input when using this as a form -->
                    <a v-link="'/home'" class="btn btn-primary btn-block">Login</a>
                </fieldset>
            </form>
        </div>
    </div>
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
      comment_text:"",
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
    addComment(){
      this.comments.push({text:this.comment_text});
      this.comment_text=''
    },
  }
}
</script>
