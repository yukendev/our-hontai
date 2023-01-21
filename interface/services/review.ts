import { IReview } from 'interface/models/review';

export interface IReviewService {
  getReviewByIsbn(isbn: number, page: number): Promise<IReview[]>;
}
