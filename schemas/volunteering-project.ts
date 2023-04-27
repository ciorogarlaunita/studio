import { defineType, defineField } from "sanity";

const projectTypes = [
	{title: "ERASMUS+", value: "erasmus"},
	{title: "ESC", value: "esc"},
];

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
			name: "type",
			title: "Type",
			description: "Type of project",
			type: "string",
			options: {
				list: projectTypes,
			},
			validation: (Rule) => Rule.required(),
		})
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
			name: "location",
			title: "Location",
			description: "The location of the project",
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
					name: "plus",
					title: "Plus code",
					type: "string",
					description: "The plus code of location",
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: "locationStreetview",
					title: "Street View location",
					type: "string",
					description: "Location Street View",
					validation: (Rule) => Rule.required(),
				}),
			],
			validation: (Rule) => Rule.required(),
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
