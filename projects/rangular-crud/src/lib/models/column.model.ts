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
}
