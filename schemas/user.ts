import { defineType, defineField } from "sanity";

export default defineType({
	name: "user",
	title: "User",
	type: "document",
	fields: [
		defineField({
			name: "displayName",
			title: "Display Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "photoURL",
			title: "Photo URL",
			type: "url",
			validation: (UrlRule) => UrlRule.required(),
		}),
		defineField({
			name: "uid",
			title: "UID",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
	],
});