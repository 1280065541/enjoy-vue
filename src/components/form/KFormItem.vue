<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject } from 'vue-property-decorator'
import Schema, { ErrorList } from 'async-validator'
@Component({
    name: 'KFormItem',
    components: {}
})
export default class KFormItem extends Vue {
    @Prop({ default: '' }) label!: string
    @Prop() prop!: string
    @Inject('form')
    form!: any
    errorMessage = ''

    validate() {
        //1、获取校验规则
        const rules = this.form.rules[this.prop]
        //2、获取数据
        const value = this.form.model[this.prop]
        //3、执行校验
        const desc = {
            [this.prop]: rules
        }
        const schema = new Schema(desc)
        // 参数1是值，返回的是一个Promise对象
        return schema.validate(
            { [this.prop]: value },
            {},
            (errors: ErrorList) => {
                if (errors) {
                    //有错
                    this.errorMessage = errors[0].message
                } else {
                    //没错
                    this.errorMessage = ''
                }
            }
        )
    }

    mounted() {
        //监听校验事件、并执行监听
        this.$on('validate', () => {
            this.validate()
        })
    }
}
</script>
