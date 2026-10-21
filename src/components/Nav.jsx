import { useRef } from "react";
import Icon from "./Icon";
import { links } from "../data/content";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const dialogRef = useRef(null);
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-name" href="#top">
          Charan Tejas Parimi
        </a>
        <nav className="nav-links" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.href} href={s.href}>
              {s.label}
            </a>
          ))}
          {links.resume && (
            <a className="pill" href={links.resume}>
              Resume
            </a>
          )}
        </nav>
        <button type="button" className="nav-menu" onClick={open} aria-label="Open menu">
          <Icon name="menu" size={22} />
        </button>
      </div>

      <dialog ref={dialogRef} className="sheet" aria-label="Menu">
        <div className="sheet-top">
          <span className="nav-name">Charan Tejas Parimi</span>
          <button type="button" className="nav-menu" onClick={close} aria-label="Close menu">
            <Icon name="close" size={22} />
          </button>
        </div>
        <nav aria-label="Sections">
          {sections.map((s) => (
            <a key={s.href} href={s.href} onClick={close}>
              {s.label}
            </a>
          ))}
          {links.resume && (
            <a href={links.resume} onClick={close}>
              Resume
            </a>
          )}
        </nav>
      </dialog>
    </header>
  );
};

export default Nav;
