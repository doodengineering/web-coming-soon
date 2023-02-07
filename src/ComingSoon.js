import pin from './pin.png';
import logo from './branding.svg';
import { Helmet } from 'react-helmet';
import './ComingSoon.sass';
import detectBrowserLanguage from 'detect-browser-language'

function App() {

  const lang = detectBrowserLanguage();
  
  const title = lang === 'el-GR'
    ? 'Σύντομα κοντά σας'
    : 'Coming soon';
  const message = lang === 'el-GR'
    ? 'Ο ιστότοπος θα είναι σύντομα διαθέσιμος.'
    : 'This website will be avaible soon.';

  const url = lang === 'el-GR' 
    ? 'https://www.dood.gr/'
    : 'https://www.dood.gr/en';

  const urlTitle = lang === 'el-GR'
    ? 'Επισκεφθείτε μας'
    : 'Visit us';

  return (
    <div className="coming-soon">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <header>
        <img src={logo} alt="" />
      </header>
      <main>
        <img src={pin} alt="An illustration of a big pin." />
        <h1>{title}</h1>
        <p>
          {message}
        </p>
        <a
          className='button'
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {urlTitle}
        </a>
      </main>
    </div>
  );
}

export default App;
