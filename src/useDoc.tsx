import { useContext } from 'react';
import { DocContext } from './DocContext';

export function useDoc() {
  return useContext(DocContext);
}
