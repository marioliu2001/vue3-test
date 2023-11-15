<template>
  <div class="i-form">
    <el-form
        :ref="formRef"
        :model="model"
        :rules="rules"
        :inline="inline"
        :label-width="labelWidth"
        :label-position="labelPosition"
        :style="formWidth"
    >
      <slot name="head" />
      <el-form-item
          v-for="(item, index) in elem"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :label-width="item.labelWidth"
          :style="item.width"
      >
        <!-- 输入框 -->
        <el-input
            v-if="!item.element"
            clearable
            :type="item.type"
            v-model="model[item.prop]"
            :placeholder="item.placeholder"
            :size="item.size"
            :disabled="item.disabled"
            :readonly="item.readonly"
            :icon="item.icon"
            :prefix="item.prefix"
            :suffix="item.suffix"
            :number="item.number"
            :rows="item.rows"
            :autosize="item.autosize"
            :style="item.elemWidth"
        />
        <!-- 数字输入框 -->
        <el-input-number
            v-if="item.element === 'number'"
            :max="item.max"
            :min="item.min"
            v-model="model[item.prop]"
            :placeholder="item.placeholder"
            :size="item.size"
            :disabled="item.disabled"
            :style="item.elemWidth"
        />
        <!-- 下拉框选择器 -->
        <el-select
            v-if="item.element === 'select'"
            clearable
            v-model="model[item.prop]"
            :placeholder="item.placeholder"
            :size="item.size"
            :disabled="item.disabled"
            :filterable="item.filterable"
            :multiple="item.multiple"
            :style="item.elemWidth"
            @on-change="(value) => $emit(`on-${item.events}`, value)"
        >
          <el-option
              v-for="(opt, index) in item.option"
              :key="index"
              :label="opt.label"
              :value="opt.value"
              :disabled="opt.disabled"
          >{{ opt.label }}</el-option
          >
        </el-select>
        <!-- 级联选择 -->
        <el-cascader
            v-if="item.element === 'cascader'"
            :data="item.data"
            :placeholder="item.placeholder"
            v-model="model[item.prop]"
            :disabled="item.disabled"
            :filterable="item.filterable"
        />
        <!-- 日期选择器 -->
        <el-date-picker
            v-if="item.element === 'date'"
            clearable
            :type="item.type"
            v-model="model[item.prop]"
            :options="item.options"
            :format="item.format"
            :placeholder="item.placeholder"
            :size="item.size"
            :disabled="item.disabled"
            :style="item.elemWidth"
        />
        <!-- 时间选择器 -->
        <el-time-picker
            v-if="item.element === 'time'"
            clearable
            :type="item.type"
            v-model="model[item.prop]"
            :format="item.format"
            :placeholder="item.placeholder"
            :size="item.size"
            :disabled="item.disabled"
            :style="item.elemWidth"
        />
        <!-- 单选框 -->
        <el-radio-group
            v-if="item.element === 'radio'"
            v-model="model[item.prop]"
            :label="item.label"
            :size="item.size"
        >
          <el-radio
              v-for="(opt, index) in item.option"
              :key="index"
              :label="opt.value"
              :size="item.size"
              :fill="item.fill"
              :disabled="opt.disabled"
          >{{ opt.label }}</el-radio
          >
        </el-radio-group>
        <!-- 多选框 -->
        <el-checkbox
            v-if="item.element === 'checkbox'"
            v-model="model[item.prop]"
            :label="item.value"
            :size="item.size"
            :disabled="item.disabled"
        />
      </el-form-item>
      <!-- 插槽 -->
      <el-form-item>
        <slot />
      </el-form-item>
      <el-form-item :label-width="btnLabelWidth">
        <el-button
            v-if="submit"
            :type="okType"
            :icon="okIcon"
            :label="label"
            :long="btnLong"
            :loading="btnLoading"
            @click="handleSubmit('form')"
        >
          <el-icon><Search /></el-icon>
          {{ submitText }}</el-button
        >
        <el-button
            v-if="button"
            :type="btnType2"
            :icon="btnIcon2"
            :long="btnLong2"
            @click="handleClick"
            class="button"
        >{{ buttonText }}</el-button
        >
        <el-button
            v-if="reset"
            :type="btnType"
            :icon="btnIcon"
            :long="btnLong"
            @click="handleReset"
            class="button"
        >{{ resetText }}</el-button
        >

        <slot name="footer"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, defineProps, defineEmits } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Delete, Edit } from '@element-plus/icons'

// 通过defineProps获取props
const props = defineProps({
  elem: Array,
  model: Object,
  formRef: Object,
  rules: Object,
  width: Number,
  labelWidth: { type: [Number, String], default: '120px' },
  labelPosition: {
    validator (value) {
      const validList = ['left', 'right', 'top']
      return validList.includes(value)
    },
    default: 'right'
  },
  inline: Boolean,
  loading: Boolean,
  btnLabelWidth: Number,
  submit: Boolean,
  reset: Boolean,
  button: { type: Boolean, default: true },
  submitText: { type: String, default: 'Submit' },
  resetText: { type: String, default: 'Reset' },
  buttonText: { type: String, default: 'Button' },
  okType: { type: String, default: 'primary' },
  btnType: String,
  btnLong: Boolean,
  okIcon: String,
  btnIcon: String,
  btnLoading: Boolean,
  btnType2: { type: String, default: 'primary' },
  btnLong2: Boolean,
  btnIcon2: String
})

// 通过defineEmits获取emit函数
const emit = defineEmits()

// 定义响应式数据
const state = reactive({})

// 定义组件方法
const handleSubmit = () => {
  emit('onSuccess')
}

const handleReset = () => {
  emit('onReset')
}

const handleClick = () => {
  emit('onClick')
}

// 在组件加载时执行的逻辑
onMounted(() => {
  // 可以在这里执行一些初始化操作
})
</script>

<style lang="scss" scoped>
</style>
