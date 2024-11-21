<template>
  <div
    class="fixed z-40 inset-0 overflow-y-auto bg-button backdrop-blur-sm flex items-center justify-center text-mainBg"
    :class="authModalHiddenClass"
    id="modal"
  >
    <div
      id="scroller"
      class="inline-block max-w-xl w-full mx-6 align-bottom bg-primary-100 rounded-2xl text-left overflow-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle max-h-[80vh]"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-4">
          <p class="text-2xl font-bold">Your Account</p>
          <!-- Modal Close Button -->
          <button
            type="button"
            class="modal-close cursor-pointer z-50 text-2xl font-medium"
            @click.prevent="modalVisibility = false"
          >
            x
          </button>
        </div>

        <!-- Tabs -->
        <ul class="flex flex-wrap mb-4 gap-2.5 mt-4">
          <li class="flex-auto text-center">
            <button
              class="block w-full py-3 px-4 transition text-sm button"
              href="#"
              @click.prevent="tab = 'login'"
              :class="{
                'button__inverted text-primary-900 border-primary-900': tab === 'register'
              }"
            >
              Login
            </button>
          </li>
          <li class="flex-auto text-center">
            <button
              class="block w-full py-3 px-4 transition text-sm button"
              href="#"
              @click.prevent=";(tab = 'register'), console.log(tab)"
              :class="{
                'button__inverted text-primary-900 border-primary-900': tab === 'login'
              }"
            >
              Register
            </button>
          </li>
        </ul>

        <!-- Login Form -->
        <div v-show="tab == 'login'">
          <app-login-form />
        </div>

        <!-- Registration Form -->
        <div v-show="tab === 'register'">
          <app-registration-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import AppLoginForm from './LoginForm.vue'
import AppRegistrationForm from './RegistrationForm.vue'
import { useAppStore } from '@/stores/appStore'

export default {
  components: { AppLoginForm, AppRegistrationForm },
  name: 'AppAuth',
  data() {
    return {
      tab: 'login'
    }
  },
  computed: {
    ...mapState(useAppStore, ['authModalHiddenClass']),
    ...mapWritableState(useAppStore, {
      modalVisibility: 'isAuthModalOpen'
    })
  }
}
</script>