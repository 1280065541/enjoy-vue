<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Provide } from 'vue-property-decorator'
@Component({
    components: {}
    // provide() {
    //     return {
    //         form: this //传递form实例给后代，比如formItem校验
    //     }
    // }
})
export default class KForm extends Vue {
    @Prop({ required: true }) model!: Record<string, any>
    @Prop() rules?: Record<string, any>
    //传递form实例给后代，比如formItem校验
    @Provide('form')
    form = this

    validate(cb: Function) {
        //返回的Promise数组
        const tasks = this.$children
            .filter((item: any) => item.prop)
            .map((item: any) => item.validate())
        console.log(tasks)
        //所有任务必须校验成功才走then
        Promise.all(tasks)
            .then(() => {
                cb(true)
            })
            .catch(() => {
                cb(false)
            })
    }
}
</script>
