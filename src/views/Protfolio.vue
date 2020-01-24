<template>
  <div>
    <article>
      <section>
        <el-container>
          
          <el-row class="content">
            <el-col :span="4">
              <el-aside class="aside" width="16.7%">
                <ul>
                  <li v-for="(items,i) in navList" :key="i" @click="activeFun(items)">
                    <a :class="{active:items.isActive}"  @click="handleScroll(items.value)">
                      {{items.text}}
                    </a>
                  </li>
                </ul>
              </el-aside>
            </el-col>
            <el-col :offset="4" :span="20">
              <el-main class="main">
                <!-- about -->
                <div class="about" ref='about'>
                  <h1 id="about">
                    About Me
                    <!-- <i class="fas fa-user-circle"></i> -->
                  </h1>
                  <img src="../assets/photos/Main.jpg" alt />
                  <span>My name is Lin Fu. Also known as Flynn and ZenithZ.<br>
                  I am a graduate of @Auckland Grammar School.<br>
                  Currently in my honours year in my Bachelor's degree majoring Computer Sciecne and Information Systems @The University of Sydney.
                  </span>
                </div>

                <!-- Education -->
                <div class="Education">
                  <h1 id="Education">Education</h1>
                  <span>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/usyd.png" alt="Usyd" />
                              </div>
                              <div class="title">
                                <p>The University Of Sydney</p>
                                <p>Bachelor of Computer Science and Technology (Honours)</p>
                                <p>March. 2017 - March.2021 (expected)</p>
                              </div>
                            </div>

                            <div><span>Courses done</span></div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                  </span>
                </div>

                <!-- project -->
                <div class="project">
                  <h1 id="project">Projects</h1>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/orange-yellow.png" alt="ZenithZ" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>Personal Site</p>
                            <span>YES It is the site you are on right now :P</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/NHP.png" alt="SepsisUX" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>Sepsis UX</p>
                            <span>README TBD</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/tbd.png" alt="" href="https://sepsis-ux.herokuapp.com/">
                        <div class="item-img-box">
                          <div>
                            <p>TBD</p>
                            <span>TBD</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
          
                </div>

                <!-- WorKExperience -->
                <div class="experience">
                  <h1 id="experience">Work Experience</h1>
                  <span>
                    <el-collapse accordion class="collapse-box" v-for="(item, i) in curExperList" :key=i>
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                 <img src='@/assets/tbd.png' alt="nsw" />
                              </div>
                              <div class="title">
                                <p><strong>{{item.title}}</strong></p>
                                <p><strong>{{item.describe}}</strong></p>
                                <p>{{item.time}}</p>
                              </div>
                            </div>

                            <div><span>Expand Details</span></div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>

                    <!-- <p v-show="listVisible" class="check-more" @click="checkMore()">View {{moreCount}} more ></p> -->
                  </span>
                </div>

                <div class="cv" ref='cv'>
                  <h1 id="cv">
                    CV
                  </h1>
                  <span>For my full academic CV, please click 
                    <a href="Resume_LinFU _2020.pdf" target="_blank" type="application/pdf">here.</a>
                  </span>
                </div>

                <div class="enquiry" ref='enquiry'>
                  <h1 id="enquiry">
                    Enquiry
                  </h1>
                  <span>If you are willing to submit an enquiry, please click 
                    <a href="/Enquiry">here</a> in order to navigate to the Enquiry page.
                  </span>
                </div>

              </el-main>
            </el-col>
          </el-row>
        </el-container>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,     // navigation
    moreCount: 3,    // default view 3 more.
    listVisible: false,     // if displaying view more.
    listCount: 2,     // default displaying 3 maximum.
    curExperList: [],     // list view.
    navList: [
      {text: 'About me', isActive: true, value: 'about', key: 0},
      {text: 'Education', isActive: false, value: 'Education', key: 1},
      {text: 'Project', isActive: false, value: 'project', key: 2},
      {text: 'Work Experience', isActive: false, value: 'experience', key: 3},
      {text: 'CV', isActive: false, value: 'cv', key: 4},
      {text: 'Enquiry', isActive: false, value: 'enquiry', key: 5}
    ],

    experienceList: [
      {
        img: '@/assets/NHP.png',
        title: 'PoCT Customer & Product Support Officer',
        describe: 'Full Time - Temporary',
        time: 'Jan 2020 - Apr 2020(expected)',
        list: [
          '1',
          '2',
          '3'
        ]
      },
      {
        img: '@/assets/usyd.png',
        title: 'Academic Tutor',
        describe: 'Casual Academic Staff',
        time: 'July 2019 - Dec 2019',
        list: [
          '1',
          '2',
          '3'
        ]
      },
      {
        img: '@/assets/tbd.png',
        title: 'Academic Tutor',
        describe: 'Part Time',
        time: 'Oct 2018 - Present',
        list: [
          '1',
          '2',
          '3'
        ]
      },
      {
        img: '@/assets/tbd.png',
        title: 'title3',
        describe: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3',
        time: 'yyyyyyyyyyyyyyyyyyy3',
        list: [
          'tttttttttttttttttttttttt3',
          'uuuuuuuuuuuuuuuuuuuuuuuu3',
          'iiiiiiiiiiiiiiiiiiiiiiii3'
        ]
      },
      {
        img: '@/assets/tbd.png',
        title: 'title4',
        describe: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx4',
        time: 'yyyyyyyyyyyyyyyyyyy4',
        list: [
          'tttttttttttttttttttttttt4',
          'uuuuuuuuuuuuuuuuuuuuuuuu4',
          'iiiiiiiiiiiiiiiiiiiiiiii4'
        ]
      }
    ]
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.console.log(this.count)
    if (this.experienceList.length > this.moreCount) {
      this.listVisible = true;
      this.curExperList = this.experienceList.slice(0, this.moreCount)
      this.experienceList.splice(0, this.moreCount)
      window.console.log(this.curExperList)
      window.console.log(this.experienceList)
      if (this.experienceList.length < this.moreCount) {
        this.moreCount = this.experienceList.length
      }
      if (this.experienceList.length === 0) {
        this.listVisible = false
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // leftside scroll
    handleScroll(item) {
      if (item === 'about' 
          || item === 'project' 
          || item === 'Education' 
          || item === 'experience'
          || item === 'cv'
          || item == 'enquiry') {
        var items = document.getElementById(item);
        window.console.log('items.offsetTop', items.offsetTop)
        window.scrollTo({
          top: items.offsetTop + 1,
          behavior:'smooth'
        })
      }
      let elementTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
      this.navList.find((item, i) => {
        if (elementTop >= (document.getElementById(item.value).offsetTop)) {
          this.navList.forEach(function(obj){
            obj.isActive = false;
          });
          this.navList[i].isActive = true
        } else if (elementTop <= document.getElementById('Education').offsetTop) {
          this.navList = [
            {text: 'About me', isActive: true, value: 'about', key: 0},
            {text: 'Education', isActive: false, value: 'Education', key: 1},
            {text: 'Project', isActive: false, value: 'project', key: 2},
            {text: 'Work Experience', isActive: false, value: 'experience', key: 3},
            {text: 'CV', isActive: false, value: 'cv', key: 4},
            {text: 'Enquiry', isActive: false, value: 'enquiry', key: 5}
          ]
        }
      })
    },
    // click handling left nav
    activeFun(data) {
      this.navList.forEach(function(obj){
        obj.isActive = false;
      });
      data.isActive = !data.isActive;
    },

    // View more
    checkMore () {
      window.console.log('1111111111111111')
      if ((this.experienceList.length >= this.moreCount) && (this.experienceList.length !== 0) ) {
        this.listVisible = true;
        this.curExperList = this.curExperList.concat(this.experienceList.slice(0, this.moreCount))
        this.experienceList.splice(0, this.moreCount)
        if (this.experienceList.length < this.moreCount) {
          this.moreCount = this.experienceList.length
        }
        if (this.experienceList.length === 0) {
          this.listVisible = false
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: left;

  .content {
    background: #E29C45;
    width: 100%;
    min-width: 900px;
    .aside {
      color: #080808;
      padding-top: 70px;
      position: fixed;
      z-index: 1;
      max-width: 200px;
      ul {
        li {
          border-bottom: 1px solid #333;
          padding: 5px 5px 5px 16px;
          cursor: pointer;
          &:first-child {
            border-top: 1px solid #333333;
          }
          &:hover {
            background: #c1bfbf;
            color: #fff;
          }
          .active {
            font-weight: bold;
          }
        }
      }
    }

    .main {
      margin-top: 30px;
      border-top-left-radius: 30px;
      background: #080808;
      min-height: calc(100vh - 143px);
      margin-bottom: 30px;
      border-bottom-left-radius: 30px;
      margin-right: -1px;

      .about {
        height: 200px;

        span {
          display: inline-block;
          float: left;
          width: calc(100% - 110px);
          word-break: break-all;
        }
        img {
          float: right;
          width: 100px;
        }
      }

      .Education, .experience {
        .check-more {
          text-align: center;
          cursor: pointer;
          color: cornflowerblue;
        }
        .collapse-box {
          margin-bottom: 20px;
          .edu-header .edu-header-title {
            width: 100%;
            display: flex;
            .img {
              img {
                width: 120px;
                margin-right: 10px;
                object-fit: cover;
              }
            }
            .title {
              p {
                padding-top: 10px;
                display:block;
                justify-content: center;
                line-height: 18px;
              }
              span {
                display: block;
              }
            }
          }
        }

        
      }

      .project {
        .project-item {
          border: 10px solid #909090;
          text-align: center;
          height: 200px;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 0 8px rgba(136, 136, 136, 0);
          transition: 0.8s;
          margin: 10px 0;
          &:hover {
            box-shadow: 0 0 8px rgba(136, 136, 136, 1);
          }
          img {
            width: 100%;
          }
          .item-img-box {
            background-color: rgba(0, 0, 0, 0.4);
            position: relative;
            width: 100%;
            height: 100%;
            top: -205px;
            opacity: 0;
            transition: 0.8s;
            &:hover {
              opacity: 1;
            }
            div {
              position: absolute;
              bottom: 10px;
              width: 88%;
              left: 6%;
              p {
                font-weight: bold;
                color: #000000;
              }
            }
          }
        }
        .project-card {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          .clearfix:before,
          .clearfix:after {
            display: table;
            content: "";
          }
          .clearfix:after {
            clear: both;
          }

          .box-card {
            max-width: 460px;

            .image {
              width: 100%;
              display: block;
              object-fit: cover;
              // height: 280px;
            }

            &:first-child {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h1 {
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 28px;
    line-height: 56px;
    color: #909090;

    i {
      font-size: 2.25rem;
    }
  }

  span {
    color: #808080;
  }

  h4 {
    color: #696969;
  }

  li {
    padding-bottom: 10px;
  }
}
</style>