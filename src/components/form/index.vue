<template>
    <div>
        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名" prop="userName">
                <k-input v-model="model.userName"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="password">
                <k-input v-model="model.password" type="password"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="onLogin">登录</button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import KInput from '@/components/form/KInput.vue'
import KForm from '@/components/form/KForm.vue'
import KFormItem from '@/components/form/KFormItem.vue'
@Component({
    components: { KInput, KFormItem, KForm }
})
export default class Index extends Vue {
    model = {
        userName: 'tom',
        password: ''
    }
    rules = {
        userName: [{ required: true, message: '用户名必填' }],
        password: [{ required: true, message: '密码必填' }]
    }
    onLogin() {
        ;(this.$refs.loginForm as any).validate((isValid: boolean) => {
            if (isValid) {
                console.log('成功')
            } else {
                console.log('错误')
            }
        })
    }
}
</script>
