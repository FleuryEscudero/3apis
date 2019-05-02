import Head from 'next/head';
import Nav from '../components/Nav';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Pagina de BitCoin</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css" />

        </Head>

        <Nav />

        <div className="container mt-5">
            {props.children}
        </div>

    </div>
)


export default MasterPage;