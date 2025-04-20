export default function Header({ theme }) {
  return <header className={theme === 'light' ? 'light' : 'dark'}></header>;
}
