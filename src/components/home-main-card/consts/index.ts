import { BadgeType } from '@/components/badges-group/types';
import {
  BatteryCharging,
  Camera,
  Database,
  Hand,
  Smartphone,
  Volume2,
} from 'lucide-react';

export const BADGES: BadgeType[] = [
  {
    icon: Camera,
    label: '12 МП ультраширокая камера',
  },
  {
    icon: Volume2,
    label: 'Открытые стереодинамики',
  },
  {
    icon: Hand,
    label: 'Сенсорное управление',
  },
  {
    icon: Smartphone,
    label: 'Мобильное приложение',
  },
  {
    icon: Database,
    label: 'Большой объём памяти',
  },
  {
    icon: BatteryCharging,
    label: 'Стильный зарядный кейс',
  },
];
