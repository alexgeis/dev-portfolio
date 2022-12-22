import styles from "./WIP.module.css"

export function WorkInProgressPage() {

  return (
    <div className={styles.wrapper}>
      <h1>Oops!</h1>
      <p>Sorry, this page will be finished soon.</p>
      <p>In the meantime, relax with some <a href="https://open.spotify.com/artist/41yri20ft220T9dx4A6mWa?si=-e-vKZuXSvqnzf3-7tIjDA">music</a></p>
    </div>
  );
}