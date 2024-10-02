import style from './Next.module.css'
import Card from "../components/Card"

function React() {
  return (
    <div className={style.home_page}>
      <Card banner="/img/movie_01.jpeg" title="Texto" date="10 set"/>
      <Card banner="/img/movie_02.jpg" title="Texto2" date="10 set"/>
    </div>
  );
}

export default React;