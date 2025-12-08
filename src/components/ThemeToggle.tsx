import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import Icon from './ui/icon';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Переключить тему"
    >
      {theme === 'light' ? (
        <Icon name="Moon" size={20} />
      ) : (
        <Icon name="Sun" size={20} />
      )}
    </Button>
  );
};
