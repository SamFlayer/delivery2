import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  return (
    <div id="message" className={styles.error}>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
    </div>
  );
}

export default ErrorPage;