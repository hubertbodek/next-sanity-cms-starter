import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'navigation_setting',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageData',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'header_item',
          title: 'Header Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'reference',
              to: [{ type: 'contact_page' }, { type: 'post' }],
            }),
            defineField({
              name: 'dropdown',
              title: 'Dropdown',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'dropdown_item',
                  title: 'Dropdown Item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'reference',
                      to: [{ type: 'contact_page' }, { type: 'post' }],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
