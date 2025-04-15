<template>
    <el-dialog 
      :id="dialogId"
      v-model="registerSearchdepart"
      title="Registration Form"
      width="900"
      destroy-on-close
      center
    >
      <!-- Loading state handling -->
      <div v-if="loading" class="loading-overlay">
        <el-loading />
      </div>
  
      <el-form 
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        status-icon
      >
        <!-- Full Name Field -->
        <el-form-item 
          label="Full Name" 
          prop="fullName"
          required
        >
          <el-input 
            v-model="form.fullName"
            placeholder="Enter your full name here"
            autocomplete="on"
            clearable
          />
        </el-form-item>
  
        <!-- Email Field -->
        <el-form-item 
          label="Email" 
          prop="email"
          required
        >
          <el-input 
            v-model="form.email"
            placeholder="Enter your email address"
            autocomplete="on"
            type="email"
            clearable
          />
        </el-form-item>
  
        <!-- Password Field -->
        <el-form-item 
          label="Password" 
          prop="password"
          required
        >
          <el-input 
            v-model="form.password"
            placeholder="Create a strong password"
            show-password
            autocomplete="off"
            clearable
          />
        </el-form-item>
  
        <!-- Confirm Password Field -->
        <el-form-item 
          label="Confirm Password" 
          prop="confirmPassword"
          required
        >
          <el-input 
            v-model="form.confirmPassword"
            placeholder="Confirm your password"
            show-password
            autocomplete="off"
            clearable
          />
        </el-form-item>
  
        <!-- Captcha Field -->
        <el-form-item 
          label="Captcha" 
          prop="captcha"
          required
        >
          <div class="captcha-container">
            <el-input 
              v-model="form.captcha"
              placeholder="Enter captcha code"
              autocomplete="off"
              clearable
            />
            <!-- Add your captcha component here -->
          </div>
        </el-form-item>
  
        <!-- Form Submit Button -->
        <el-button 
          type="primary" 
          @click="submitForm(formRef)"
          :loading="loading"
          class="submit-button"
        >
          Register
        </el-button>
      </el-form>
  
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="resetForm(formRef)">Reset</el-button>
          <el-button @click="registerSearchdepart = false">Cancel</el-button>
          <el-button 
            type="primary" 
            @click="submitForm(formRef)"
            :loading="loading"
          >
            {{ loading ? 'Registering...' : 'Register' }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const formRef = ref()
  const loading = ref(false)
  
  const form = reactive({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    captcha: ''
  })
  
  const rules = reactive({
    fullName: [
      { required: true, message: 'Please enter your full name', trigger: 'blur' },
      { min: 2, max: 50, message: 'Name must be between 2 and 50 characters', trigger: 'blur' }
    ],
    email: [
      { required: true, message: 'Please enter your email address', trigger: 'blur' },
      { 
        type: 'email', 
        message: 'Please enter a valid email address', 
        trigger: ['blur', 'change'] 
      }
    ],
    password: [
      { required: true, message: 'Please create a password', trigger: 'blur' },
      { 
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'Password must be at least 8 characters with uppercase, lowercase, number and special character',
        trigger: 'blur'
      }
    ],
    confirmPassword: [
      { required: true, message: 'Please confirm your password', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (!value) {
            callback(new Error('Please confirm your password'))
          } else if (value !== form.password) {
            callback(new Error('Passwords don\'t match'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ],
    captcha: [
      { required: true, message: 'Please enter the captcha code', trigger: 'blur' },
      { min: 4, max: 6, message: 'Invalid captcha length', trigger: 'blur' }
    ]
  })
  
  async function submitForm(formRef) {
    loading.value = true
    
    try {
      await formRef.validate(async (valid) => {
        if (valid) {
          // Add your registration logic here
          console.log('Registration successful:', form)
          ElMessage.success('Registration successful!')
          registerSearchdepart.value = false
        }
      })
    } catch (error) {
      ElMessage.error('Registration failed')
      console.error('Registration error:', error)
    } finally {
      loading.value = false
    }
  }
  
  function resetForm(formRef) {
    formRef.resetFields()
  }
  </script>
  
  <style scoped>
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000;
  }
  
  .captcha-container {
    display: flex;
    gap: 10px;
  }
  
  .submit-button {
    width: 100%;
    margin-top: 20px;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: space-between;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  </style>