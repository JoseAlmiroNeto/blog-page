import { SwitchTheme } from "@/components/ui/SwitchTheme";

export function Header() {
  return (
    <header className="h-24 w-full text-xl flex items-center justify-between py-5 2xl:py-8 px-5 2xl:px-0 ">
      <p>Logo</p>

      <div className="flex items-center space-x-5">
        <nav>
          <ul className="flex space-x-5">
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
          </ul>
        </nav>
        <SwitchTheme />
      </div>
    </header>
  );
}
