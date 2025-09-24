<template>
  <transition-expand>
    <div
      v-if="hasAlert"
      :key="message.id"
    >
      <div class="py-1 sm:py-2" :class="[ bak > 3 ? 'bg-red': 'bg-orange']">
        <p
          class="text-white text-left leading-normal text-base sm:text-lg md:text-xl py-2 sm:py-3 px-4 sm:px-8 md:px-12"
          v-html="message.body"
        >
        </p>
      </div>
    </div>
  </transition-expand>
</template>

<script>
import scroller from '~/mixins/scroller'

export default {
  mixins: [scroller],

  props: {
    promille: {
      type: [String, Number],
      default: null
    }
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
    promille(value) {
      this.showMessage()
    }
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
      if (this.bak === 0) {
        return this.message = {
          id: null,
          body: '',
          color: '',
        }
      }

      if (this.bak >= 0.2 && this.bak < 0.5) {
        this.message = {
          id: 4565,
          body: 'Leichte Verminderung von Seh- und Hörvermögen',
          color: 'bg-orange'
        }
      }
      if (this.bak >= 0.5) {
        this.message = {
          id: 3342,
          body:
            'Probleme mit Konzentration, deutliche Verlängerung der Reaktionszeit, <strong>Selbstüberschätzung</strong> nimmt zu',
          color: 'bg-orange'
        }
      }
      if (this.bak >= 0.8) {
        this.message = {
          id: 9879,
          body:
            'Konzentrationsschwäche, stark verlängerte Reaktionszeit, Euphorie, zunehmende Enthemmung',
          color: 'bg-orange'
        }
      }
      if (this.bak >= 1 && this.bak <= 2) {
        this.message = {
          id: 5645,
          body:
            '<strong>Rauschstadium</strong>. Starke Gleichgewichtsstörungen, Aufmerksamkeits- und Konzentrationseinbussen, Verwirrtheit',
          color: 'bg-orange'
        }
      }
      if (this.bak > 2 && this.bak <= 3) {
        this.message = {
          id: 2333,
          body:
            '<strong>Betäubungsstadium</strong>. Reaktionsvermögen kaum noch vorhanden. Gedächtnis- und Bewusstseinsstörungen, Verwirrtheit. Erbrechen.',
          color: 'bg-orange'
        }
      }
      if (this.bak > 3) {
        this.message = {
          id: 7777,
          body:
            '<strong>Lebensgefährlich</strong>. Bewusstlosigkeit, schwache Atmung',
          color: 'bg-red'
        }
      }
      if (this.bak >= 4) {
        this.message = {
          id: 5949,
          body:
            'Lähmungen, Koma mit Verlust der Reflexe, unkontrollierte Ausscheidungen, Atemstillstand, Tod',
          color: 'bg-red'
        }
      }
    }
  }
}
</script>
