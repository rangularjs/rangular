import {
  compareBaseEntity,
  convertNumbersToEnglish,
  getEnumModelValue,
  isNullOrUndefined,
  isNullOrUndefinedOrEmpty,
  removeItemFromList,
  removeItemFromListByFn,
  replaceArabicAlpha,
  replaceUpdatedItemInList,
  replaceUpdatedItemInListByFn
} from './utils';
import {EnumModel} from './enum.model';
import {BaseEntity} from './base.entity';

class TestEntity implements BaseEntity {
  constructor(public id: number,
              public uuid: string,
              public title: string) {
  }
}

describe('Utils', () => {

  describe('replaceUpdatedItemInListByFn', () => {
    let ITEMS: TestEntity[];

    beforeEach(() => {
      ITEMS = [
        {id: 1, title: 'item 1', uuid: 'qwe'},
        {id: 2, title: 'item 2', uuid: 'abc'},
        {id: 3, title: 'item 3', uuid: 'zxc'},
      ];
    });

    it('should update the correct item', () => {
      const data: TestEntity = {id: 2, title: 'updated item', uuid: 'abc'};

      const result = replaceUpdatedItemInListByFn(ITEMS, data, i => i.uuid === 'abc');

      expect(result.length).toEqual(3);
      expect(result.find(i => i.id === 2)['title']).toEqual('updated item');
    });
  });

  describe('replaceUpdatedItemInList', () => {
    let ITEMS: TestEntity[];

    beforeEach(() => {
      ITEMS = [
        {id: 1, title: 'item 1', uuid: 'qwe'},
        {id: 2, title: 'item 2', uuid: 'abc'},
        {id: 3, title: 'item 3', uuid: 'zxc'},
      ];
    });

    it('should update the correct item', () => {
      const data: TestEntity = {id: 2, title: 'updated item', uuid: 'abc'};

      const result = replaceUpdatedItemInList(ITEMS, data);

      expect(result.length).toEqual(3);
      expect(result.find(i => i.id === 2)['title']).toEqual('updated item');
    });
  });

  describe('removeItemFromListByFn', () => {
    let ITEMS: TestEntity[];

    beforeEach(() => {
      ITEMS = [
        {id: 1, title: 'item 1', uuid: 'qwe'},
        {id: 2, title: 'item 2', uuid: 'abc'},
        {id: 3, title: 'item 3', uuid: 'zxc'},
      ];
    });

    it('should remove the correct item', () => {
      const result = removeItemFromListByFn(ITEMS, i => i.uuid === 'abc');

      expect(result.length).toEqual(2);
    });
  });

  describe('removeItemFromList', () => {
    let ITEMS: TestEntity[];

    beforeEach(() => {
      ITEMS = [
        {id: 1, title: 'item 1', uuid: 'qwe'},
        {id: 2, title: 'item 2', uuid: 'abc'},
        {id: 3, title: 'item 3', uuid: 'zxc'},
      ];
    });

    it('should remove the correct item', () => {
      const result = removeItemFromList(ITEMS, 2);

      expect(result.length).toEqual(2);
    });
  });

  describe('isNullOrUndefined', () => {
    it('should be truthy', () => {
      const result = isNullOrUndefined(null);

      expect(result).toBeTruthy();
    });

    it('should be truthy', () => {
      const result = isNullOrUndefined(undefined);

      expect(result).toBeTruthy();
    });

    it('should be falsy', () => {
      const result = isNullOrUndefined({id: 1});

      expect(result).toBeFalsy();
    });
  });

  describe('isNullOrUndefinedOrEmpty', () => {
    it('should be truthy', () => {
      const result = isNullOrUndefinedOrEmpty('');

      expect(result).toBeTruthy();
    });

    it('should be falsy', () => {
      const result = isNullOrUndefinedOrEmpty('title');

      expect(result).toBeFalsy();
    });
  });

  describe('getEnumModelValue', () => {
    let ITEMS: EnumModel[];

    beforeEach(() => {
      ITEMS = [
        {value: 1, title: 'item 1'},
        {value: 2, title: 'item 2'},
      ];
    });

    it('should return value if items is null', () => {
      const result = getEnumModelValue(1, null);

      expect(result).toEqual(1);
    });

    it('should return item title', () => {
      const result = getEnumModelValue(1, ITEMS);

      expect(result).toEqual('item 1');
    });
  });

  describe('convertNumbersToEnglish', () => {
    it('should replace persian numbers', () => {
      const result = convertNumbersToEnglish('۱۲۳456۷۸۹');

      expect(result).toEqual('123456789');
    });
  });

  describe('replaceArabicAlpha', () => {
    it('should replace arabic alphabets', () => {
      const result = replaceArabicAlpha('علي و ملي و كاشف و كفش');

      expect(result).toEqual('علی و ملی و کاشف و کفش');
    });
  });

  describe('compareBaseEntity', () => {
    it('should be truthy', () => {
      const result = compareBaseEntity({id: 1}, {id: 1});

      expect(result).toBeTruthy();
    });

    it('should be falsy', () => {
      const result = compareBaseEntity({id: 1}, {id: 2});

      expect(result).toBeFalsy();
    });
  });
});
