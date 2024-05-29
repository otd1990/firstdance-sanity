// schemas/pet.js
export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'paragrapOne',
      type: 'string',
      title: 'Paragraph One',
    },
    {
      name: 'paragrapTwo',
      type: 'string',
      title: 'Paragraph Two',
    },
    {
      name: 'paragrapThree',
      type: 'string',
      title: 'Paragraph Three',
    },
    {
      name: 'paragrapFour',
      type: 'string',
      title: 'Paragraph Four',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'accreditationImage',
      type: 'image',
      title: 'Accreditation',
    },
    {
      name: 'boysBalletImage',
      type: 'image',
      title: 'Boys Ballet',
    },
  ],
}
