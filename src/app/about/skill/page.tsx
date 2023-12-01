import Style from "../../../../styles/proyect.module.css";

export default function Skill() {
  return (
    <div>
      <section className={Style.contenedor}>
        Skill
        <div className={Style.section}>
          <img src="/next.jpg"></img>
        </div>
        <div className={Style.section}>
          <img src="/html.png"></img>
        </div>
        <div className={Style.section}>
          <img src="/javascript.png"></img>
        </div>
        <div className={Style.section}>
          <img src="/cloudinary.png"></img>
        </div>
        <div className={Style.section}>
          <img src="/redux.png"></img>
        </div>
        <div className={Style.section}>
          <img src="/react.jpg"></img>
        </div>
        <div className={Style.section}>
          <img src="/sql.png"></img>
        </div>
        <div className={Style.section}>
          <img src="/node.jpg"></img>
        </div>
        <div className={Style.section}>
          <img src="/svelte.jpg"></img>
        </div>
        <div className={Style.section}>
          <img src="/tailwind.png"></img>
        </div>
      </section>
    </div>
  );
}
