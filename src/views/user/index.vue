<template>
  <div class="user">
    <el-card class="box-car">
      <!--卡片头部-->
      <template #header>
        <div class="card-header">
          <el-button type="primary"
                     icon="FolderAdd"
                    round
          >新增</el-button>
        </div>
      </template>
      <!--表格-->
      <el-table v-auto-height="{ bottom: 80 }" :data="tableData" style="width: 100%"  border v-loading="isLoading">
        <el-table-column label="序号" width="80" align="center" type="index"/>
        <el-table-column prop="nickName" label="用户昵称" width="120" align="center">
          <template #default="scope">
              <span style="color: #218868">{{ scope.row.nickName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="avatarUrl" label="头像" width="180" align="center">
          <template #default="scope">
            <div style="display: flex; align-items: center" >
              <el-popover
                  placement="right"
                  title=""
                  :width="500"
                  trigger="hover"
              >
                <!--放大图-->
                <el-image
                    style="width: 100%; height: 100%;"
                    loading="lazy"
                    fit="cover"
                    :src="scope.row.avatarUrl"
                />
                <!--原图-->
                <template #reference>
                  <el-image
                      loading="lazy"
                      fit="cover"
                      :src="scope.row.avatarUrl"
                      />
                </template>
              </el-popover>
<!--              <el-image-->
<!--                  loading="lazy"-->
<!--                  fit="cover"-->
<!--                  :src="scope.row.avatarUrl"-->
<!--                  />-->
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"/>
        <el-table-column prop="phoneNumber" label="手机号" align="center"/>
        <el-table-column prop="gender" label="性别" width="80" align="center">
          <template #default="scope">
            <el-tag
                :type="scope.row.gender === 1 ? 'success' : 'warning'"
                class="mx-1"
                effect="dark"
            >
              {{ scope.row.gender === 1 ? '男' : '女' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="70" align="center"/>
        <el-table-column prop="createdTime" label="创建时间" />
        <el-table-column prop="isActive" label="状态" width="80" align="center">
          <template #default="scope">
            <el-tag
                :type="scope.row.isActive === 1 ? 'success' : 'warning'"
                class="mx-1"
                effect="light"
            >
              {{ scope.row.isActive === 1 ? '激活' : '未激活' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isAdmin" label="管理员" width="80" align="center">
          <template #default="scope">
            <el-tag
                :type="scope.row.isAdmin === 1 ? 'success' : 'warning'"
                class="mx-1"
                effect="plain"
            >
              {{ scope.row.isAdmin === 1 ? '是' : '否' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="130" align="center">
          <template #default="scope">
            <el-button link type="warning" size="default" @click="handleUpdate(scope.row)"
            >修改</el-button
            >
            <el-button link type="danger" size="default" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!--分页-->
    <el-pagination
        class="mt-[6px]"
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :background="true"
        layout="prev, pager, next, jumper, ->, total, sizes"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { getAllUserInfoByPageApi } from '@/api/modules/user.js'
const tableData = ref([])
const pageNo = ref(1) // 当前页
const pageSize = ref(10) // 每一页条数
const total = ref(0) // 数据总数
const isLoading = ref(false)
// 获取表格数据(分页)
const getTableDataByPage = async () => {
  isLoading.value = true
  const res = await getAllUserInfoByPageApi(pageNo.value, pageSize.value)
  console.log(res.data)
  total.value = res.data.total
  tableData.value = res.data.records
  isLoading.value = false
}
// 组件挂载
onMounted(async () => {
  await getTableDataByPage()
})
// 改变当前页(可以直接写在组件上)
const handleCurrentChange = () => {
  getTableDataByPage()
}
// 改变每页条数(可以直接写在组件上)
const handleSizeChange = () => {
  getTableDataByPage()
}
// 修改
const handleUpdate = (row) => {
  console.log(row)
  alert('修改')
}
// 删除
const handleDelete = (row) => {
  console.log(row)
  alert('删除')
}

</script>
<style scoped lang="scss">
</style>
