import { defineSchema, defineConfig } from "tinacms";

export default defineSchema({
  collections: [
    {
      name: "homePage",
      label: "Home Page",
      path: "content/home",
      format: "json",
      fields: [
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
        },
        {
          type: "rich-text",
          name: "heroDescription",
          label: "Hero Description",
        },
        {
          type: "string",
          name: "ctaText",
          label: "CTA Button Text",
        },
        {
          type: "string",
          name: "ctaLink",
          label: "CTA Button Link",
        },
        {
          type: "image",
          name: "heroImage",
          label: "Hero Image",
        },
        {
          type: "string",
          name: "heroImageAlt",
          label: "Hero Image Alt Text",
        },
        {
          type: "string",
          name: "featuresTitle",
          label: "Features Section Title",
        },
        {
          type: "object",
          name: "features",
          label: "Features",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Feature Title",
            },
            {
              type: "rich-text",
              name: "description",
              label: "Feature Description",
            },
          ],
        },
        {
          type: "string",
          name: "ctaSectionTitle",
          label: "CTA Section Title",
        },
        {
          type: "rich-text",
          name: "ctaSectionDescription",
          label: "CTA Section Description",
        },
        {
          type: "string",
          name: "ctaSectionButtonText",
          label: "CTA Section Button Text",
        },
        {
          type: "string",
          name: "ctaSectionLink",
          label: "CTA Section Button Link",
        },
      ],
    },
  ],
}); 