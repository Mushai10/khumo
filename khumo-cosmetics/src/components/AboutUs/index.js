import PropTypes from 'prop-types';
import * as IoIcon from 'react-icons/io5';
import * as FaIcon from 'react-icons/fa';
import ProgressBar from '../ProgressBar';
import VideoModal from '../VideoModal';

function AboutUs({ aboutItems }) {
    return (
        <div className="about border-b border-[#ededed] lg:py-[90px] md:py-[80px] py-[50px]">
           
            
            
            <div className="about-banner xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-[10px]">
                        <div className="col-span-8 " style={{height: 800, objectFit: "cover"}}>
                            <div className="single-img overflow-hidden object-cover" >
                                <img
                                    className="w-full block transition-all duration-500 hover:scale-[1.05]"
                                    src={aboutItems[0]?.aboutBannerOne}
                                    alt={aboutItems[0]?.aboutBannerAlt}
                                />
                            </div>
                        </div>
                        <div className="col-span-4 overflow-hidden" style={{height: 776, objectFit: "cover"}}>
                            <div className="single-img overflow-hidden object-cover mb-[10px] flex-1">
                                <img
                                    className="w-full block transition-all duration-500 hover:scale-[1.05]"
                                    src={aboutItems[0]?.aboutBannerTwo}
                                    alt={aboutItems[0]?.aboutBannerAlt}
                                />
                            </div>
                            <div className="single-img overflow-hidden object-cover flex-1">
                                <img
                                    className="w-full block transition-all duration-500 hover:scale-[1.05]"
                                    src={aboutItems[0]?.aboutBannerThree}
                                    alt={aboutItems[0]?.aboutBannerAlt}
                                />
                            </div>
                        </div>
                        <div className="col-span-4 overflow-hidden object-cover" style={{height: 500, objectFit: "cover"}}>
                            <div className="single-img overflow-hidden object-cover">
                                <img
                                    className="w-full block transition-all duration-500 hover:scale-[1.05]"
                                    src={aboutItems[0]?.aboutBannerFour}
                                    alt={aboutItems[0]?.aboutBannerAlt}
                                />
                            </div>
                        </div>
                        <div className="col-span-8 overflow-hidden" style={{height: 500, objectFit: "cover"}}>
                            <div className="single-img overflow-hidden object-cover">
                                <img
                                    className="w-full block transition-all duration-500 hover:scale-[1.05] object-contain"
                                    src={aboutItems[0]?.aboutBannerFive}
                                    alt={aboutItems[0]?.aboutBannerAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="address pt-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-[30px] max-sm:gap-y-[30px]">
                        <div className="lm:col-span-7 col-span-12">
                            <h2 className="text-[30px]">
                                {aboutItems[0]?.addressTitleOne}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: aboutItems[0]?.addressDescOne,
                                }}
                            />
                        </div>
                        {/* <div className="lm:col-span-5 col-span-12">
                            <h2 className="text-[30px]">
                                {aboutItems[0]?.addressTitleTwo}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: aboutItems[0]?.addressDescTwo,
                                }}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="support-info">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-[30px] max-md:gap-y-[30px] my-[60px]">
                        {aboutItems[0]?.singleSupportInfo?.map((items) => {
                            let InfoIcon;
                            if (items.fa === undefined){
                                InfoIcon = IoIcon[items.infoIcon];
                            }else{
                                InfoIcon = FaIcon[items.infoIcon];
                            }
                            return (
                                <div
                                    className="lg:col-span-3 md:col-span-4 lm:col-span-6 col-span-12"
                                    key={items.id}
                                >
                                    <div className="single-support-info">
                                        <div className="flex flex-col">
                                            <div className="content flex items-center mb-[20px]">
                                                <span className="icon mr-[20px] text-[36px]">
                                                    <InfoIcon />
                                                </span>
                                                <h2 className="text-[18px]">
                                                    {items.title}
                                                </h2>
                                            </div>
                                            <p className="lg:max-w-[250px]">
                                                {items.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div><div className="perfection">
                <div className="container">
                    <div className="grid grid-cols-12 lm:gap-x-[40px] max-sm:gap-y-[30px]">
                        <div className="lm:col-span-7 col-span-12">
                            <h2 className="text-[24px] mb-[10px]">
                                {aboutItems[0]?.perfectionTitle}
                            </h2>
                            <p>{aboutItems[0]?.perfectionDesc}</p>
                        </div>
                        <div className="lm:col-span-5 col-span-12">
                            <ProgressBar
                                title="Creativity"
                                progressText="82%"
                            />
                            <ProgressBar
                                title="Advertising"
                                progressText="82%"
                            />
                            <ProgressBar title="Interior Designing" progressText="70%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

AboutUs.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
};
export default AboutUs;
