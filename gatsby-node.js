//Working create page

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const serviceTemplate = path.resolve(`./src/templates/service-template-sanity.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allDatoCmsLessonLevel {
        nodes {
            id
            urlPath
            lessonText
            title
            blurb
            buttonText
            mainImage {
              gatsbyImageData
              alt
            }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }
  const trialsLessons = result.data.allDatoCmsLessonLevel.nodes

//   Create blog posts pages
//   But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   `context` is available in the template as a prop and as a variable in GraphQL
  if (trialsLessons.length > 0) {
    trialsLessons.forEach((post, index) => {
      const previousPostId = index === 0 ? null : trialsLessons[index - 1].id
      const nextPostId = index === trialsLessons.length - 1 ? null : trialsLessons[index + 1].id
            createPage({
                path: post.urlPath,
                component: serviceTemplate,
                context: {
                  id: post.id,
                  previousPostId,
                  nextPostId
                },
              })
    })
  }
}