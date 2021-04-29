import { BookSorterPipe } from './book-sorter.pipe';

describe('BookSorterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookSorterPipe();
    expect(pipe).toBeTruthy();
  });
});
