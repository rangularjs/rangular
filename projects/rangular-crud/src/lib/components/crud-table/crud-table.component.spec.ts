import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectionStrategy} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AgGridAngular, AgGridModule} from 'ag-grid-angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CrudTableComponent} from './crud-table.component';
import {ColumnModel} from '../../../../../rangular-common/src/lib/models/column.model';

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
        MatTooltipModule,
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
    expect(fixture.debugElement.query(By.directive(AgGridAngular))).toBeTruthy();
  });

  it('should haven\'t remove button', () => {
    component.removeEnabled = false;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('button')).length).toEqual(1);
  });

  it('should be disabled when nothing selected', () => {
    component.selectedRows = [];
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.disabled).toBeTruthy();
  });

  it('should be enabled when any row selected', () => {
    component.selectedRows = [{}];
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.disabled).toBeFalsy();
  });

  it('should render type value in the h4', () => {
    component.type = 'type';
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('h4'))[0].nativeElement.textContent).toContain(component.type);
  });

  it('should haven\'t add button', () => {
    component.addEnabled = false;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('button')).length).toEqual(1);
  });


  it('should submit edit event', (done) => {
    const item = DATA[0];
    fixture.detectChanges();

    component.edit.subscribe(result => {
      expect(result).toBe(item);
      done();
    });
    component.onEdit(item);
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

  it('should display filter button', () => {
    component.filterEnabled = true;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('button')).length).toEqual(3);
  });

});
