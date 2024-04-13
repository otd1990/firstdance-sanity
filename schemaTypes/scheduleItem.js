import {defineType, defineField} from 'sanity'

const scheduleItem = defineType({
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    defineField({
      name: 'className',
      title: 'Class Name',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
  ],
})

export default scheduleItem
