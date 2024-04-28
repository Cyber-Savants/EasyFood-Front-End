<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="info">
    <div class="box">
      <h2>Cyber Savants</h2>
    </div>
    <div class="align-items-center justify-content-center">
      <h3>Contáctanos:</h3>
      <p><i class="pi pi-send"/>{{ $t('authoring-phrase.email') }}</p>
      <p><i class="pi pi-phone"/>{{ $t('authoring-phrase.phone') }}</p>
      <p>Copyright &copy; 2024. Cyber Savants</p>
    </div>
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-facebook" style="font-size: 2.5rem"></i>
      <i class="pi pi-instagram" style="font-size: 2.5rem"></i>
    </div>
  </div>
</template>

<style scoped>
.info {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:50px;
  background-color: forestgreen;
}

</style>