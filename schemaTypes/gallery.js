export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'galleryName',
      title: 'Gallery Name',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom enabled',
      description: 'Should we enable zooming of images?',
    },
  ],
  preview: {
    select: {
      galleryName: 'galleryName',
    },
    prepare(selection) {
      const {galleryName} = selection
      return {
        title: galleryName,
      }
    },
  },
}
