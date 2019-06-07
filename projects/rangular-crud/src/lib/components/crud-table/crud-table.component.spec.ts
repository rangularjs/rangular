import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CrudTableComponent} from './crud-table.component';
import {AgGridModule, AgGridNg2} from 'ag-grid-angular';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule} from '@angular/material';
import {By} from '@angular/platform-browser';
import {ChangeDetectionStrategy} from '@angular/core';
import {ColumnModel} from '../../models/column.model';

describe('CrudTableComponent', () => {
  let fixture: ComponentFixture<CrudTableComponent>;
  let component: CrudTableComponent;
  let COLUMNS: ColumnModel[];
  let DATA: any[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.forRoot(),
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
      ],
      declarations: [CrudTableComponent]
    }).compileComponents();

    fixture = TestBed.overrideComponent(CrudTableComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    COLUMNS = [
      {field: 'id', headerName: 'id'},
      {field: 'name', headerName: 'name'},
    ];
    DATA = [
      {id: 1, name: 'item 1'},
      {id: 2, name: 'item 2'},
    ];
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(AgGridNg2))).toBeTruthy();
  });

  it('should haven\'t remove button', () => {
    component.removeEnabled = false;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.delete-button')).length).toEqual(0);
  });

  it('should haven\'t add button', () => {
    component.addEnabled = false;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.add-button')).length).toEqual(0);
  });

  it('should submit edit event', () => {
    const item = DATA[0];
    fixture.detectChanges();

    let result;
    component.edit.subscribe((r) => result = r);
    component.onEdit(item);

    expect(result).toBe(item);
  });
  it('shouldn\'t submit edit event', () => {
    const item = DATA[0];
    component.editEnabled = false;
    fixture.detectChanges();

    let result;
    component.edit.subscribe((r) => result = r);
    component.onEdit(item);

    expect(result).toBeFalsy();
  });
});
