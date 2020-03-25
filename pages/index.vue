<template>
  <el-form :model="controls" ref="form">
    <el-form-item label="На сколько вы хотите пополнить ваш счёт?">
      <el-input v-model.number="controls.amount" placeholder="Введите сумму" value="number"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="OnSubmit" type="primary" round :loading="loading">Pay</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  head: {
    title: "Пополнить"
  },
  components: {},
  data() {
    return {
      loading: false,
      controls: {
        amount: 0
      }
    };
  },
  methods: {
    OnSubmit() {
      this.$refs.form.validate(async valid => {
        const formData = {
          amount: this.controls.amount
        };
        try {
          await this.$store.dispatch("payAmount", formData);
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
};
</script>

<style>
</style>
 