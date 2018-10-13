/**
 * Base interface for entities.
 * All entities must implement this interface.
 */
export interface BaseEntity {
  // using type any to avoid methods complaining of invalid type
  id?: any;
}
