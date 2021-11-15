import '../../public/css/bootstrap.min.css';
import '../../public/css/font-awesome.min.css';
import '../../public/css/Style.css';
import '../../public/css/button.css';
import 'react-toastify/dist/ReactToastify.css';
import Global from '../container/States-functions.jsx';


const MyApp = ({ Component, pageProps }) => {

  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  )
}
export default MyApp;
