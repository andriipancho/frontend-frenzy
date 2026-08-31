export interface Article {
  id: string;
  title: string;
  body: string;
  authorId: string;
  publishedAt: Date | null;
}

export function createPreview(article: Article): object {
  return {
    id: article.id,
    title: article.title,
    publishedAt: article.publishedAt,
  };
}
