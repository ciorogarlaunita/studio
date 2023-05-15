import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./schemas"

export default defineConfig({
	name: "Ciorogarla_Unita",
	title: "Ciorogarla Unită",

	projectId: 'xxgdop45',
	dataset: 'production',

	plugins: [
		deskTool(),
		visionTool(),
		unsplashImageAsset(),
		markdownSchema(),
	],

	schema: {
		types: schemaTypes,
	},
})
