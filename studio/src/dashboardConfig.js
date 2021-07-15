export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f006e451f64dfd79b51f83",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-jumpstart-jumstack-studio",
                  apiId: "aaaa488b-2450-44b6-b229-7172ed9707b4",
                },
                {
                  buildHookId: "60f006e58dfd8dfb4d812e3d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-jumpstart-jumstack",
                  apiId: "5bf09953-b0c1-4bc0-8eb4-6cd5185eb94d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/michalstrzelecki/sanity-gatsby-blog-jumpstart-jumstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-jumpstart-jumstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
