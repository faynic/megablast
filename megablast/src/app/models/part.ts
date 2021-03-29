export interface Part {
    id: number;
    supplier: string;
    supplierPartName: string;
    givenPartName: string;
    currentQuantity: number;
    minimumQuantityRequired: number;
    maximumQuantity: number;
}
