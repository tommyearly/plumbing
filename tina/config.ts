import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
            required: true,
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "heroButtonText",
            label: "Hero Button Text",
            required: true,
          },
          {
            type: "string",
            name: "heroNotification",
            label: "Hero Notification",
            required: true,
          },
          {
            type: "image",
            name: "heroBackgroundImage",
            label: "Hero Background Image",
            required: true,
          },
          {
            type: "image",
            name: "heroFeatureImage",
            label: "Hero Feature Image",
            required: true,
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "ctaPrimaryText",
            label: "Primary CTA Text",
          },
          {
            type: "string",
            name: "ctaSecondaryText",
            label: "Secondary CTA Text",
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        name: "features",
        label: "Features",
        path: "content/features",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
          },
          {
            type: "string",
            name: "subheading",
            label: "Subheading",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "cards",
            label: "Feature Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "imageSrc",
                label: "Image Source",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Section Heading",
            required: true,
          },
          {
            type: "string",
            name: "subheading",
            label: "Section Subheading",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Section Description",
            required: true,
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            fields: [
              {
                type: "string",
                name: "content",
                label: "Testimonial Content",
                required: true,
              },
              {
                type: "string",
                name: "author",
                label: "Author Name",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Author Role",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Author Image",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "faqs",
        label: "FAQs",
        path: "content/faqs",
        format: "json",
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Section Heading",
            required: true,
          },
          {
            type: "string",
            name: "subheading",
            label: "Section Subheading",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Section Description",
            required: true,
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
                required: true,
              },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
