import { defineType, defineField } from "sanity";



const businessTypes = [
	{title: "Restaurant", value: "restaurant"},
	{title: "Cafe", value: "cafe"},
	{title: "Pub", value: "pub"},
	{title: "Barbershop", value: "barbershop"},
	{title: "ITP", value: "itp"},
	// {title: "Bakery", value: "bakery"},
	{title: "Market", value: "market"},
	{title: "Pizza", value: "pizza"},
	// {title: "Mini Mart", value: "miniMart"},
];

const business = defineType({
	name: "business",
	title: "Business",
	type: "document",

	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			description: "The name of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "description",
			title: "Description",
			type: "text",
			description: "A description of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "type",
			title: "Type",
			type: "string",
			description: "The type of business",
			options: {
				list: businessTypes,
				// layout: "radio",
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description: "The slug of the business",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			description: "The logo of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "cover",
			title: "Cover",
			type: "image",
			description: "The cover image of the business",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "photos",
			title: "Photos",
			type: "array",
			of: [
				{
					name: "photo",
					title: "Photo",
					type: "image",
				}
			],
			description: "The photos of the business",
		}),
		
		defineField({
			name: "locations",
			title: "Locations",
			description: "The locations of the business",
			type: "array",
			of: [
				{ 
					name: "location",
					title: "Location",
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
					],
				}
			],
			// Can be online
			// validation: (Rule) => Rule.required(),
		}),
	
		defineField({
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
		}),
	],
});

export default business;
