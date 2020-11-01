import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="app-notfound-wrapper">
      <div className="app-notfound">
        <div className="app-notfound-404">
          <div></div>
          <h1>505</h1>
        </div>
        <h2>Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <a href="/">home page</a>
      </div>
    </div>
  );
}
 
export default NotFound;