import { IReview } from 'interface/models/review';

export interface IReviewService {
  getPublishedReviewByIsbn(isbn: number, page: number): Promise<IReview[]>;
  postReview: (
    point: number,
    review: string,
    userId: string,
    isbn: number,
    isPublished: boolean,
  ) => Promise<void>;
  deleteReview(isbn: number, userId: string): Promise<void>;
}
