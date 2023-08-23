export function Footer() {
  return (
    <footer className="py-8 flex flex-col sm:flex-row gap-4 items-center px-7 2xl:px-0">
      <p>© 2023</p>
      <ul className="flex flex-col sm:flex-row items-center gap-4">
        <li>
          <a href="">Twitter </a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
        <li>
          <a href="">RSS feed</a>
        </li>
        <li>
          <a href="">Add to Feedly</a>
        </li>
      </ul>
    </footer>
  );
}
