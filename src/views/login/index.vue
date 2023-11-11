<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0">占位</el-col>
      <el-col :span="12" :xs="24">
        <div class="login-form">
          <h2>阿卡姆疯人院后台管理系统</h2>
          <el-form
              label-position="left"
              label-width="60px"
              :model="loginForm"
          >
            <el-form-item label="用户名">
              <el-input :prefix-icon="User" v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input :prefix-icon="Lock" v-model="loginForm.password" />
            </el-form-item>
            <div class="login-button">
              <el-button type="primary">登录</el-button>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const loginForm = ref({
  username: 'admin',
  password: 'admin'
})
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/login-bg.jpg");
  background-size: cover;

  .login-form{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    h2{
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
      font-size: 40px;
    }
    .el-form{
      width: 80%;
      margin: 0 auto;
      padding: 50px;
      //background-color: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      box-shadow: 0 0 10px #fff;

      .el-form-item{
        margin-bottom: 30px;
      }
      .el-button{
        width: 100%;
      }
    }

  }
}
</style>
