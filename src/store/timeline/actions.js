import { timelinecards } from '../../statics/data/timelinecards'

export function mockTimelineCards (context) {
  context.commit('timelineCards', timelinecards)
}
