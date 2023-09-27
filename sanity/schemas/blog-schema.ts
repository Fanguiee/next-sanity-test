const blog = {
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      }
    ]
  }
  
  export default blog;