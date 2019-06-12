import {Component} from '@angular/core';
import {DialogService} from 'rangular-material';
import {Item} from '../models/item.model';
import {CustomDialogComponent} from '../custom-dialog/custom-dialog.component';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {TdDialogService} from '@covalent/core/dialogs';
import {Subject} from 'rxjs';
import {CheckboxCellComponent, ColumnModel} from 'rangular-crud';

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

  items$: Subject<Item[]> = new Subject();

  contacts: any[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Micky', active: true},
    {id: 3, name: 'Marry'},
    {id: 4, name: 'Leo'},
    {id: 5, name: 'Lily'},
  ];

  columns: ColumnModel[] = [
    {headerName: 'Name', field: 'name', checkboxSelection: true},
    {headerName: 'Status', field: 'active', cellRendererFramework: CheckboxCellComponent},
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
    // this.dialogService.openItemSelector<Item>(this.items, {displayField: 'title'})
    //     //   .afterClosed()
    //     //   .subscribe(result => {
    //     //     console.log(result);
    //     //   });
    this.dialogService.openItemSelector<Item>(this.items$, {displayField: 'title'})
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
    setTimeout(() => {
      this.items$.next(this.items);
    }, 1000);
  }

  openCustom() {
    this.dialogService.open(CustomDialogComponent, {})
      .afterClosed()
      .subscribe(() => {
      });
  }

  openMessage() {
    this.dialogService.message('پیام', 'این یک پیام است');
  }

  submitted(items: any[]) {
    console.log(items);
  }

  itemSelected(item: any) {
    console.log(item);
  }

}
