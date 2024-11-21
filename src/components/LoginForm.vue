<template>
  <div class="text-white text-center font-bold p-4 rounded mb-4"></div>

  <vee-form>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field name="email" type="email" class="custom-input" placeholder="Enter Email" />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- Password -->

    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" type="password" class="custom-input" placeholder="Password" />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-secondary-400 text-mainBg mb-6 text-base mt-10 px-3 button transition hover:backdrop-blur-md"
    >
      Submit
    </button>
  </vee-form>
</template>