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
		}),
		defineField({
			name: "description",
			title: "Description",
			description: "The description of the project",
			type: "text",
		}),
		defineField({
			name: "topic",
			title: "Topic",
			description: "The topic of the project",
			type: "string",
		}),
		defineField({
			name: "organisation",
			title: "Organisation",
			description: "The organisation that the project belongs to",
			type: "reference",
			to: [{ type: "organisation" }],
		}),
		defineField({
			name: "image",
			title: "Image",
			description: "An image for the project",
			type: "image",
		}),
		defineField({
			name: "location",
			title: "Location",
			description: "The location of the project",
			type: "geopoint",
		}),
		defineField({
			name: "infopack",
			title: "Infopack",
			description: "The infopack of the project",
			type: "file",
		}),
		defineField({
			name: "country",
			title: "Country",
			description: "The country where the project takes place",
			type: "reference",
			to: [{ type: "country" }],
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
				}),
				defineField({
					name: "toDate",
					title: "To Date",
					description: "The date that the project ends",
					type: "date",
				}),
			]
		}),
	],
});
