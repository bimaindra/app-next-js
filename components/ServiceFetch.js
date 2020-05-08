import fetch from 'isomorphic-unfetch';

const ServiceFetch = (e, link, condition) => {

    if (condition === 'mapping') {

        e.getInitialProps = async function() {
            const res = await fetch(link);
            const data = await res.json();
        
            console.log(`Show data fetched. Count: ${data.length}`);
        
            return {
                data: data.map(entry => entry) // select data based on json
            };
        }

    } else if (condition === 'direct') {

        e.getInitialProps = async function(context) {
            const { id } = context.query;
            const res = await fetch(link + `/${id}`);
            const show = await res.json();
          
            console.log(`Fetched show: ${show.name}`);
          
            return { show };
        };

    } else {

        console.log('Please define the "Condition" parameters');
        

    }
};

export default ServiceFetch;