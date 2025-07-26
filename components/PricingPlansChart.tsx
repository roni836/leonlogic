import AdvancedPriceplanIcon from './Icons/AdvancedPriceplanIcon';
import BasicPriceplanIcon from './Icons/BasicPriceplanIcon';
import PricebulletPointIcon from './Icons/PricebulletPointIcon';
import ProfessionalPriceplanIcon from './Icons/ProfessionalPriceplanIcon';

const PricingPlansChart = () => {
    return (
        <div className="container">
            <div className="mb-12 text-center">
                <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                    PRICING PLAN
                </p>
                <h2 className="mx-auto max-w-[489px] text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                    Flexible Plans For Small To Fast-
                    <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> Growing Business</span>
                </h2>
            </div>
            <div className="mx-auto grid items-end gap-[30px] max-w-[400px] lg:max-w-[1260px] lg:grid-cols-3">
                <div className="rounded-[15px] border-2 border-[#E1E6F5] dark:border-[#9199B5]/[0.12] px-5 py-[30px] 2xl:px-[50px] group hover:border-secondary dark:hover:border-secondary duration-200">
                    <div className="flex items-center justify-between">
                        <span className="rounded-md bg-[#4B5576]/10 dark:bg-[#9199B5]/[0.12] px-4 py-3 text-base font-bold leading-[18px] text-[#4B5576] dark:text-white">
                            BASIC
                        </span>
                        <span data-aos="zoom-in" data-aos-duration="1000">
                            <BasicPriceplanIcon />
                        </span>
                    </div>
                    <h3 className="mt-10 text-7xl font-bold dark:text-white">$19</h3>
                    <p className="mt-[30px] text-base font-semibold text-gray dark:text-[#9199B5]">Per member, per Month</p>
                    <ul className="mt-[30px] space-y-3 text-lg text-success dark:text-white">
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Access to All Features</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>1k lookups / per month</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#FB5D70]" />
                            </span>
                            <p>No API Credits</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>10 Monitoring Quota</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>60 minutes Monitoring interval</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>20% discount on backorders</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Domain Name Appraisal</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Ip Monitoring</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Backlink Monitoring</p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="mt-[30px] w-full rounded-[70px] bg-black dark:bg-[#9199B5]/[0.12] py-[18px] text-base font-semibold text-white duration-200 group-hover:bg-secondary dark:group-hover:bg-secondary group-hover:text-black"
                    >
                        Start free 14-day Trial
                    </button>
                    <p className="mt-2.5 text-center text-sm font-bold text-gray dark:text-[#9199B5]">No credit card required</p>
                </div>
                <div className="rounded-[15px] bg-primary dark:bg-[#9199B5]/[0.12] px-5 py-[30px] shadow-[0px_0px_100px_rgba(0,30,43,0.2)] 2xl:px-[50px] group border-2 hover:border-secondary dark:hover:border-secondary duration-200 dark:border-transparent">
                    <span className="inline-block rounded-md bg-secondary px-2.5 py-[5px] text-base font-bold leading-4 text-success">POPULAR</span>
                    <div className="mt-2.5 flex items-center justify-between">
                        <span className="rounded-md bg-white/10 px-4 py-3 text-base font-bold leading-[18px] text-white ">PROFESSIONAL</span>
                        <span data-aos="zoom-in" data-aos-duration="1000">
                            <ProfessionalPriceplanIcon />
                        </span>
                    </div>
                    <h3 className="mt-10 text-7xl font-bold text-white">$49</h3>
                    <p className="mt-[30px] text-base font-semibold text-[#9199B5]">Per member, per Month</p>
                    <ul className="mt-[30px] space-y-3 text-lg text-white">
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Access to All Features</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>1k lookups / per month</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#FB5D70]" />
                            </span>
                            <p>No API Credits</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>10 Monitoring Quota</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>60 minutes Monitoring interval</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>20% discount on backorders</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Domain Name Appraisal</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Ip Monitoring</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Backlink Monitoring</p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="mt-[30px] w-full rounded-[70px] bg-white py-[18px] text-base font-semibold text-black duration-200 group-hover:bg-secondary group-hover:text-black"
                    >
                        Choose Plan
                    </button>
                    <p className="mt-2.5 text-center text-sm font-bold text-[#9199B5]">No credit card required</p>
                </div>
                <div className="rounded-[15px] border-2 border-[#E1E6F5] dark:border-[#9199B5]/[0.12] px-5 py-[30px] 2xl:px-[50px] group hover:border-secondary dark:hover:border-secondary duration-200">
                    <div className="flex items-center justify-between">
                        <span className="rounded-md bg-[#4B5576]/10 dark:bg-[#9199B5]/[0.12] px-4 py-3 text-base font-bold leading-[18px] text-[#4B5576] dark:text-white">
                            ADVANCED
                        </span>
                        <span data-aos="zoom-in" data-aos-duration="1000">
                            <AdvancedPriceplanIcon />
                        </span>
                    </div>
                    <h3 className="mt-10 text-7xl font-bold dark:text-white">$99</h3>
                    <p className="mt-[30px] text-base font-semibold text-gray dark:text-[#9199B5]">Per member, per Month</p>
                    <ul className="mt-[30px] space-y-3 text-lg text-success dark:text-white">
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Access to All Features</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>1k lookups / per month</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#FB5D70]" />
                            </span>
                            <p>No API Credits</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>10 Monitoring Quota</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>60 minutes Monitoring interval</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>20% discount on backorders</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Domain Name Appraisal</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Ip Monitoring</p>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span>
                                <PricebulletPointIcon className="text-[#07D673]" />
                            </span>
                            <p>Backlink Monitoring</p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="mt-[30px] w-full rounded-[70px] bg-black dark:bg-[#9199B5]/[0.12] py-[18px] text-base font-semibold text-white duration-200 group-hover:bg-secondary dark:group-hover:bg-secondary group-hover:text-black    "
                    >
                        Choose Plan
                    </button>
                    <p className="mt-2.5 text-center text-sm font-bold text-gray dark:text-[#9199B5]">No credit card required</p>
                </div>
            </div>
        </div>
    );
};

export default PricingPlansChart;
