import { throttle } from './utils'

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
      const width = window.innerWidth
      this.screenWidth = width
    }
  }
}
