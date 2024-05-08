// schemas/pet.js
export default {
  name: 'boys-club',
  type: 'document',
  title: 'Boys Ballet Club',
  fields: [
    {
      name: 'paragraphOne',
      type: 'string',
      title: 'Paragraph One',
    },
    {
      name: 'paragraphTwo',
      type: 'string',
      title: 'Paragraph Two',
    },
    {
      name: 'benefits',
      type: 'array',
      title: 'Benefits',
      of: [{type: 'string'}],
    },
    {
      name: 'paragraphThree',
      type: 'string',
      title: 'Paragraph Three',
    },
    {
      name: 'paragraphFour',
      type: 'string',
      title: 'Paragraph Four',
    },
    {
      name: 'paragraphFive',
      type: 'string',
      title: 'Paragraph Five',
    },
    {
      name: 'paragraphSix',
      type: 'string',
      title: 'Paragraph Six',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'tshirt',
      type: 'array',
      title: 'Tshirt',
      of: [{type: 'image'}],
    },
  ],
}
