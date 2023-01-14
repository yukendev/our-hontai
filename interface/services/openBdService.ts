import { IBookMeta } from 'interface/bookMeta';

export interface IOpenBdService {
  getBookMetaByIsbn: (isbn: number) => Promise<IBookMeta>;
}
