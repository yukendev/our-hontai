import { IBookDetail } from 'interface/bookDetail';

export interface IOpenBdService {
  getBookDetailByIsbn: (isbn: number) => Promise<IBookDetail>;
}
