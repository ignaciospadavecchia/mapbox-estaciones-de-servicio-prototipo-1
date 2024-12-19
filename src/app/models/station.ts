export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  capacity: number;
  status: 'Completa' | 'Disponible';
}