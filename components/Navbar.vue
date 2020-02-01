<template>
  <header
    class="flex bg-primary-red p-4 justify-between items-center text-gray-200"
  >
    <nuxt-link to="/">
      <div>
        <img
          class="h-6 "
          src="../assets/images/Screen Shot 2020-01-31 at 18.41.45.png"
          alt=""
        /></div
    ></nuxt-link>
    <nav>
      <nuxt-link class="mr-2" to="/global">全球疫情</nuxt-link>
      <nuxt-link class="ml-2" to="/china">全国各省疫情统计</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
