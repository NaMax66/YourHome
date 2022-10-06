import throttle from 'lodash.throttle'

export const screenWidth = {
  data () {
    return {
      screenWidth: 0
    }
  },
  mounted () {
    const setScreenWidth = throttle(this.setScreenWidth, 400)
    window.addEventListener('resize', () => {
      setScreenWidth()
    })
    this.$nextTick(this.setScreenWidth)
  },
  methods: {
    setScreenWidth () {
      this.screenWidth = window.innerWidth
    }
  }
}
