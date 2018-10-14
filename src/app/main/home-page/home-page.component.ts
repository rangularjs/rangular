import {Component} from '@angular/core';
import {DialogService} from 'rangular-material';
import {Item} from '../models/item.model';
import {CustomDialogComponent} from '../custom-dialog/custom-dialog.component';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {TdDialogService} from '@covalent/core/dialogs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  items: Item[] = [
    {title: 'Item 1', value: '1'},
    {title: 'Item 2', value: '2'},
    {title: 'Item 3', value: '3'},
  ];

  constructor(private dialogService: DialogService,
              private d: TdDialogService,
              private dialog: MatDialog,
              iconRegistry: MatIconRegistry,
              domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconInNamespace('assets', 'disconnect',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/disconnect.svg'));
  }

  openConfirm() {
    this.dialogService.confirm('آیا مطمئن هستید؟')
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  openPrompt() {
    this.dialogService.prompt('مقدار')
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  openSelector() {
    this.dialogService.openItemSelector<Item>(this.items, {displayField: 'title'})
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  openCustom() {
    this.dialogService.open(CustomDialogComponent, {})
      .afterClosed()
      .subscribe(() => {
      });
  }

  submitted(items: any[]) {
    console.log(items);
  }

  itemSelected(item: any) {
    console.log(item);
  }

}
