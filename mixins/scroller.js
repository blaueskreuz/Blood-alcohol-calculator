import throttle from 'lodash/throttle'

export default {
  data() {
    return {
      hasReachedTop: false,
      shouldMinimize: false
    }
  },

  methods: {
    scrollHandler: throttle(function(e) {
      if (this.$el.getBoundingClientRect) {
        const { scrollY } = window

        this.shouldMinimize = scrollY > this.$el.clientHeight
        this.hasReachedTop =
          this.$el.getBoundingClientRect().y === 0 && this.shouldMinimize
      }
    }, 50),

    registerScrollEventListener() {
      window.addEventListener('scroll', e => {
        this.scrollHandler(e)
      })
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.registerScrollEventListener()
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
