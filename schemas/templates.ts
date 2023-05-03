import {defineField} from "sanity";

export const locationField = defineField({
		name: "location",
		title: "Location",
		description: "The location",
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
		]
		// Can be online
		// validation: (Rule) => Rule.required(),
})


export const contactField = defineField({
	name: "contact",
	title: "Contact",
	description: "The contact information of the business",
	type: "object",
	fields: [
		{
			name: "phone",
			title: "Phone",
			type: "string",
			description: "The phone number of the business",
		},
		{
			name: "email",
			title: "Email",
			type: "string",
			description: "The email address of the business",
		},
		{
			name: "website",
			title: "Website",
			type: "url",
			description: "The website of the business",
		},
		{
			name: "facebook",
			title: "Facebook",
			type: "url",
			description: "The Facebook page of the business",
			validation: (Rule) => Rule.custom((value: String | undefined) => {
				if (!value) return true;

				return value.startsWith("https://facebook.com/")
					? true
					: "Must be a valid Facebook page URL"
			}),
		},
		{
			name: "instagram",
			title: "Instagram",
			type: "url",
			description: "The Instagram page of the business",
			validation: (Rule) => Rule.custom((value: String | undefined) => {
				if (!value) return true;

				return value.startsWith("https://instagram.com/")
					? true
					: "Must be a valid Instagram page URL"
			}),
		},
	],
})
