<template>
    <div id="app">
        <!-- <Example></Example> -->
        <!-- <router-view /> -->
        <!-- 组件通信学习 -->
        <helloworld-1 :message="message"></helloworld-1>
        <helloworld-2 :message="message"></helloworld-2>
        <!-- 组件插槽学习 -->
        <!-- 匿名插槽 -->
        <slot-learn>
            <template v-slot:default><p>I am learning Vue slot!</p></template>
        </slot-learn>
        <!-- 具名插槽 -->
        <slot-learn>
            <template v-slot:content>我是具名插槽</template>
        </slot-learn>
        <!-- 作用域插槽 -->
        <slot-learn>
            <template v-slot:scope="{ myName, text }">
                {{ myName }} - {{ text }}
            </template>
        </slot-learn>
        <Index></Index>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Helloworld1 from '@/components/Helloworld1.vue'
import Helloworld2 from '@/components/Helloworld2.vue'
import SlotLearn from '@/components/SlotLearn.vue'
import Example from '@/components/charts/Example.vue'
import Index from '@/components/Notice/index.vue'
@Component({
    // beforeRouteEnter: () => {},
    components: { Helloworld1, Helloworld2, SlotLearn, Index, Example }
    // provide() {
    //     // 可以写成对象，也可以是函数
    //     // provide:{text:'xxx'}这样写也是可以的
    //     return { text: 'i am yanlu' }
    // }
})
export default class App extends Vue {
    message = 'hello world!'

    getMessage(message: string) {
        console.log(message)
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
