<template>
  <div>
    <article>
      <section>
        <el-container>
          
          <el-row class="content">
            <!-- <el-aside class="aside" width="100%">
            <ul>
              <li>
                <a @click="handleScroll('about')">About-me</a>
              </li>
              <li>
                <a  @click="handleScroll('Education')">Education</a>
              </li>
              <li>
                <a @click="handleScroll('project')">Project</a>
              </li>
              <li>
                <a @click="handleScroll('experience')">Work Experience</a>
              </li>
            </ul>
          </el-aside> -->
            <el-col :span="4">
              <el-aside class="aside" width="100%">
                <ul>
                  <li v-for="(items,i) in navList" :key="i" @click="activeFun(items)">
                    <a :class="{active:items.isActive}" @click="handleScroll(items.value)">
                      {{items.text}}
                    </a>
                  </li>
                  <!-- <li>
                    <a @click="handleScroll('about')">About-me</a>
                  </li>
                  <li>
                    <a  @click="handleScroll('Education')">Education</a>
                  </li>
                  <li>
                    <a @click="handleScroll('project')">Project</a>
                  </li>
                  <li>
                    <a @click="handleScroll('experience')">Work Experience</a>
                  </li> -->
                </ul>
              </el-aside>
            </el-col>
            <el-col :offset="4" :span="20">
              <el-main class="main">
                <!-- about -->
                <div class="about" ref='about'>
                  <h1 id="about">
                    About Me
                    <i class="fas fa-user-circle"></i>
                  </h1>
                  <img src="../assets/photos/Main.jpg" alt />
                  <span>My name is Lin Fu. Also known as Flynn and ZenithZ.</span>
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
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <!-- <ul>
                      <li>
                        Graduate of
                        <strong>Bachelor of Computer Science and Technology</strong> majoring
                        <strong>Computer Science</strong> and
                        <strong>Information Systems</strong> from @
                        <strong>The University of Sydney</strong>.
                      </li>
                      <li>
                        First year
                        <strong>Master of Information Technology</strong> specialising
                        <strong>Human Computer Interaction</strong> at @
                        <strong>The University of Melbourne</strong>.
                      </li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                    </ul>-->
                  </span>
                </div>

                <!-- project -->
                <div class="project">
                  <h1 id="project">Projects</h1>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/Unimelb.jpg" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>项目名称</p>
                            <span>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/Unimelb.jpg" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>项目名称</p>
                            <span>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/Unimelb.jpg" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>项目名称</p>
                            <span>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/Unimelb.jpg" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>项目名称</p>
                            <span>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/Unimelb.jpg" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>项目名称</p>
                            <span>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  
                  <!-- <div class="project-card">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h2>项目名称</h2>
                      </div>
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />
                      <div style="padding: 14px;">
                        <h3>项目描述</h3>
                        <span>描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
                      </div>
                    </el-card>
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h2>项目名称</h2>
                      </div>
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />

                      <div style="padding: 14px;">
                        <h3>项目描述</h3>
                        <span>描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
                      </div>
                    </el-card>
                  </div>
                  <div class="project-card">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h2>项目名称</h2>
                      </div>
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />
                      <div style="padding: 14px;">
                        <h3>项目描述</h3>
                        <span>描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
                      </div>
                    </el-card>
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h2>项目名称</h2>
                      </div>
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />

                      <div style="padding: 14px;">
                        <h3>项目描述</h3>
                        <span>描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</span>
                      </div>
                    </el-card>
                  </div> -->
                </div>

                <!-- WorKExperience -->
                <div class="experience">
                  <h1 id="experience">Work Experience</h1>
                  <span>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <!-- <ul>
                      <li>
                        <strong>Academic Tutor</strong> for
                        <strong>Human Computer Interaction</strong> at @
                        <strong>USYD</strong>
                      </li>
                      <li>
                        <strong>PoCT Customer and Product Support Officer</strong> at @
                        <strong>NSW Health Pathology</strong>
                      </li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                    </ul> -->
                  </span>
                </div>
              </el-main>
            </el-col>
          </el-row>
        </el-container>
        <!-- <h1>
          About Me
          <i class="fas fa-user-circle"></i>
        </h1>
        <br />
        <img src="@/assets/under_construction.png" alt />
        <span>
          My name is Lin Fu. Also known as Flynn and ZenithZ.
          <br />
          <br />
          <h4>
            <b>Education</b>
          </h4>
          <ul>
            <li>
              Graduate of
              <b>Bachelor of Computer Science and Technology</b> majoring
              <b>Computer Science</b> and
              <b>Information Systems</b> from @
              <b>The University of Sydney</b>.
            </li>
            <li>
              First year
              <b>Master of Information Technology</b> specialising
              <b>Human Computer Interaction</b> at @
              <b>The University of Melbourne</b>.
            </li>
          </ul>
          <h4>
            <b>Work Experiences</b>
          </h4>
          <ul>
            <li>
              <b>Academic Tutor</b> for
              <b>Human Computer Interaction</b> at @
              <b>USYD</b>
            </li>
            <li>
              <b>PoCT Customer and Product Support Officer</b> at @
              <b>NSW Health Pathology</b>
            </li>
            <li>tbd</li>
          </ul>
          <h4>
            <b>Projects</b>
          </h4>
          <ul>
            <li>tbd</li>
          </ul>
        </span>-->
      </section>
    </article>

    <article class="main-image">
      <section class="container">
        <h1>Welcome to ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('ZenithZ')">Check it out</button>
      </section>
    </article>

    <!-- <article id="ZenithZ" class="white-section">
      <section class="container">
        <h3>You might know me as ZenithZ</h3>
        <span>blah blah blah</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Flynn')"> Next section</button>
      </section>
    </article>

    <article id="Flynn" class="blue-section">
      <section class="container">
        <h2>You might also know me as Flynn</h2>
        <h4>blah blah blah</h4>
        <button class="btn btn-xl btn-dark" @click="scrollTo('projects')"> Next section</button>
      </section>
    </article>

    <article id="projects" class="white-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project,index) in recentProjects" :key="index">
            <a href="" class="protfolio-item">
              <span class="caption">
                <span class="caption-content">
                  <h2> {{ project.title }} </h2>
                  <p class="mb-0"> {{ project.description }} </p>
                </span>
              </span>
              <img class="img-fluid" :src="require('../assets/'+project.img)"> 
            </a>  
          </div>
        </div>
      </section>
    </article>

    <article id="contact" class="white-section">
      <section class="container">
        <h3>Enquires</h3>
        <span>form tobe constructed</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Home')"> Back to top</button>
      </section>
    </article>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    navList: [
      {text: 'About me', isActive: true, value: 'about', key: 0},
      {text: 'Education', isActive: false, value: 'Education', key: 1},
      {text: 'Project', isActive: false, value: 'project', key: 2},
      {text: 'Work Experience', isActive: false, value: 'experience', key: 3}
      // {text: 'Work Experience', isActive: false, value: 'experience', top: document.getElementById('experience').offsetTop, key: 3}
    ]
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 点击侧边栏控制叶页面滚动
    handleScroll(item) {
      if (item === 'about' || item === 'project' || item === 'Education' || item === 'experience') {
        var items = document.getElementById(item);
        window.scrollTo({
          top: items.offsetTop,
          behavior:'smooth'
        })
      }
      // this.navList.map((item) => {
      //   item.top = document.getElementById('about').offsetTop
      // })
      let elementTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
      this.navList.find((item, i) => {
        if (elementTop >= document.getElementById(item.value).offsetTop) {
          this.navList.forEach(function(obj){
            obj.isActive = false;
          });
          this.navList[i].isActive = true
        } else if (elementTop <= document.getElementById('Education').offsetTop) {
          this.navList = [
            {text: 'About me', isActive: true, value: 'about', key: 0},
            {text: 'Education', isActive: false, value: 'Education', key: 1},
            {text: 'Project', isActive: false, value: 'project', key: 2},
            {text: 'Work Experience', isActive: false, value: 'experience', key: 3}
          ]
        }
      })
    },
    // 点击侧边栏
    activeFun(data) {
      this.navList.forEach(function(obj){
        obj.isActive = false;
      });
      data.isActive = !data.isActive;
    },
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: left;
  // padding-top: 8%;
  // padding-left: 5%;

  .content {
    background: #efefef;
    // margin-top: 86px;
    width: 100%;
    min-width: 900px;
    .aside {
      padding-top: 70px;
      position: fixed;
      z-index: 1;
      max-width: 200px;
      transition: 0.5s;
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
      margin-top: 20px;
      border-top-left-radius: 30px;
      background: #fff;
      min-height: calc(100vh - 143px);

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
        .collapse-box {
          margin-bottom: 20px;
          .edu-header .edu-header-title {
            width: 100%;
            display: flex;
            .img {
              img {
                width: 100px;
                margin: 10px 20px;
              }
            }
            .title {
            }
          }
        }
        
      }

      .project {
        .project-item {
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

  h1 {
    font-weight: bold;
    // text-decoration: underline;
    // margin-bottom: 28px;
    line-height: 56px;
    color: #000000;

    i {
      font-size: 2.25rem;
    }
  }

  span {
    color: #c0c0c0;
  }

  h4 {
    color: #696969;
  }

  li {
    padding-bottom: 10px;
  }
}
</style>