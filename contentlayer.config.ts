import { defineDocumentType, makeSource } from "contentlayer/source-files"

const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    }
   },
   computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `posts/${doc._raw.flattenedPath}`
    }
   }
  }))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [BlogPost]
})
