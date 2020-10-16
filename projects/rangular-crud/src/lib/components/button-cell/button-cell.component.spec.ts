import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonCellComponent} from './button-cell.component';
import {AgGridModule} from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {By} from '@angular/platform-browser';
import {ChangeDetectionStrategy} from '@angular/core';

describe('ButtonCellComponent', () => {
  let component: ButtonCellComponent;
  let fixture: ComponentFixture<ButtonCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.forRoot([]),
        MatIconModule,
        MatTooltipModule,
        CovalentLayoutModule,
      ],
      declarations: [ButtonCellComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(ButtonCellComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .createComponent(ButtonCellComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.debugElement.queryAll(By.css('button')).length).toBe(1);
  });

  describe(' agInit', () => {
    it('should set params', () => {
      const data: any = {icon: 'add', tooltip: 'tooltip', iconClass: 'icon-class'};
      component.agInit(data);
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('button'));
      expect(button.nativeElement.querySelector('.icon-class').textContent).toContain('add');
      expect(button.attributes['ng-reflect-message']).toContain('tooltip');
    });
  });
});
