import { EleventyRenderPlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
    // many ways to configure these
    // 
    eleventyConfig.setInputDirectory("content");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setDataDirectory("../data");
    eleventyConfig.setLayoutsDirectory("../layouts");

    // plugins
    
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "./components/**/*.webc"
        ]
    });


    
}