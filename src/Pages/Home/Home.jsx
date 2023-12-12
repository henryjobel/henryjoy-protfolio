

import Banner from '../../Components/Banner/Banner';
import MyProject from '../../Components/MyProjects/MyProject';
import MyService from '../../Components/MyServices/MyService';
import Myskill from '../../Components/Myskill/Myskill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyService></MyService>
            <Myskill></Myskill>
            <MyProject></MyProject>
        </div>
    );
};

export default Home;