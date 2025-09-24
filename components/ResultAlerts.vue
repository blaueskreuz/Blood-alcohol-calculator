<template>
    <transition-expand>
        <div v-if="hasAlert" :key="message.id">
            <div class="py-1 sm:py-2" :class="[bak > 3 ? 'bg-red' : 'bg-orange']">
                <p class="text-white text-left leading-normal text-base sm:text-lg md:text-xl py-2 sm:py-3 px-4 sm:px-8 md:px-12"
                    v-html="message.body"></p>
            </div>
        </div>
    </transition-expand>
</template>

<script>
import scroller from '~/mixins/scroller'
import { useNuxtApp } from '#app' // Import useNuxtApp

export default {
    mixins: [scroller],
    props: {
        promille: {
            type: [String, Number],
            default: null,
        },
    },
    data() {
        return {
            message: {
                id: null,
                body: '',
                color: '',
            },
        }
    },
    watch: {
        promille() {
            this.showMessage()
        },
    },
    computed: {
        hasAlert() {
            return !!this.message.body
        },
        bak() {
            return parseFloat(this.promille)
        },
    },
    methods: {
        showMessage() {
            const { $t } = useNuxtApp() // Get access to the $t function

            if (this.bak === 0) {
                this.message = { id: null, body: '', color: '' }
                return
            }

            let messageKey = null;

            if (this.bak >= 4) {
                messageKey = 'drunkness_level_7'
            } else if (this.bak > 3) {
                messageKey = 'drunkness_level_6'
            } else if (this.bak > 2) {
                messageKey = 'drunkness_level_5'
            } else if (this.bak >= 1) {
                messageKey = 'drunkness_level_4'
            } else if (this.bak >= 0.8) {
                messageKey = 'drunkness_level_3'
            } else if (this.bak >= 0.5) {
                messageKey = 'drunkness_level_2'
            } else if (this.bak >= 0.2) {
                messageKey = 'drunkness_level_1'
            }

            if (messageKey) {
                this.message = {
                    id: messageKey,
                    body: $t(messageKey),
                    color: this.bak > 3 ? 'bg-red' : 'bg-orange'
                }
            } else {
                this.message = { id: null, body: '', color: '' }
            }
        },
    },
}
</script>