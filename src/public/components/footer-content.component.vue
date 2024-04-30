<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="footer-container">
    <div class="box">
      <h2>Cyber Savants</h2>
    </div>
    <div class="align-items-center justify-content-center">
      <h3>Contáctanos:</h3>
      <p><i class="pi pi-send"/>{{ 'authoring-phrase.email' }}</p>
      <p><i class="pi pi-phone"/>{{ 'authoring-phrase.phone' }}</p>
      <p>Copyright &copy; 2024. Cyber Savants</p>
    </div>
    <div class="flex align-items-center justify-content-center mt-2">
      <i class="pi pi-facebook" style="font-size: 2.5rem"></i>
      <i class="pi pi-instagram" style="font-size: 2.5rem"></i>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 100%;
  margin: auto;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:50px;
  background-color: forestgreen;
}
@media screen and (max-width:800px){
  .footer .info{
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap:30px;
    padding: 35px 0px;
  }
}
</style>