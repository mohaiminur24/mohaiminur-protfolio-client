import DefaultPageWrapper from "./common-component/default-page-wrapper";
import MainSlider from "./common-component/home-page/main-slider";
import MainFooter from "./theme/main-footer";
import MainHeader from "./theme/main-header";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainSlider/>
      <DefaultPageWrapper>
      <div>
        
        <h1>home content</h1>
      </div>
      </DefaultPageWrapper>
      <MainFooter/>
    </>
  );
}
