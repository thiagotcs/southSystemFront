/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { format } from 'date-fns';
import { orderBy } from 'lodash';
import IDragonData from '../interfaces/IDragonData';

export function firstCapitalLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatDatePT(value: string) {
  return format(new Date(value), 'dd/MM/yyyy');
}

export function orderByArray(array: IDragonData[]) {
  const orderDragons = orderBy(array, ['name'], ['asc']);
  return orderDragons;
}
