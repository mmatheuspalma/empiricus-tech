import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { Post } from '~/entities/Post';
import Resource from '~/resources/blog';

@Module
export default class Blog extends VuexModule {
  posts: Post[] = new Array<Post>();

  @Mutation
  setPostsList(posts: Post[]) {
    this.posts = posts;
  }

  @Action({ rawError: true, commit: 'setPostsLists' })
  async fetchPosts() {
    return Resource.fetchPosts();
  }
}
