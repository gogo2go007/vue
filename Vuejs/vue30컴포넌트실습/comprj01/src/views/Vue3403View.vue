<style scoped></style>

<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <Vue3403Comp v-on:showLog="printText"></Vue3403Comp>
  </div>
</template>

<script>
import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      mesg: null,
    };
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    printText(parma1, param2) {
      debugger;
      console.log(parma1, param2);

      this.$data.mesg = `${parma1},${param2}`;
    },
  },
  components: {
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    Vue3403Comp: Vue3403Comp,
  },
};
</script>
