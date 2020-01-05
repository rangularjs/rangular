export interface ColumnModel {
  field: string;
  headerName: string;
  checkboxSelection?: boolean;
  sortable?: boolean;
  filter?: boolean;
  cellRenderer?: any;
  minWidth?: number;
  suppressSizeToFit?: boolean;
  width?: number;
  cellRendererFramework?: any;
  cellStyle?: any;
  cellRendererParams?: CellRendererParams;
}

export interface CellRendererParams {
  action: Function;
  icon: string;
  tooltip: string;
  iconClass: string;
}
