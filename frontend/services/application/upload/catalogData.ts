import { Catalog } from '~/domain/models/upload/catalog'


export class CatalogDTO {
  name: string
  acceptTypes: string
  properties: object

  constructor(item: Catalog) {
    this.name = item.name
    this.acceptTypes = item.accept_types
    this.properties = item.properties
  }
}
