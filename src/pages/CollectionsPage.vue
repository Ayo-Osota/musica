<template>
  <app-view
    class="bg-no-repeat bg-cover bg-mainBg app-bg-with-image"
    style="
      background-image: linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1d2123 90%),
        url('http://localhost:5173/src/assets/lead-image.png');
    "
  >
    <div>
      <div>
        <img src="../assets/lead-image.png" alt="" />

        <div>
          <article>
            <h1>Tomorrow’s tunes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis
            </p>
            <p>64 songs ~ 16 hrs+</p>
          </article>

          <div>
            <button type="button" class="button button__plain">Play all</button>
            <button type="button" class="button button__plain">Add to collection</button>
            <button type="button" class="button button__plain"></button>
          </div>
        </div>
      </div>
    </div>
  </app-view>
</template>

<script>
export default {}
</script>

<style>
</style>