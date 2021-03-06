import { MutationTypes, useStore } from '@/store'
import { enterFullscreen, exitFullscreen, isFullscreen } from '@/utils/fullscreen'

export default () => {
  const store = useStore()

  const enterScreening = () => {
    enterFullscreen()
    store.commit(MutationTypes.SET_SCREENING, true)
  }

  const enterScreeningFromStart = () => {
    store.commit(MutationTypes.UPDATE_SLIDE_INDEX, 0)
    enterScreening()
  }

  const exitScreening = () => {
    store.commit(MutationTypes.SET_SCREENING, false)
    if (isFullscreen()) exitFullscreen()
  }

  return {
    enterScreening,
    enterScreeningFromStart,
    exitScreening,
  }
}