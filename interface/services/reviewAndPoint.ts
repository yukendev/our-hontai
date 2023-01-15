export interface IReviewAndPointService {
  postReviewAndPoint: (
    point: number,
    review: string,
    userId: string,
    isbn: number,
  ) => Promise<void>;
}
