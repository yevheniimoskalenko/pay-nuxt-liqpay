<template>
  <div>
    <el-form :model="controls" ref="form">
      <el-form-item label="На сколько вы хотите пополнить ваш счёт?">
        <el-input v-model.number="controls.amount" placeholder="Введите сумму" value="number"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="OnSubmit" type="primary" round :loading="loading">Pay</el-button>
        {{form}}
      </el-form-item>
    </el-form>
    <div v-html="form"></div>
  </div>
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
      form: "",
      controls: {
        amount: 0
      }
    };
  },
  methods: {
    OnSubmit() {
      this.$refs.form.validate(async valid => {
        this.loading = true;
        const formData = {
          amount: this.controls.amount
        };
        try {
          await this.$store.dispatch("payAmount", formData);
          this.form = this.$store.state.form;
        } catch (e) {
          console.log(e);
        }
        this.loading = false;
      });
    }
  }
};
</script>

<style>
</style>
 