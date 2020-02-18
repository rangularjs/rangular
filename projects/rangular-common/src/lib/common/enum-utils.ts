import {EnumModel} from './enum.model';

export function enumToEnumModel(typeEnum: any, titlePrefix?: string): EnumModel[] {
  const keys: string[] = Object.keys(typeEnum);
  const result: EnumModel[] = [];
  for (const value of keys) {
    if (titlePrefix) {
      result.push({title: `${titlePrefix}.${value}`, value});
    } else {
      result.push({title: value, value});
    }
  }
  return result;
}
