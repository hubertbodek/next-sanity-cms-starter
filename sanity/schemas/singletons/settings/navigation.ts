import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation_setting',
  title: 'Navigation',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Navigation',
    }),
  },
  fields: [
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
              to: [{ type: 'contact_page' }, { type: 'post' }, { type: 'blog_page' }],
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
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          description: 'Footer description',
          type: 'string',
        }),
        defineField({
          name: 'columns',
          title: 'Columns',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'footer_column',
              title: 'Footer Column',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'links',
                  title: 'Links',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      name: 'footer_link',
                      title: 'Footer Link',
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
    }),
  ],
})
