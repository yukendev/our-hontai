export interface IReviewAndPointService {
  postReviewAndPoint: (
    point: number,
    review: string,
    userId: string,
    bookId: string,
  ) => Promise<void>;
}
