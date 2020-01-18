<template>
  <article>
    <el-form
      style="100%"
      label-position="top"
      label-width="80px"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      v-show=this.formVisible
      >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="First Name" prop="first">
            <el-input v-model="ruleForm.first"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Last Name" prop="last">
            <el-input v-model="ruleForm.last"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Message" prop="msg">
            <el-input type="textarea" :rows="4" v-model="ruleForm.msg"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="btn-box">
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')">Submit</el-button>
          <el-button class="btn" @click="resetForm()">Reset</el-button>
        </div>
      </el-row>
    </el-form>

    <div class="pay">
      <h3><b>Your Enquiry has been received</b></h3><br>
      <h4>
        <b>Kindly</b> Support <span>ME</span> with your donation.
        <br><br>
        <p>Thank you!</p>
      </h4>

      <img class="img-box" src="../assets/Unimelb.jpg"/>

      
      <el-slider
        v-model="sliderValue"
        :marks="marks"
        :step='5'
        :max=50
        :min=0>
      </el-slider>
      <div style="width: 350px; display: flex; margin: 45px auto;">
        <el-input placeholder="Please Enter a value" :value=sliderValue>
          <el-button slot="append">USD</el-button>
        </el-input>

        <el-button style="margin-left: 14px;" slot="append" type="warning" plain @click="dialogVisible = true">Donate</el-button>
      </div>
    </div>

    <el-dialog
      title="Appreciate your Support <3"
      :visible.sync="dialogVisible"
      width="300px"
      min-width=''
      :before-close="handleClose">
      <div>
        <div>
          <el-input style="width: 70%; margin-bottom: 30px" placeholder="Please Enter a value" :value=sliderValue>
            <el-button slot="append">USD</el-button>
          </el-input>
        </div>
        <div>
          <el-radio v-model="radio" label="1">Paypal</el-radio>
          <el-radio v-model="radio" label="2">Credit card</el-radio>
          <el-radio v-model="radio" label="3">One-time</el-radio>
          <el-radio v-model="radio" label="4">Monthly</el-radio>
          <el-radio v-model="radio" label="5">Yearly</el-radio>
        </div>
        <div>
          <el-checkbox style="margin-top: 14px;" v-model="checked">I want to be contacted regarding this donation</el-checkbox>
        </div>
        
        <el-button style="margin-top: 14px;" slot="append" type="warning" plain @click="dialogVisible = false">Donate</el-button>
      </div>
    </el-dialog>
    <!-- </section> -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      radio: '',
      checked: false,
      dialogVisible: false,
      value1: 0,
      sliderValue: 0,
      marks: {
        0: '$0',
        10: '$10',
        20: '$20',
        30: '$30',
        40: '$40',
        50: '$50'
      },
      formVisible: false,
      ruleForm: {
        first: "",
        last: "",
        email: "",
        phone: "",
        msg: ""
      },
      rules: {
        first: [
          { required: true, message: "Please Enter Your First Name", trigger: "blur" }
        ],
        last: [{ required: true, message: "Please Enter Your Last Name", trigger: "blur" }],
        email: [
          { required: true, message: "Please Enter Your Email Address", trigger: "blur" },
          {
            type: "email",
            message: "Invalid Email Address",
            trigger: ["blur", "change"]
          }
        ],
        phone: [{ required: true, message: "Please Enter Your Contact Phone Number", trigger: "blur" }],
        msg: [{ required: true, message: "Invalid Contact Phone Number", trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          window.console.log(this[formName])
          this.formVisible = false;
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      window.console.log('Form reseted')
      this.$refs.ruleForm.resetFields()
    },
    handleClose(done) {
        this.$confirm('Don\'t do it! You haven\'t donated yet!')
          .then((res) => {
            done();
          })
          .catch((res) => {});
      }
  }
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  background: rgba(0,0,0,0.7);
  height: calc(100vh - 163px);
}

.btn-box {
  margin-top: 40px;

  .btn {
    width: 100px;
  }
}

.pay {
  width: 70%;
  text-align: center;

  color: #5e5e5e;

  h3 {
    font-size: 36px;
  }

  .img-box {
    height: 300px;
    width: 100%;
    object-fit: cover;
    margin: 40px 0 0 0;
  }
  h4 {
    font-size: 24px;

    span {
      color: orangered;
      font-style: bold;
    }

    p {
      font-style: bold;
      font-size: 18px;
    }
  }
}

</style>
