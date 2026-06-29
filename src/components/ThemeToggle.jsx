import React from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import useStore from '../store/useStore';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useStore();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <IconSun className="h-5 w-5 transition-all" />
      ) : (
        <IconMoon className="h-5 w-5 transition-all text-blue-200" />
      )}
    </Button>
  );
}
