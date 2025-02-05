<<<<<<< HEAD
import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name:"category",
            title:"Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }
        ),
        defineField({
            name: "name",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug"
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
          }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of:[{
                type: "string"
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
          }),
          defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features of the product',
          }),
          defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              { name: 'height', title: 'Height', type: 'string' },
              { name: 'width', title: 'Width', type: 'string' },
              { name: 'depth', title: 'Depth', type: 'string' },
            ],
            description: 'Dimensions of the product',
          }),
    ]
})
=======
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'id', type: 'string', title: 'Product ID' },
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'category', type: 'string', title: 'Category' },
      {
        name: 'dimensions', 
        type: 'object',
        title: 'Dimensions',
        fields: [
          { name: 'length', type: 'number', title: 'Length' },
          { name: 'height', type: 'number', title: 'Height' },
          { name: 'width', type: 'number', title: 'Width' },
          { name: 'weight', type: 'number', title: 'Weight' },
          {
            name: 'mass_unit',
            type: 'string',
            title: 'Mass Unit',
            options: { list: ['cm', 'kg', 'in', 'lbs'] },
          },
          {
            name: 'distance_unit',
            type: 'string',
            title: 'Distance Unit',
            options: { list: ['cm', 'm', 'in', 'ft'] },
          },
        ],
      },
      { name: 'material', type: 'string', title: 'Material' },
      { name: 'color', type: 'string', title: 'Color' },
      { name: 'stock', title: 'Stock',  type: 'reference',
        to: [{ type: 'inventory' }], // Reference to the inventory schema 
        },
      { name: 'image', type: 'image', title: 'Image' , options: {
        hotspot: true
      }},
      { name: 'rating', type: 'number', title: 'Rating' },
      {
        name: 'rating_counts',
        type: 'number',
        title: 'Rating Count',
        description: 'Number of ratings'
      },
      {
        name: 'comments',
        type: 'object',
        title: 'Comments',
        fields: [
          { name: 'user', type: 'string', title: 'User Name' },
          { name: 'comment', type: 'string', title: 'Comment' },
        ],
      },
      { name: 'added_on', type: 'datetime', title: 'Added On' },
    ],
  };
>>>>>>> 7d4f3d2b44ca00659d47b5782292322bfa2a0635
