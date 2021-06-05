import {Injectable} from '@angular/core';
import {ComponentType} from '@angular/cdk/portal';
import {Observable} from 'rxjs';

export interface ItemSelectorConfig {
  displayField: any;
  multiple?: boolean;
  searchPlaceHolder?: string;
  acceptButton?: string;
  icon?: string;
  selectedFn?: (obj, item) => boolean;
  selectedItems?: any[];
  onInit?: any;
}

@Injectable()
export abstract class DialogService {

  abstract open<T>(component: ComponentType<T>, config?: any): any;

  abstract confirm(message: string, title?: string, disableClose?: boolean): any;

  abstract prompt(title: string, value?: string, type?: string, disableClose?: boolean): any ;

  abstract message(title: string, message: string): any;

  abstract openItemSelector<T>(items: T[] | Observable<T[]>, config: ItemSelectorConfig): any;

}
