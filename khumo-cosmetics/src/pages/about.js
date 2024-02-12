import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import AboutUs from '../components/AboutUs';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function AboutPage({ headerItems, aboutItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="About Us"
                item="Home"
                itemPath="/"
                activeItem="About Us"
            />
            <AboutUs aboutItems={aboutItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const aboutItems = await getAllItems('about');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            aboutItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    aboutItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default AboutPage;
