import React from 'react';
import { client } from "../../../tina/__generated__/client";

export default async function About() {
  // const query = `#graphql
  //   query {
  //     about(relativePath: "index.json") {
  //       title
  //       description
  //       image
  //     }
  //   }
  // `;
  // const variables = {};
  // const { data } = await client.request<{ about: { title: string; description: string; image: string } }>({ query, variables });
  const { data } = await client.queries.about({ relativePath: "index.json" });

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
            {data.about.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            {data.about.description}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src={data.about.image || ""}
            alt="About our plumbing services"
            className="max-w-2xl rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
} 