export default {
  name: 'timetable',
  title: 'Weekly Timetable',
  type: 'document',
  fields: [
    {
      name: 'monday',
      title: 'Monday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'tuesday',
      title: 'Tuesday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'wednesday',
      title: 'Wednesday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'thursday',
      title: 'Thursday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'friday',
      title: 'Friday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'saturday',
      title: 'Saturday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
    {
      name: 'sunday',
      title: 'Sunday',
      type: 'array',
      of: [{type: 'scheduleItem'}],
    },
  ],
}
