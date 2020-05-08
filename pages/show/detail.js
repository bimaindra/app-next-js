import Layout from '../../components/Layout';
import Fetch from '../../components/ServiceFetch';

const ShowDetail = props => {

    return (
        <Layout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            {props.show.image ? <img src={props.show.image.medium} /> : null}
        </Layout>
    )

};

ShowDetail.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/2993/episodes/${id}`);
    const show = await res.json();
  
    console.log(`Fetched show: ${show.name}`);
  
    return { show };
};

export default ShowDetail;