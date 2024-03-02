import DefaultPageWrapper from "./common-component/default-page-wrapper";
import MainSlider from "./common-component/home-page/main-slider";
import ServiceSection from "./common-component/home-page/service-section";
import MainFooter from "./theme/main-footer";
import MainHeader from "./theme/main-header";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainSlider />
      <DefaultPageWrapper>
        <ServiceSection/>
      </DefaultPageWrapper>
      <MainFooter />
    </>
  );
}
