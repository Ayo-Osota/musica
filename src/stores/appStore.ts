import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isSidenavOpen: false,
        isAuthModalOpen: false,
    }),
    actions: {
        closeSidenav() {
            this.isSidenavOpen = false;
        },
        openSidenav() {
            this.isSidenavOpen = true;
        },
        toggleSidenav() {
            this.isSidenavOpen = !this.isSidenavOpen;
        }
    },
    getters: {
        sidenavHiddenClass(state) {
            return state.isSidenavOpen ? 'translate-x-0' : '-translate-x-full';
        },

        authModalHiddenClass(state) {
            return !state.isAuthModalOpen ? "hidden" : ""
        }
    }
});