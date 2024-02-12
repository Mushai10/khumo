import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Error404 from '../components/Error404';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function Error404Page({ headerItems, errorItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Error404 errorItems={errorItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const errorItems = await getAllItems('error404');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            errorItems,
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    errorItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default Error404Page;
