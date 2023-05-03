import { defineType, defineField } from "sanity";

export default defineType({
	name: "organisation",
	title: "Organisation",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			description: "The name of the organisation",
			type: "string",
		}),
		defineField({
			name: "link",
			title: "Link",
			description: "The link to the organisation",
			type: "url",
		}),
		defineField({
			name: "logo",
			title: "Logo",
			description: "The logo of the organisation",
			type: "image",
		}),
		defineField({
			name: "contact",
			title: "Contact",
			description: "The contact of the organisation",
			type: "object",
			fields: [
				defineField({
					name: "phone",
					title: "Phone",
					description: "The phone number of the contact",
					type: "string",
				}),
				defineField({
					name: "email",
					title: "Email",
					description: "The email of the contact",
					type: "string",
				}),
			],
			validation: (Rule) => Rule.required(),
		})
	],
})
