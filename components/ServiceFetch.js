import fetch from 'isomorphic-unfetch';

const ServiceFetch = (e, link) => {
    e.getInitialProps = async function() {
        const res = await fetch(link);
        const data = await res.json();
    
        console.log(`Show data fetched. Count: ${data.length}`);
    
        return {
            data: data.map(entry => entry) // select data based on json
        };
    }
};

export default ServiceFetch;