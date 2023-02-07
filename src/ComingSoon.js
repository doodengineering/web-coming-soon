import pin from './pin.png';
import logo from './branding.svg';
import { Helmet } from 'react-helmet';
import { sprintf } from 'sprintf-js';
import './ComingSoon.sass';

function App() {

  const lang = process.env.APP_LANG ?? 'el';
  const client = process.env.APP_HOST_NAME ?? 'example.gr';
  
  const title = lang === 'el'
    ? 'Σύντομα κοντά σας'
    : 'Coming soon';
  const message = lang === 'el'
    ? sprintf(
      'Ο ιστότοπος %s θα είναι σύντομα διαθέσιμος.',
      client
    )
    : sprintf(
      'The %s website will be avaible soon.',
      client
    );

  const url = lang === 'el' 
    ? 'https://www.dood.gr/'
    : 'https://www.dood.gr/en';

  const urlTitle = lang === 'el'
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
