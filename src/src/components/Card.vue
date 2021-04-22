<template>
   <div class="py-4 w-100" id="container">
    <b-card header-tag="header">
      <template #header>
        <div
          class="d-flex justify-content-between align-items-center"
          id="header"
        >
          <h4 class="mb-0">{{ title }}</h4>
          <span class="found">
            <span v-if="data.length > 0">itens encontrados {{ data.length }}</span>
            <span v-else>Nenhum item encontrado</span>
            
          </span>
        </div>
      </template>
      <div class="content" v-for="item in data" :key="item">
        <b-card-text
          class="d-flex justify-content-between py-2" id="item">
          <span class="id">#{{ item.id }}</span>
          <span class="item">{{ item.name }}</span>
            <span class="quantity" v-if="item.quantity">Qtd: {{ item.quantity }} pç</span>
            <span v-else></span>
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    data: Array
  }
}
</script>

<style scoped>
#item {
  transition: all ease-out .2s;
}
#item:hover {
  background: rgb(246, 246, 246);
  transform: scale(1.02);
}

#container {
  opacity: .85;
}
#container:hover {
  opacity: 1;
}

.id {
  text-decoration: underline;
  color: red;
}
.found {
  font-size: .8rem;
  opacity: .8;
}

</style>
