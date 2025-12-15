import { DaySelection } from '../models';

export interface Manday extends DaySelection {
  member: string;
  day: string;
  iterationName: string;
}

export const MANDAY: Manday[] = [];
