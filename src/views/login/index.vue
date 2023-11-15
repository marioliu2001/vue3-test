<template>
  <div class="login dark:bg-[url('@/assets/images/login-bg-dark.webp')] bg-[url('@/assets/images/login-bg.jpg')]">
    <el-row>
      <!--占位-->
      <el-col :span="12" :xs="0" :sm="0" :md="12" :xl="8"></el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="12" :xl="8">
        <div class="login-form">
          <h2>阿卡姆疯人院后台管理系统</h2>
          <el-form
              ref="loginFormRef"
              label-position="top"
              label-width="60px"
              :rules="rules"
              :model="loginForm"
              :size="formSize"
              status-icon
          >
            <el-form-item label="用户名" prop="username">
              <el-input :prefix-icon="User"
                        placeholder="请输入用户名"
                        v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input :prefix-icon="Lock"
                        type="password"
                        placeholder="请输入密码"
                        show-password v-model="loginForm.password" />
            </el-form-item>
            <div class="login-button flex">
              <el-button
                  color="#fff"
                  icon="CircleClose"
                  round
                  @click="resetForm(loginFormRef)">重置</el-button>
              <el-button
                  color="#4db6ac"
                  icon="UserFilled"
                  round
                  :loading-icon="Eleme"
                  :loading="isLoading"
                  @click="submitForm(loginFormRef)">登录</el-button>
            </div>
          </el-form>
        </div>
      </el-col>
      <!--占位-->
      <el-col :xl="8"></el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { User, Lock, Eleme } from '@element-plus/icons-vue'
import useThemeStore from '@/stores/modules/theme.js'
import { useLoginStore } from '@/stores/modules/login.js'
const themeStore = useThemeStore()
const loginStore = useLoginStore()

const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
/** 组件在页面挂载（渲染）完毕时触发 */
onMounted(() => {
  /** 组件渲染完毕就设置html类名 */
  document.documentElement.className = themeStore.htmlModeClass
})
const formSize = ref('large')
const loginFormRef = ref()
const isLoading = ref()
// 登录校验
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

// 提交表单
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 校验通过去登录
      isLoading.value = true
      loginStore.doLogin(loginForm).finally(() => {
        // 别管成功还是失败都关闭loading
        isLoading.value = false
      })
    } else {
      isLoading.value = false
      console.log('error submit!', fields)
    }
  })
}
// 清空表单
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  //background-image: url("@/assets/images/login-bg.jpg");
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
