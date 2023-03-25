import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
	schemaPath: "./schemas",
	outputPath: "../app/types/SanitySchema.ts",
};

export default config;
