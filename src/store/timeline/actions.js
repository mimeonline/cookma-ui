import { timelinecards } from '../../statics/data/timelinecards'

export function timelineCards (context) {
  context.commit('timelineCards', timelinecards.cards)
}
