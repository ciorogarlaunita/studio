const {theme} = (await import(
	// @ts-expect-error -- TODO setup themer.d.ts to get correct typings
	'https://themer.sanity.build/api/hues?default=5c9199&primary=1cb485;400&transparent=5c9199&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1415'
	)) as {theme: import('sanity').StudioTheme}
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { schemaTypes } from "./schemas"

export default defineConfig({
	name: "Ciorogarla_Unita",
	title: "Ciorogarla Unită",

	projectId: 'xxgdop45',
	dataset: 'production',

	plugins: [
		deskTool(),
		visionTool(),
		unsplashImageAsset()
	],

	theme,

	schema: {
		types: schemaTypes,
	},
})
