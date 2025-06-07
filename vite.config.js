export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables" as *; @use "@/styles/mixins" as *;`
            }
        }
    }
}
