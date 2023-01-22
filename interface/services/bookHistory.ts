import { IBookHistory } from 'interface/models/bookHistory';

export interface IBookHistoryService {
  postBookHistory: (userId: string, isbn: number) => Promise<IBookHistory>;
  deleteBookHistory: (userId: string, isbn: number) => Promise<void>;
}
