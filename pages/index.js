import Layout from '../components/Layout';

let looping = (number) => {

    for (let i = 0; i < number.length; i++) {
        
    }

    console.log(i);

}

const Index = () => {
	return (
        <Layout>
            <h1>Homepage</h1>
            <p>This is in homepage</p>
            <br/>
            <br/>
            <br/>
            <p>Test Looping</p>
            <div id="loop"></div>
        </Layout>
	)
};

export default Index;