<template>
  <el-header class="headers"  ref="headers" :height="heights" >
      <!-- <img src="../assets/logo.png" alt="" class="logos"> -->
      <div class="logos">
        XXXX开发平台
      </div>
      <Silder ref="silder" ></Silder>
      <div class="header_user">
          <el-dropdown trigger="click"  @command="handleCommand">
          <span class="el-dropdown-link">
            <span >{{name}}</span>
             <el-avatar :src="userUrl"></el-avatar>
             
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus" command="user">用户信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus" command="Logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </el-header>
</template>

<script>
import Silder from './Silder'
export default {
    name:"headers",
    data() {
      return {
        userUrl:require("../assets/logo.png"),
        name:"",
        heights: `60px`
      }
     
    },
    components:{
      Silder
    },
    mounted() {
      this.name=JSON.parse(localStorage.getItem("ms_userdata")).name
    },
    computed:{
      
    },
    methods: {
      //点击用户中西
       handleCommand(command) {
        if(command=="user"){
        }else if(command=="Logout"){
          this.$router.push('login')
        }
      },
   
    },
}
</script>

<style lang="scss" >
.headers{
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: height 0.3s linear;
  .logos{
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: rgb(221, 220, 220);
    z-index: 101;
  }
  .header_user{
    min-width: 50px;
    height: 60px;
    display: flex;
    align-items: center;
    .el-dropdown{
      .el-dropdown-link{
        cursor: pointer;
        display: flex;
        align-items: center;
        span{
          margin-left: 8px;
          color: #fff;
        }
      }
      .el-avatar{
        // background: transparent;
      }
    }
  }
}
</style>