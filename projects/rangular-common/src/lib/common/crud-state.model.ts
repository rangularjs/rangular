import {BaseEntity} from './base.entity';

/**
 * Base state model for CRUD.
 */
export interface CrudStateModel<T extends BaseEntity> {
  items: T[];
  selectedItem: T;
  isEditMode: boolean;
  pending: boolean;
}
