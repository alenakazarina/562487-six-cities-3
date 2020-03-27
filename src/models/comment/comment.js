class Comment {
  constructor(comment) {
    this.text = comment[`comment`];
    this.date = new Date(comment[`date`]);
    this.id = comment[`id`];
    this.rating = comment[`rating`];
    this.user = {
      avatarUrl: comment.user[`avatar_url`],
      id: comment.user[`id`],
      isPro: comment.user[`is_pro`],
      name: comment.user[`name`]
    };
  }

  static parseComment(comment) {
    return new Comment(comment);
  }

  static parseComments(comments) {
    return comments.map(Comment.parseComment);
  }
}

export default Comment;
