import { IReview } from 'interface/models/review';
import { IReviewService } from 'interface/services/review';
import { BookModel } from 'server/models/book';
import { ReviewModel } from 'server/models/review';

export const ReviewService: IReviewService = {
  async getReviewByIsbn(isbn: number, page: number): Promise<IReview[]> {
    try {
      const book = await BookModel.getByIsbn(isbn);
      const reviews = await ReviewModel.getByBookId(book._id, page);

      return reviews;
    } catch {
      throw Error('can not get review frmo db');
    }
  },
};
