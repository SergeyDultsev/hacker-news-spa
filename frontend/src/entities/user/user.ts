import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore  = defineStore("user", () => {
    const userName = ref<string>('Serejka');
    const email = ref<string>('Serejka@gmail.com');
    const isAuth = ref<boolean>(false);

    return {
        userName,
        email,
        isAuth,
    }
});