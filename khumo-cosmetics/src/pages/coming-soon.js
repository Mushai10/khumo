import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import ComingSoon from '../components/ComingSoon';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function ComingSoonPage({ headerItems, comingSoonItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Coming Soon"
                item="Home"
                itemPath="/"
                activeItem="Coming Soon"
            />
            <ComingSoon comingSoonItems={comingSoonItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const comingSoonItems = await getAllItems('coming-soon');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            comingSoonItems,
            footerItems,
        },
    };
}

ComingSoonPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    comingSoonItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default ComingSoonPage;
