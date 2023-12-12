

import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contactme/Contact';
import Myeducation from '../../Components/MyEducation/Myeducation';
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
            <Myeducation></Myeducation>
            <Contact></Contact>
        </div>
    );
};

export default Home;