export interface IBookHistoryService {
  postBookHistory: (userId: string, bookId: string) => Promise<void>;
}
