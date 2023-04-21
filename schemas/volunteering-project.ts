import { defineType, defineField } from "sanity";

export default defineType({
	name: "volunteeringProject",
	title: "Volunteering Project",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			description: "The name of the project",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			description: "The description of the project",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description: "The slug of the project",
			type: "slug",
			options: {
				source: "name",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "topic",
			title: "Topic",
			description: "The topic of the project",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "organisation",
			title: "Organisation",
			description: "The organisation that the project belongs to",
			type: "reference",
			to: [{ type: "organisation" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			description: "An image for the project",
			type: "image",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "address",
			title: "Address",
			description: "The address of the project",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "location",
			title: "Location",
			description: "The location of the business",
			type: "object",
			fields: [
					defineField({
						name: "address",
						title: "Address",
						type: "string",
						description: "A human readable address",
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: "coordinates",
						title: "Coordinates",
						type: "geopoint",
						description: "The coordinates of the location",
						validation: (Rule) => Rule.required(),
					}),
			]
			// Can be online
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "infopack",
			title: "Infopack",
			description: "The infopack of the project",
			type: "file",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "country",
			title: "Country",
			description: "The country where the project takes place",
			type: "reference",
			to: [{ type: "country" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "period",
			title: "Period",
			description: "The period of the project",
			type: "object",
			fields: [
				defineField({
					name: "fromDate",
					title: "From Date",
					description: "The date that the project starts",
					type: "date",
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: "toDate",
					title: "To Date",
					description: "The date that the project ends",
					type: "date",
					validation: (Rule) => Rule.required(),
				}),
			]
		}),
	],
});
