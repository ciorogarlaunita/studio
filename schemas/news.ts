import { defineType, defineField } from "sanity";

export default defineType({
	name: "news",
	title: "News",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			description: "The title of the news article",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description: "The slug of the news article",
			type: "slug",
		}),
		defineField({
			name: "urgent",
			title: "Urgent",
			description: "Is this news article urgent?",
			type: "boolean",
		}),
		defineField({
			name: "content",
			title: "Content",
			description: "The content of the news article",
			type: "markdown"
		}),
	],
})
