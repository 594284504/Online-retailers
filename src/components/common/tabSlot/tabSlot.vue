<template>
    <div class='tabslot'>
      <div class='left'>
          <slot name='left'></slot>
      </div>
      <div class='center'>
          <slot name='center'></slot>
      </div>
      <div class='right'>
          <slot name='right'></slot>
      </div> 
    </div>
</template>

<script >


</script>

<style scoped>
.tabslot {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
 background-color: #fff;
}
.left,.right {
    width: 20%;
   
}
.center {
    flex:1;
   
}
</style>