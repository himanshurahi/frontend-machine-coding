import { Moon, Sun, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

const themes = ['black', 'light', 'dark', 'coder', 'synthwave'] as const;
type Theme = typeof themes[number];

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('black');
  const [showThemes, setShowThemes] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <div className="dropdown dropdown-end">
        <button 
          tabIndex={0}
          onClick={() => setShowThemes(!showThemes)}
          className="btn btn-circle btn-ghost"
        >
          <Palette className="w-5 h-5" />
        </button>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
          {themes.map((t) => (
            <li key={t}>
              <button
                className={`capitalize ${theme === t ? 'text-primary' : ''}`}
                onClick={() => setTheme(t)}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="btn btn-circle btn-ghost"
      >
        {theme === 'dark' || theme === 'black' || theme === 'coder' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};