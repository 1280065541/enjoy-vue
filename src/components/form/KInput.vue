<template>
    <!-- 自定义组件要实现v-model，必须实现:value,@input -->
    <!-- $attrs存储的是props之外的部分 -->
    <input v-bind="$attrs" :value="value" @input="onInput" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
    components: {},
    inheritAttrs: false //避免顶层容器继承属性
})
export default class SlotLearn extends Vue {
    @Prop({ default: '' }) value?: string

    onInput(e: any) {
        // 通知父组件数据发生变化
        this.$emit('input', e.target.value)
        // 通知formitem校验
        this.$parent.$emit('validate')
    }
}
</script>
