import parse from "rss-to-json";

export default {
  fetchPosts() {
    return parse(process.env.blogRSSUrl as string, {});
  },
};
