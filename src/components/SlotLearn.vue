<template>
    <div>
        <!-- 匿名插槽，父组件传递后放置的位置 -->
        <slot>aaa</slot>
        <!-- 具名插槽，用插槽名做参数 -->
        <slot name="content"></slot>
        <!-- 作用域插槽， -->
        <slot name="scope" myName="yanlu" text="正在学习"></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
    components: {}
})
export default class SlotLearn extends Vue {
    @Prop({ default: '' }) message?: string
}
</script>
