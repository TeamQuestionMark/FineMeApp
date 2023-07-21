import { useTabBarStore } from '@/store/tabBar';
import { useEffect } from 'react';

export default function useHideTabBar() {
  const { show, hide } = useTabBarStore();

  useEffect(() => {
    hide();
    return show;
  }, [hide, show]);
}
