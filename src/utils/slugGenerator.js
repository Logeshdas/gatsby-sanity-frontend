export const slugGenerator = str => {
    const dummySlug = str
      .replace(/[^a-zA-Z]/g, " ")
      .split(" ")
      .join("-")
    const slug = dummySlug
      .replace(/-/g, " ")
      .split(" ")
      .filter(v => v !== "")
      .join("-")
    return String(slug).toLowerCase()
  }